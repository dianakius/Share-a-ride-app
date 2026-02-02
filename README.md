# 🚗 Share Ride - Ride Sharing Platform

![Share Ride Banner](https://img.shields.io/badge/Share-Ride-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## About Share Ride

Say goodbye to expensive travel and hello to a whole new world of convenience, savings, and friendship! Share Ride is a modern ride-sharing platform that connects travelers heading in the same direction, making city-to-city travel more affordable, social, and stress-free.

### Key Features

- **Smart Search** - Find rides based on location, destination, and date
- **Cost Sharing** - Split travel expenses with fellow travelers
- **Community Driven** - Connect with like-minded explorers
- **Secure Authentication** - JWT-based user authentication
- **Responsive Design** - Works seamlessly on all devices
- **Real-time Updates** - Instant ride availability

---

## Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests
- **Lucide React** - Icons
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

---

## Installation & Setup

### 1️ Clone the Repository
```bash
git clone https://github.com/yourusername/Share-A-Ride-App-Final-Project.git
cd Share-A-Ride-App-Final-Project
```

### 2️ Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
PASSWORD=your_jwt_secret_key
SALT_ROUND=10
PORT=8001
```

**Start the backend server:**
```bash
npm start
# or with nodemon for development
nodemon server.js
```

Server will run on `http://localhost:8001`

### 3️ Frontend Setup

Open a new terminal window:
```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Frontend will run on `http://localhost:3000`

---



### 🚀 Happy Traveling with Share Ride! 🛣️

**Made with ❤️ by Dianakius**

⭐ Star this repo if you found it helpful!

</div>
