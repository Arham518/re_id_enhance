# RE Touch ID — Aged & Labour Fingerprint Enhancement

Machine-learning fingerprint project for **RE Touch ID**. It targets low-quality, blurred, aged or labour-worn prints: restoring ridge detail, reducing noise, and improving clarity for biometric matching workflows.

Pairs a **React** product site + scanner UI with a **Flask** backend that loads a scikit-learn model when available.

> **Status:** research / portfolio demo. Scanner posts to `http://127.0.0.1:5000/upload`.
> If `manual_fingerprint_classifier.pkl` is missing or prediction is not wired, the API returns a **simulated** high-quality metrics payload so the UI can still be demonstrated.

## What works now vs. simulated vs. planned

| Area | Status |
| --- | --- |
| Product pages (Home, About, Services, Gallery) | ✅ Front-end works |
| Scanner upload UI | ✅ Works |
| Flask `/upload` and `/health` | ✅ Works when backend is running |
| joblib model load (`manual_fingerprint_classifier.pkl`) | ✅ Loads when the file is present |
| Real feature extraction + model.predict | 🧪 Placeholder — current path returns simulated metrics |
| Full CycleGAN / Keras enhancement pipeline | see sister repo [`re_id_enhance_website`](https://github.com/Arham518/re_id_enhance_website) |
| Hosted production API | 🗓 Planned |

## Setup

### Frontend

```bash
git clone https://github.com/Arham518/re_id_enhance.git
cd re_id_enhance
npm install
npm run dev       # Vite on port 3000
npm run build
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py                 # http://127.0.0.1:5000
```

Keep real API keys out of git. Optional `.env` values from earlier AI Studio scaffolding are not required for the local scanner demo.

## Project structure

```
src/
  pages/          Home, About, Services, Gallery, Scanner
  components/
  lib/
backend/
  app.py
  manual_fingerprint_classifier.pkl
  requirements.txt
public/
```

## Known limitations

- CORS is open for local development.
- Without a fully wired feature pipeline, results are illustrative metrics.
- Package name in `package.json` is still the generic `react-example`.

## Roadmap

1. Wire real feature extraction into `FingerprintProcessor.process_image`
2. Share a common backend with `re_id_enhance_website`
3. Auth and rate limits before any public deploy

## Security

Never commit secrets or private datasets. The Flask demo has no authentication — keep it on localhost.

## Author

Muhammad Arham · [GitHub Arham518](https://github.com/Arham518)
