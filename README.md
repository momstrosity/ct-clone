# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to facilitate learning and community engagement through an interactive platform. Built with a modern MVC architecture, the application provides a robust environment for users to track progress, access resources, and interact with educational content.

### 🚀 Key Features
- User Authentication (GitHub and Google OAuth)
- Lesson and Homework Tracking
- Progress Monitoring
- Community Resources
- Responsive Design
- Secure Session Management

## 📂 Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static resources (CSS, JS, Images)
  - `config/`: Configuration files (Database, Auth)
  - `controllers/`: Request handling logic
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Application routing
  - `views/`: Pug template files

### Key Files
- `server.js`: Main application entry point
- `package.json`: Project dependencies and scripts
- `.env.example`: Environment configuration template
- `cypress.config.js`: End-to-end testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🔧 Technical Details

### Technologies
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: Passport.js (GitHub, Google, Local)
- **Frontend**: Pug Templates, Tailwind CSS
- **Testing**: Cypress (E2E), Jest (Unit)

### Architecture
- **Pattern**: Model-View-Controller (MVC)
- **Authentication**: OAuth 2.0 and Local Strategy
- **State Management**: Express Sessions
- **Styling**: Utility-first CSS with Tailwind

## 🛠 Setup and Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- GitHub/Google Developer Account (for OAuth)

### Installation Steps
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
   - Fill in required credentials:
     - MongoDB Connection String
     - GitHub/Google OAuth Keys
     - Session Secret

4. Start the Application
   ```bash
   # Development Mode
   npm run dev

   # Production Mode
   npm start
   ```

## 🧪 Testing

### End-to-End Testing
- Run Cypress tests:
  ```bash
  npm run e2e
  ```

### Available Test Scripts
- `npm run e2e`: Run tests in Chrome
- `npm run e2e:watch`: Interactive Cypress console
- `npm run e2e:record`: Record test run

## 🔐 Authentication Flows

### OAuth Providers
- GitHub
- Google
- Local Registration

### User Journey
1. User selects authentication method
2. Redirected to OAuth provider
3. Permissions granted
4. User profile created/authenticated
5. Redirected to dashboard

## 📚 Additional Resources
- [Contributing Guidelines](CONTRIBUTING.md)
- [License](LICENSE)

## 🤝 Contributing
Interested in contributing? Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.