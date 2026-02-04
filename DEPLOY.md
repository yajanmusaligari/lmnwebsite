# Deployment Guide

## Free Hosting Setup

### Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com using GitHub)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (https://github.com/new)
   - Name it whatever you like (e.g., "lmn-app")
   - Make it public or private
   - Don't initialize with README

2. In your terminal, run these commands:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Add environment variables if needed:
   - Any variables from `backend/.env`
   - Any variables from `frontend/.env`
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Step 3: Environment Variables
Make sure to add these in Vercel dashboard (Settings → Environment Variables):
- Database connection strings (MongoDB, etc.)
- API keys
- Any secrets from your `.env` files

### Alternative Backend Hosting
If you prefer to host the backend separately:
- **Railway**: https://railway.app (free tier available)
- **Render**: https://render.com (free tier available)
- **Fly.io**: https://fly.io (free tier available)

Then update the frontend API URL to point to your backend deployment.

## Build Configuration

The project is configured to build:
- Frontend: React app in `frontend/` directory
- Backend: Python FastAPI in `backend/` directory

Vercel will automatically:
1. Install dependencies
2. Build the frontend (`npm run build`)
3. Deploy backend as serverless functions
