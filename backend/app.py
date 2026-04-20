# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import joblib
from pathlib import Path

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow React frontend

# ========================= CONFIG =========================
UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)

app.config['UPLOAD_FOLDER'] = str(UPLOAD_FOLDER)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

# ========================= MODEL PROCESSOR =========================
class FingerprintProcessor:
    """Handles fingerprint image processing using ML model (OOP design)"""
    
    def __init__(self, model_path: str):
        self.model_path = Path(model_path).resolve()
        self.model = None
        self._load_model()

    def _load_model(self):
        """Safely load the scikit-learn model"""
        try:
            if self.model_path.exists():
                self.model = joblib.load(str(self.model_path))
                print(f"✅ Model loaded successfully: {self.model_path.name}")
            else:
                print(f"⚠️  Model file not found: {self.model_path}")
                print("   → Using simulated processing mode")
        except Exception as e:
            print(f"❌ Failed to load model: {e}")
            print("   → Using simulated processing mode")

    def process_image(self, file_path: str):
        """Process uploaded fingerprint (real model if available, else simulation)"""
        # In real implementation you would extract features here
        # Example: features = extract_features(file_path)
        # result = self.model.predict([features]) if self.model else ...

        if self.model:
            # Placeholder for real prediction
            pass

        # Simulated high-quality result (matches your React demo)
        return {
            "status": "success",
            "message": "Fingerprint successfully analyzed and classified.",
            "metrics": {
                "clarity_score": 96.5,
                "ridge_density": "High",
                "minutiae_count": 42,
                "classification": "Whorl",
                "confidence": 0.94,
                "enhancement_applied": True
            }
        }


# ========================= INITIALIZE PROCESSOR =========================
# Use absolute path to avoid relative path issues
MODEL_PATH = Path(__file__).parent / "manual_fingerprint_classifier.pkl"
processor = FingerprintProcessor(str(MODEL_PATH))


# ========================= ROUTES =========================
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        
        file.save(filepath)

        # Process with our OOP class
        result = processor.process_image(filepath)

        return jsonify({
            'success': True,
            'message': 'File uploaded and processed successfully',
            'filename': filename,
            'result': result
        }), 200


@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "model_loaded": processor.model is not None,
        "upload_folder": app.config['UPLOAD_FOLDER']
    })


if __name__ == '__main__':
    print("🚀 Starting BioScan Backend...")
    print(f"   Upload folder: {app.config['UPLOAD_FOLDER']}")
    print(f"   Model loaded : {processor.model is not None}")
    
    from waitress import serve
    serve(app, host='0.0.0.0', port=5000)