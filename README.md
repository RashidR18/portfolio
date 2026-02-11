# Portfolio Website - Setup Instructions

## Overview

This is a full-stack MERN portfolio website with:
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express + MongoDB

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (Cloud or Local)

## Installation & Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the backend folder:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/?appName=Cluster0
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
```

#### Run Backend

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The backend will be available at `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

#### Run Frontend

```bash
npm run dev
```

The frontend will be available at `http://localhost:5174`

## API Endpoints

### Contact Routes

- **POST** `/api/contact` - Send a new contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I'd like to discuss a project..."
  }
  ```

- **GET** `/api/contact` - Get all contact messages (Admin)

- **GET** `/api/contact/:id` - Get a specific message

- **PUT** `/api/contact/:id` - Update message status
  ```json
  {
    "status": "read" // or "replied"
  }
  ```

- **DELETE** `/api/contact/:id` - Delete a message

## Project Structure

```
portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── config.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── context/
    │   │   └── ThemeContext.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── .env
```

## Features

- ✅ Responsive Design
- ✅ Dark/Light Mode Toggle
- ✅ Smooth Animations (Framer Motion)
- ✅ Contact Form with Backend Integration
- ✅ MongoDB Database Storage
- ✅ Error Handling & Validation
- ✅ Loading States
- ✅ Success Messages

## Running Both Servers

### Option 1: Separate Terminals

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

### Option 2: Using Concurrently (Optional)

In the root folder, you can create a `package.json` with:

```json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  }
}
```

Then run: `npm run dev`

## Testing the Connection

1. Start both servers
2. Go to `http://localhost:5174`
3. Fill out the contact form
4. Click "Send Message"
5. You should see a success message
6. The message will be saved in MongoDB

## Troubleshooting

### Frontend can't reach backend?
- Make sure backend is running on `http://localhost:5000`
- Check `.env` file in frontend has correct `VITE_API_URL`
- Check CORS is enabled in backend

### MongoDB connection fails?
- Verify MongoDB URI in `.env`
- Make sure IP whitelist allows your connection in MongoDB Atlas
- Check internet connection

### Port already in use?
- Change PORT in `.env` (backend)
- Backend will auto-find next available port
- Frontend uses Vite which auto-detects next port

## Deployment

### Backend (Heroku/Render/etc)
- Push code with `.env` variables set in platform settings
- Use `npm start` script

### Frontend (Vercel/Netlify/etc)
- Set `VITE_API_URL` to production backend URL
- Push code to deploy

## License

ISC
