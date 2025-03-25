# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to support learning and collaboration for a community-driven educational platform. It provides an interactive environment for users to track lessons, manage homework, and engage with educational resources.

### Key Features
- User Authentication (Local, Google, and GitHub)
- Lesson Tracking and Progress Management
- Homework Assignment and Tracking
- Community Resources and Downloads
- Responsive Design with Tailwind CSS
- Secure Session Management

## 🗂️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, images)
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Request handling logic
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Application route definitions
  - `views/`: Pug template files
- `cypress/`: End-to-end testing configuration
- `data/`: JSON data files for lessons and homework
- `src/config/`: Authentication and database configurations

### Key Files
- `server.js`: Main application entry point
- `package.json`: Project dependencies and scripts
- `.env.example`: Environment configuration template
- `tailwind.config.cjs`: Tailwind CSS configuration
- `cypress.config.js`: Cypress testing configuration

## 🔧 Technical Details

### Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Frontend**: Pug templating, Tailwind CSS
- **Authentication**: Passport.js (Local, Google, GitHub)
- **Testing**: Cypress (E2E), Jest
- **Deployment**: Fly.io (based on `fly.toml`)

### Architecture
- **MVC (Model-View-Controller)** design pattern
- **RESTful API** design
- **OAuth 2.0** for third-party authentication
- **Server-side rendering** with Pug templates

## 🚀 Setup and Deployment

### Prerequisites
- Node.js (18.x recommended)
- MongoDB
- Git

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
   - Fill in required configuration:
     - `PORT`
     - `DB_URI`
     - Authentication credentials
     - SMTP settings (optional)

4. Run the application
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

### Environment Configuration
See `.env.example` for detailed configuration options:
- Database connection
- Authentication providers
- SMTP settings
- Session management

## 🧪 Testing

### End-to-End Testing
- Powered by Cypress
- Run tests with:
  ```bash
  npm run e2e           # Run in Chrome
  npm run e2e:watch     # Interactive mode
  ```

### Available Test Suites
- Authentication
- Basic page rendering
- Homework tracking
- Lesson management

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📜 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙌 Acknowledgments
- Community contributors
- Open-source libraries and tools used