# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to provide an interactive learning platform with robust features for managing lessons, homework, and user interactions.

### Key Features
- User Authentication (Local, GitHub, and Google OAuth)
- Lesson Management System
- Homework Tracking
- Community Resources
- Responsive Design
- End-to-End Testing

## 🏗️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, images)
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Request handling logic
  - `middleware/`: Custom Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Application routing
  - `views/`: Pug template files

- `cypress/`: End-to-end testing configurations and specs
- `data/`: Static JSON data files
- `src/assets/img/`: Image resources

### Key Files
- `src/server.js`: Main application entry point
- `package.json`: Project configuration and dependencies
- `.env.example`: Environment configuration template
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🔧 Technical Details

### Technologies
- **Backend**: Node.js, Express.js
- **Frontend**: Pug Templates, Tailwind CSS
- **Database**: MongoDB (Mongoose)
- **Authentication**: Passport.js (Local, GitHub, Google)
- **Testing**: Cypress, Jest
- **Deployment**: Supports various platforms (Fly.io configuration included)

### Architecture
- **Design Pattern**: Model-View-Controller (MVC)
- **Authentication**: Multi-strategy OAuth and local authentication
- **State Management**: Session-based with MongoDB session store

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Local Development
1. Clone the repository
2. Copy `.env.example` to `.env` and configure environment variables
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

### Environment Variables
Required configurations in `.env`:
- `MONGODB_URI`: MongoDB connection string
- `SESSION_SECRET`: Session encryption secret
- `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`: GitHub OAuth credentials
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: Google OAuth credentials

### Running Tests
- End-to-End Tests: 
  ```bash
  npm run e2e
  ```
- Watch E2E Tests: 
  ```bash
  npm run e2e:watch
  ```

## 🧪 Testing
- Cypress for End-to-End Testing
- Jest for Unit Testing
- Comprehensive test coverage for authentication, routing, and user flows

## 📦 Build and Deployment
- CSS Build: 
  ```bash
  npm run css
  ```
- Production Start: 
  ```bash
  npm start
  ```

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙌 Acknowledgments
- Passport.js for authentication
- Tailwind CSS for styling
- Cypress for testing
- MongoDB for database management