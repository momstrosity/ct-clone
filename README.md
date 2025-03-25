# Community Taught Web Application

## 📘 Project Overview

Community Taught is a comprehensive web application designed to facilitate learning, track progress, and provide resources for a community-driven educational platform. Built with a modern, scalable architecture, the application offers features for lesson tracking, homework management, and user authentication.

### 🌟 Key Features
- User authentication (Local, Google, and GitHub)
- Lesson progression tracking
- Homework management and tracking
- Resource sharing and community projects
- Responsive design with Tailwind CSS
- Secure session management

## 🗂️ Repository Structure

### Main Directories
- `/src`: Core application source code
  - `/assets`: Static assets (CSS, JS, images)
  - `/config`: Configuration files for database, authentication
  - `/controllers`: Request handling logic
  - `/middleware`: Express middleware
  - `/models`: Mongoose data models
  - `/routes`: Application route definitions
  - `/views`: Pug template files
- `/cypress`: End-to-end testing files
- `/data`: JSON data files for lessons and homework
- `/src/config`: Authentication and database configurations

### Key Files
- `server.js`: Main application entry point
- `package.json`: Project dependencies and scripts
- `.env.example`: Environment configuration template
- `tailwind.config.cjs`: Tailwind CSS configuration
- `fly.toml`: Deployment configuration for Fly.io

## 🔧 Technical Details

### Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: Pug templating, Tailwind CSS
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: Passport.js (Local, Google, GitHub strategies)
- **Testing**: Cypress (E2E), Jest
- **Deployment**: Fly.io compatible

### Architecture Overview
- **MVC Architecture**
  - Models: Mongoose schemas for data
  - Views: Pug templates
  - Controllers: Business logic and request handling
- **Authentication Middleware**
- **Session Management**
- **OAuth Integration**

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Local Development Setup
1. Clone the repository
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   - Copy `.env.example` to `.env`
   - Fill in required configurations:
     - `PORT`: Development server port
     - `DB_URI`: MongoDB connection string
     - `SECRET`: Session secret
     - OAuth credentials (optional)

4. Start development server
   ```bash
   # Run server with hot-reload
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Configuration Options
- `.env` file supports various configurations:
  - Database connection
  - SMTP settings
  - OAuth provider credentials
  - Session management

### Running Tests
```bash
# Run E2E tests
npm run e2e

# Watch E2E tests
npm run e2e:watch
```

## 🔐 Authentication Flows
- Local registration/login
- Google OAuth login
- GitHub OAuth login
- Secure session management
- Password reset functionality

## 📦 Deployment
- Configured for Fly.io deployment
- Environment-aware configuration
- Production-ready setup

## 🤝 Contributing
See `CONTRIBUTING.md` for contribution guidelines.

## 📄 License
MIT License - See `LICENSE` file for details.

## 🔗 Resources
- [Project Homepage](https://github.com/labrocadabro/node-mongo-boilerplate)
- [Issue Tracker](https://github.com/labrocadabro/node-mongo-boilerplate/issues)

## 👥 Author
Laura Abro