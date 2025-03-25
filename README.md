# Community Taught Web Application

## 📘 Project Overview

Community Taught is a full-featured web application designed as an MVC (Model-View-Controller) boilerplate for Node.js and MongoDB projects. It provides a robust framework with integrated authentication, lesson tracking, and homework management.

### 🌟 Key Features
- User Authentication (Local, Google, GitHub)
- Lesson Progression Tracking
- Homework Management
- Resource and Community Project Showcase
- Responsive Design with Tailwind CSS
- E2E Testing with Cypress

## 🗂️ Repository Structure

### Main Directories
- `/src`: Core application source code
  - `/assets`: Static assets (CSS, JS, images)
  - `/config`: Configuration files for database, authentication
  - `/controllers`: Business logic and request handling
  - `/middleware`: Express middleware
  - `/models`: Mongoose data models
  - `/routes`: Application route definitions
  - `/views`: Pug template files

### Key Files
- `src/server.js`: Main application entry point
- `package.json`: Project configuration and dependencies
- `.env.example`: Environment configuration template
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🔧 Technical Details

### Technologies
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - Passport.js (Authentication)
- **Frontend**:
  - Pug Templates
  - Tailwind CSS
- **Testing**: 
  - Cypress (E2E)
  - Jest (Unit Testing)

### Architecture
- **Model-View-Controller (MVC)** design pattern
- **Authentication Strategies**:
  - Local Authentication
  - OAuth (Google, GitHub)
- **Database**: MongoDB with Mongoose ORM
- **Session Management**: Express Session
- **Frontend Rendering**: Server-side with Pug templates

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

3. Configure Environment
   - Copy `.env.example` to `.env`
   - Fill in required configuration:
     - `PORT`: Application port
     - `DB_URI`: MongoDB connection string
     - `SECRET`: Session secret
     - OAuth credentials (optional)

4. Run Development Server
   ```bash
   # Start server with hot-reload
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Configuration Options
Refer to `.env.example` for comprehensive configuration:
- Database Connection
- Authentication Providers
- SMTP Email Settings
- Environment-specific variables

### Testing
```bash
# Run E2E tests
npm run e2e

# Watch E2E tests
npm run e2e:watch
```

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 👥 Author
Laura Abro

## 🔗 Links
- [GitHub Repository](https://github.com/labrocadabro/node-mongo-boilerplate)
- [Issue Tracker](https://github.com/labrocadabro/node-mongo-boilerplate/issues)