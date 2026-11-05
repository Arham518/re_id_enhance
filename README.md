# RE Touch ID — Aged & Labour Fingerprint Enhancement

Machine learning–based fingerprint enhancement project for **RE Touch ID**. It targets low-quality, blurred, aged, or labour-worn prints: restoring ridge detail, reducing noise, and improving clarity for biometric matching workflows.

## Overview

Traditional AFIS pipelines often reject faded, cut, or worn fingerprints. This project pairs a React front end (product site + scanner UI) with a Flask backend that loads a scikit-learn model for fingerprint-oriented processing.

## Features

- Product site: Home, About, Services, Gallery, Scanner
- Image upload and API-backed processing
- Classifier / enhancement pipeline hooks via joblib models
- 3D-style UI accents (React Three Fiber)

## Tech stack

**Frontend:** React, Vite, Tailwind CSS, React Three Fiber, Motion  
**Backend:** Flask, Flask-CORS, scikit-learn, Pillow, NumPy, joblib

## Quick start

```bash
git clone https://github.com/Arham518/re_id_enhance.git
cd re_id_enhance
npm install
npm run dev
```

Backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Use placeholder env values only in committed samples; keep real API keys out of git.

## Developer

**Muhammad Arham** — [GitHub](https://github.com/Arham518)
