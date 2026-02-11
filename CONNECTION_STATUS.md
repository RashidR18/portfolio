# Backend-Frontend Connection Summary

## ✅ Setup Complete!

Both servers are now running and connected:

### 🔙 Backend
- **Status**: ✅ Running
- **URL**: http://localhost:5000
- **Port**: 5000
- **Database**: MongoDB (Connected)
- **Command**: `npm run dev` (with auto-reload via nodemon)

### 🎨 Frontend
- **Status**: ✅ Running
- **URL**: http://localhost:5175
- **Port**: 5175 (auto-adjusted since 5173-5174 were in use)
- **Command**: `npm run dev`

---

## 📋 API Endpoints Available

### Contact Routes

#### 1. **Send Contact Message**
```
POST http://localhost:5000/api/contact

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}

Response (Success):
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "...",
    "status": "new",
    "createdAt": "2024-02-11T...",
    "updatedAt": "2024-02-11T..."
  }
}
```

#### 2. **Get All Messages** (Admin)
```
GET http://localhost:5000/api/contact
```

#### 3. **Get Single Message**
```
GET http://localhost:5000/api/contact/:id
```

#### 4. **Update Message Status**
```
PUT http://localhost:5000/api/contact/:id

Request Body:
{
  "status": "read" // or "replied"
}
```

#### 5. **Delete Message**
```
DELETE http://localhost:5000/api/contact/:id
```

---

## 📁 Project Files Modified/Created

### Backend
- ✅ `server.js` - Enhanced with proper error handling, CORS, and middleware
- ✅ `models/Contact.js` - Updated schema with validation and status tracking
- ✅ `routes/contactRoutes.js` - Full CRUD operations for contact messages
- ✅ `.env` - Environment variables (MongoDB URI, Port, Frontend URL)
- ✅ `package.json` - Added `dev` script with nodemon

### Frontend
- ✅ `src/api/config.js` - Centralized API configuration
- ✅ `src/components/Contact.jsx` - Updated with proper error handling, loading states
- ✅ `src/context/ThemeContext.jsx` - Dark/light mode support
- ✅ `.env` - Frontend API URL configuration

---

## 🧪 Testing the Connection

### Test via Frontend
1. Go to http://localhost:5175
2. Scroll to the Contact section
3. Fill in the form with test data
4. Click "Send Message"
5. You should see a success message ✅

### Test via API (Using Postman or cURL)
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

---

## 🔑 Key Features

✅ **Full Backend-Frontend Integration**
- Contact form data flows from frontend → API → MongoDB
- Real-time validation and error handling
- Success/error messages displayed to user

✅ **Environmental Configuration**
- Backend uses `.env` for MongoDB URI
- Frontend uses `.env` for API URL
- Easy to switch between development and production

✅ **Data Persistence**
- All messages stored in MongoDB
- Timestamps automatically recorded
- Message status tracking (new/read/replied)

✅ **Error Handling**
- Form validation on frontend
- Server-side validation on backend
- User-friendly error messages
- Loading states while submitting

✅ **CORS Configuration**
- Backend allows requests from frontend
- Can be modified in `.env` (FRONTEND_URL)

---

## 🚀 Running Commands

### Start Backend (in new terminal)
```bash
cd portfolio/backend
npm run dev
```

### Start Frontend (in new terminal)
```bash
cd portfolio/frontend
npm run dev
```

---

## 📝 MongoDB Collections

Your data is stored in MongoDB as:

**Collection**: `contacts`

**Sample Document**:
```json
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to...",
  "status": "new",
  "createdAt": ISODate("2024-02-11T..."),
  "updatedAt": ISODate("2024-02-11T...")
}
```

---

## ⚙️ Environment Variables Reference

### Backend `.env`
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/?appName=Cluster0
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5175
```

### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔗 Next Steps

1. ✅ Backend Connected
2. ✅ Frontend Connected
3. ✅ Contact Form Working
4. 📋 TODO: Deploy to production (Heroku/Render for backend, Vercel/Netlify for frontend)
5. 📋 TODO: Add authentication for admin panel
6. 📋 TODO: Create dashboard to view contact messages

---

## 📞 Support

If you encounter any issues:

1. **Backend won't start?**
   - Check MongoDB URI in `.env`
   - Verify MongoDB is accessible
   - Check if port 5000 is available

2. **Frontend can't reach backend?**
   - Verify backend is running on http://localhost:5000
   - Check `.env` VITE_API_URL
   - Check browser console for CORS errors

3. **Messages not saving?**
   - Verify MongoDB connection
   - Check browser console for form errors
   - Check backend console for server errors

---

**Status**: ✅ **FULLY CONNECTED AND OPERATIONAL**

Your portfolio website is now ready to receive messages! 🎉
