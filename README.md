# Interior Connect

Full-stack starter: **React (Vite)** frontend + **Python (FastAPI)** backend.

```
Interior Connect/
├── frontend/        React 18 + Vite (port 5173)
├── backend/         FastAPI + Uvicorn (port 8000)
├── CLAUDE.md        Working notes for Claude sessions
└── README.md
```

## Prerequisites
- Node.js 18+ and npm
- Python 3.10+

## Backend (Windows PowerShell)
```powershell
cd "D:\Interior Connect\backend"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload --port 8000
```
API docs: http://localhost:8000/docs

Run tests: `pytest`

## Frontend
```powershell
cd "D:\Interior Connect\frontend"
npm install
npm run dev
```
App: http://localhost:5173 — `/api/*` calls are proxied to the backend on port 8000.

## Git
```powershell
cd "D:\Interior Connect"
git init
git add .
git commit -m "Initial scaffold: React + FastAPI"
```
