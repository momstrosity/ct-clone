# Community Taught Learning Platform

## 🌟 Project Overview

Community Taught is an innovative web application designed to provide a structured, community-driven learning experience. It offers a comprehensive platform for tracking lessons, managing homework, and supporting learners through an intuitive and feature-rich interface.

### Key Features
- User Authentication (Local, GitHub, and Google OAuth)
- Interactive Lesson Tracking
- Homework Management System
- Resource Library
- User Dashboard
- Community Projects Showcase

## 🗂️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, images)
  - `config/`: Configuration files for database, authentication
  - `controllers/`: Business logic handlers
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Express route definitions
  - `views/`: Pug template files

### Key Files
- `server.js`: Main application entry point
- `package.json`: Project configuration and dependencies
- `.env.example`: Environment variable template
- `cypress.config.js`: End-to-end testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Passport.js (Authentication)

### Frontend
- Pug (Template Engine)
- Tailwind CSS
- Vanilla JavaScript

### Testing
- Cypress (E2E Testing)
- Jest (Unit Testing)

### Authentication Providers
- Local Strategy
- GitHub OAuth
- Google OAuth

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (v18+)
- MongoDB
- npm or yarn

### Local Development
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/community-taught.git
   cd community-taught
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Fill in necessary credentials (MongoDB URI, OAuth keys)

4. Start development server
   ```bash
   # Run server with hot-reloading
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Configuration Options
- Modify `.env` for:
  - Database connection
  - OAuth client credentials
  - Session secrets
  - Email configurations

### Testing
```bash
# Run E2E tests
npm run e2e

# Watch E2E tests
npm run e2e:watch
```

## 🔐 Authentication Flows
1. Local Registration/Login
2. GitHub OAuth Login
3. Google OAuth Login
4. Password Reset Mechanism

## 📦 Deployment
- Configured for platforms like Fly.io (see `fly.toml`)
- Supports environment-specific configurations

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.