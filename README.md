# Task Tracker

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to efficiently manage their tasks with complete CRUD operations, search functionality, and filtering capabilities.

## ✨ Features

- **Task Management**: Create, read, update, and delete tasks
- **Status Tracking**: Update task status (Incomplete, Completed)
- **Search Functionality**: Search tasks by title
- **Filter Options**: Filter tasks by status
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant UI updates when tasks are modified

## 🚀 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router for navigation

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- CORS for cross-origin requests

**Development Tools:**
- Nodemon for development

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tharun075/Task-Tracking-System.git
   cd task-tracking-system
   ```

2. **Install server dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3210
   LOC_URL=mongodb://localhost:27017/tasktracker
   # For MongoDB Atlas:
   # MONGO_URL=your_atlas_cluster_link
   ```

5. **Start the application**
   
   For development (runs both client and server):
   ```bash
   npm run dev
   ```
   
   Or run separately:
   ```bash
   # Terminal 1 - Backend server
   npm run server
   
   # Terminal 2 - Frontend client
   npm run client
   ```

## 🌐 API Endpoints

### Tasks
- `GET /api/tasks/getAllTasks` - Get all tasks
- `POST /api/tasks/createTask` - Create new task
- `PUT /api/tasks/updateTask/:id` - Update task
- `DELETE /api/tasks/deleteTask/:id` - Delete task


### Example Request Body (Create/Update Task)
```json
{
  "title": "Complete project documentation",
  "status": "incomplete",
  "createdAt": "2024-01-15T00:00:132Z"
}
```

## 📁 Project Structure

```
task-tracker/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   └── package.json
│   └── .env               # Environment varaibles
├── backend/                # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── MongoConnection/           # Database configuration
├── .env                  # Environment variables
├── package.json          # Main package.json
└── README.md
```

## 💾 Database Schema

### Task Model
```javascript
{
  title: {
    type: String,
    required: ,
    unique:true
  },
  status: {
    type: String,
    enum: ['incomplete, 'completed'],
    default: 'incomplete'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}
```

## 🎯 Usage

1. **Creating Tasks**: Click the "Add Task" button and fill in the task details
2. **Updating Status**: Click on a task to edit its status
3. **Searching**: Use the search bar to find tasks by title
4. **Filtering**: Use filter buttons to view tasks by status 
5. **Deleting**: Click the delete button to remove unwanted tasks

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd Task-Tracking-System/frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd Task-Tracking-System/backend
node server.js
```

### Environment Variables for Production
- `VITE_API_URL=your_backend_deployed_link`
- `MONGODB_URI=your_mongodb_atlas_uri`
- `PORT=5000`



## 📧 Contact

Tharun Unnikrishnan - tharunrt570@gmail.com

Project Link: [https://github.com/yourusername/task-tracker](https://github.com/yourusername/task-tracker)



---
