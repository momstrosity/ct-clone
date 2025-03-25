# Community Taught Web Application

## 📝 Project Overview

Community Taught is a comprehensive web application designed to support learning and community engagement through an interactive educational platform. The application provides a robust MVC (Model-View-Controller) boilerplate for Node.js and MongoDB projects, featuring authentication, lesson tracking, homework management, and resource sharing.

### 🌟 Key Features
- User Authentication (Local, GitHub, and Google OAuth)
- Lesson Progress Tracking
- Homework Management and Tracking
- Community Resources and Downloadable Materials
- Responsive Design with Tailwind CSS
- Interactive Dashboard
- Multiple Authentication Strategies

## 🗂️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, images)
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Business logic and request handling
  - `middleware/`: Custom Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Express route definitions
  - `views/`: Pug template files

### Key Files
- `src/server.js`: Main application entry point
- `package.json`: Project configuration and dependencies
- `cypress.config.js`: End-to-end testing configuration
- `.env.example`: Environment variable template
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🔧 Technical Details

### Technologies Used
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Frontend**:
  - Pug (Template Engine)
  - Tailwind CSS
  - Vanilla JavaScript
- **Authentication**:
  - Passport.js
  - OAuth (GitHub, Google)
- **Testing**:
  - Cypress (E2E Testing)
  - Jest (Unit Testing)

### Architecture
- **MVC Pattern**
  - Models: Define data schemas and interactions
  - Views: Pug templates for rendering
  - Controllers: Handle request processing
- **Middleware-based Authentication**
- **Modular Route Handling**

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   - Add MongoDB connection string
   - Configure OAuth credentials
   - Set session secrets

### Running the Application
- Development Mode
  ```bash
  npm run dev
  ```
- Production Start
  ```bash
  npm start
  ```

### Environment Configuration
- `NODE_ENV`: Application environment
- `MONGODB_URI`: MongoDB connection string
- `SESSION_SECRET`: Session encryption key
- OAuth Client IDs and Secrets for GitHub/Google

## 🧪 Testing
- Run E2E Tests
  ```bash
  npm run e2e
  ```
- Watch E2E Tests
  ```bash
  npm run e2e:watch
  ```

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙌 Acknowledgments
- Community Taught Team
- Open Source Contributors

## 📞 Support
For issues or questions, please [open an issue](https://github.com/labrocadabro/node-mongo-boilerplate/issues) on GitHub.