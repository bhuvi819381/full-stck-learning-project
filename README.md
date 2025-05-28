# 🚀 Full Stack Learning Journey - MERN Stack

[![GitHub stars](https://img.shields.io/github/stars/bhuvi819381/full-stack-learning?style=social)](https://github.com/bhuvi819381/full-stack-learning)
[![GitHub forks](https://img.shields.io/github/forks/bhuvi819381/full-stack-learning?style=social)](https://github.com/bhuvi819381/full-stack-learning)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Learning Progress](https://img.shields.io/badge/Learning%20Progress-In%20Progress-orange)](https://github.com/bhuvi819381/full-stack-learning)

> 📚 Currently learning full-stack web development! This repository documents my ongoing journey from beginner to advanced developer using the MERN stack (MongoDB, Express.js, React, Node.js). Follow along as I build projects and learn new concepts!

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Projects Overview](#projects-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Learning Path](#learning-path)
- [Installation & Setup](#installation--setup)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

Welcome to my full-stack learning journey! 👋 I'm currently learning web development and this repository documents my progress as I work through projects of increasing complexity. Each project helps me understand different concepts and technologies in the MERN stack.

**Current Learning Goals:**

- 📖 Master the MERN stack (MongoDB, Express.js, React, Node.js)
- 🛠️ Build real-world applications with modern development practices
- 🔐 Learn authentication, authorization, and security best practices
- 🚀 Understand deployment strategies and DevOps fundamentals
- 🧠 Develop problem-solving skills through hands-on project building

**My Learning Approach:**

- Start with simple frontend projects to understand JavaScript fundamentals
- Progress to full-stack applications connecting frontend and backend
- Gradually add complexity with databases, authentication, and advanced features
- Document my learning process and challenges faced along the way

## 🛠️ Tech Stack

### Frontend

- **React** - UI library for building interactive user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### Development Tools

- **ESLint** - Code linting and formatting
- **Nodemon** - Auto-restart development server
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Projects Overview

### 🟢 Current Projects

| Project                                              | Status         | Technologies            | Description                                                  |
| ---------------------------------------------------- | -------------- | ----------------------- | ------------------------------------------------------------ |
| [Tip Calculator](./Tip%20Calculator)                 | ✅ Complete    | HTML, CSS, JavaScript   | Interactive tip calculator with bill splitting functionality |
| [To-Do List with CRUD](./To-Do%20List%20with%20CRUD) | 🚧 In Progress | React, Node.js, MongoDB | Full-stack CRUD application for task management              |
| [Notes Keeper](./Notes%20Keeper)                     | 🚧 In Progress | MERN Stack              | Rich-text notes application with categories                  |

### 🎯 Learning Focus Areas

**Currently Learning:**

- React hooks and state management
- Express.js routing and middleware
- MongoDB database operations
- Connecting frontend and backend

**Next Learning Goals:**

- User authentication with JWT
- File uploads and image handling
- Real-time features with Socket.IO
- Deployment strategies

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/bhuvi819381/full-stack-learning.git
   cd full-stack-learning
   ```

2. **Choose a project to run**

   ```bash
   # For frontend-only projects (like Tip Calculator)
   cd "Tip Calculator"
   # Open index.html in your browser or use a live server

   # For full-stack projects (like To-Do List)
   cd "To-Do List with CRUD"
   ```

3. **Set up backend**

   ```bash
   cd backend
   npm install
   cp .env.example .env  # Configure your environment variables
   npm run dev
   ```

4. **Set up frontend** (in a new terminal)
   ```bash
   cd client
   npm install
   npm run dev
   ```

## 📂 Project Structure

```
Full Stack Learning/
├── 📁 Tip Calculator/              # Frontend-only calculator
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── 📁 To-Do List with CRUD/        # Full-stack CRUD app
│   ├── 📁 backend/                 # Express.js API
│   │   ├── 📁 models/
│   │   ├── 📁 routes/
│   │   ├── 📁 controllers/
│   │   ├── server.js
│   │   └── package.json
│   └── 📁 client/                  # React frontend
│       ├── 📁 src/
│       ├── 📁 public/
│       ├── package.json
│       └── vite.config.js
├── 📁 Notes Keeper/                # Notes application
├── Projects.yaml                   # Project roadmap
├── fullStack.yaml                  # Learning curriculum
└── README.md
```

## 🎓 My Learning Path

I'm following a structured approach to learning full-stack development:

### 📚 Phase 1: Fundamentals

**Building a strong foundation**

- ✅ JavaScript ES6+ features
- ✅ DOM manipulation and event handling
- 🚧 Basic Node.js and Express.js
- 🚧 Introduction to MongoDB

### 🔗 Phase 2: Integration

**Connecting the pieces**

- 🚧 Connecting frontend and backend
- 📋 RESTful API design
- 📋 Authentication and authorization
- 📋 State management in React

### 🚀 Phase 3: Advanced Features

**Building real-world applications**

- 📋 Real-time functionality with Socket.IO
- 📋 File uploads and media handling
- 📋 Payment integration
- 📋 Deployment and DevOps

## ⚙️ Installation & Setup

### Environment Variables

For projects requiring environment variables, create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/your-database-name
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### Common Scripts

Most projects include these npm scripts:

**Backend:**

```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests
```

**Frontend:**

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing & Feedback

Since this is my learning journey, I'd love to connect with other developers! Feel free to:

- **Share learning tips** - If you have suggestions for better learning approaches
- **Point out improvements** - Help me write better code or fix bugs
- **Recommend resources** - Share tutorials, courses, or documentation that helped you
- **Connect and learn together** - If you're also learning, let's support each other!

### How to Help

1. **Open an issue** - Share feedback or suggestions
2. **Fork and improve** - Show me better ways to implement features
3. **Share resources** - Comment with helpful learning materials
4. **Connect** - Reach out if you're on a similar learning journey!

## 📈 My Learning Progress

- ✅ **Complete**: Project finished and working
- 🚧 **In Progress**: Currently learning and building
- 📋 **Not Started**: Planned for future learning
- 🤔 **Learning**: Studying concepts before starting

### Current Status (Updated regularly)

- **Projects completed**: 1 (Tip Calculator)
- **Currently working on**: To-Do List with CRUD operations
- **Next focus**: Completing Notes Keeper and learning authentication
- **Learning pace**: Taking my time to understand each concept thoroughly

### Recent Learning Highlights

- ✅ Mastered basic JavaScript DOM manipulation
- ✅ Built responsive layouts with CSS
- 🚧 Learning React hooks and state management
- 🚧 Understanding Express.js routing and middleware
- 📋 Planning to learn MongoDB and database design

## 📚 Learning Resources

### Documentation

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

### Tutorials & Courses

- [freeCodeCamp](https://www.freecodecamp.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Let's Connect

I'm always excited to connect with fellow developers and learners!

**Bhuvnesh Upadhyay** - [bhuvi819381@gmail.com](mailto:your.email@example.com)

**Repository**: [https://github.com/bhuvi819381/Full-Stack-Learning](https://github.com/bhuvi819381/Full-Stack-Learning)

**Learning Updates**: I try to update this README regularly with my progress, so check back to see how I'm doing!

---

⭐ **If you're also learning or found this helpful, please give it a star!** ⭐

Let's learn and grow together! 🚀
