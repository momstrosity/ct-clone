# Community Taught Web Application

## 🌟 Project Overview

Community Taught is an innovative web application designed to revolutionize coding education through an interactive, community-driven platform. Our mission is to provide a comprehensive learning environment that tracks progress, offers resources, and fosters collaborative learning.

### 🎯 Core Objectives
- Simplify learning path tracking
- Provide interactive educational resources
- Create a supportive community learning ecosystem

## 🚀 Key Features

### 1. Authentication & User Management
- Multi-provider authentication (Local, GitHub, Google)
- Secure user registration and profile management
- Password reset functionality

### 2. Learning Ecosystem
- Interactive lesson tracking
- Comprehensive homework assignment system
- Progress visualization and analytics
- Resource library with community projects

## 🛠 Technology Stack

### Backend
- **Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Authentication**: Passport.js (Local, OAuth)

### Frontend
- **Templating**: Pug
- **Styling**: Tailwind CSS
- **Scripting**: Vanilla JavaScript

### Testing
- **E2E Testing**: Cypress
- **Unit Testing**: Jest

## 🏗 Architecture

### Design Principles
- Model-View-Controller (MVC) Architecture
- Modular and Scalable Design
- RESTful API Implementation
- Session-based Authentication

## 📦 Repository Structure

```
community-taught/
│
├── src/
│   ├── assets/       # Static resources
│   ├── config/       # Configuration files
│   ├── controllers/  # Request handling logic
│   ├── middleware/   # Express middleware
│   ├── models/       # Data models
│   ├── routes/       # Application routes
│   └── views/        # Pug templates
│
├── cypress/          # End-to-end testing
├── data/             # Static data files
└── README.md         # Project documentation
```

## 🔧 Development Setup

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/community-taught.git
   cd community-taught
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment
   - Copy `.env.example` to `.env`
   - Fill in MongoDB and OAuth credentials

4. Run development server
   ```bash
   # Start server with hot-reload
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

## 🧪 Testing

### Running Tests
```bash
# End-to-end tests
npm run e2e

# Interactive Cypress mode
npm run e2e:watch
```

## 🤝 Contributing

We welcome contributions! Please read our `CONTRIBUTING.md` for guidelines on submitting pull requests and our code of conduct.

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

## 🙌 Acknowledgments
- Open-source community
- All amazing contributors

---

**Happy Coding!** 🚀👩‍💻👨‍💻