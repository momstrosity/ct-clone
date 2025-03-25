# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to provide an interactive learning platform that facilitates lesson management, homework tracking, and community-driven educational resources. The application aims to create an engaging and collaborative learning environment with robust user interaction features.

### Key Features
- 🔐 Multi-Strategy Authentication
  - Local account registration
  - GitHub OAuth integration
  - Google OAuth integration
- 📚 Dynamic Lesson Management System
  - Create, track, and progress through lessons
  - Lesson completion tracking
- 📝 Comprehensive Homework Tracking
  - Homework creation and monitoring
  - Progress tracking for individual homework items
- 🌐 Community Resources
  - Access to community projects
  - Downloadable resources
  - FAQ and support sections
- 📱 Fully Responsive Design
- 🧪 Comprehensive Testing
  - End-to-end testing with Cypress
  - Unit testing with Jest

## 🏗️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JavaScript, images)
    - `css/`: Stylesheets
    - `js/`: Client-side scripts
    - `img/`: Image resources
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Request handling logic
  - `middleware/`: Custom Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Application routing
  - `views/`: Pug template files

- `cypress/`: End-to-end testing configurations and specs
  - `e2e/`: Test specification files
  - `fixtures/`: Test data
  - `support/`: Custom commands and test helpers

- `data/`: Static JSON data files for lessons and homework

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
- **Frontend**: 
  - Pug Templates
  - Tailwind CSS
- **Database**: 
  - MongoDB
  - Mongoose ODM
- **Authentication**: 
  - Passport.js
  - OAuth (GitHub, Google)
  - Local strategy
- **Testing**: 
  - Cypress (E2E)
  - Jest (Unit testing)
- **Deployment**: 
  - Fly.io configuration
  - Cloud-ready architecture

### Architecture
- **Design Pattern**: Model-View-Controller (MVC)
- **Authentication**: 
  - Multi-strategy OAuth
  - Session-based authentication
- **State Management**: 
  - Express-session
  - MongoDB session store
- **Responsive Frontend**: 
  - Mobile-first design
  - Tailwind CSS for rapid styling

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (v16+)
- MongoDB (v4.4+)
- npm (v8+)

### Local Development Setup
1. Clone the repository
   ```bash
   git clone https://github.com/your-repo/community-taught.git
   cd community-taught
   ```

2. Copy environment configuration
   ```bash
   cp .env.example .env
   ```

3. Configure environment variables in `.env`
   - `MONGODB_URI`: MongoDB connection string
   - `SESSION_SECRET`: Session encryption key
   - `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`
   - `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`

4. Install dependencies
   ```bash
   npm install
   ```

5. Start development server
   ```bash
   # Run server with hot-reload
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Testing
- Run End-to-End Tests
  ```bash
  # Run Cypress tests
  npm run e2e

  # Open Cypress interactive mode
  npm run e2e:watch
  ```

- Run Unit Tests
  ```bash
  npm test
  ```

### Production Deployment
1. Build CSS
   ```bash
   npm run css
   ```

2. Start production server
   ```bash
   npm start
   ```

## 🌈 User Flows
1. Authentication
   - Register/Login using local, GitHub, or Google accounts
   - Password reset functionality
   - Secure session management

2. Lesson Management
   - Browse available lessons
   - Track lesson progress
   - Mark lessons as complete
   - Access lesson-specific resources

3. Homework Tracking
   - View assigned homework
   - Submit and track homework progress
   - Get insights into completion status

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙌 Acknowledgments
- Passport.js for authentication
- Tailwind CSS for styling
- Cypress for testing
- MongoDB for database management