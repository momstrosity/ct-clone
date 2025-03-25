# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to facilitate learning, track progress, and provide resources for a coding education community. Built with a modern, modular architecture, the platform offers an interactive and user-friendly experience for learners.

### Key Features
- User Authentication (Local, GitHub, and Google OAuth)
- Lesson Tracking and Progress Management
- Homework Assignment and Tracking
- Resource Library
- Community Project Showcase
- Responsive Design with Tailwind CSS

## 🗂️ Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static resources (CSS, JS, images)
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Request handling logic
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Application route definitions
  - `views/`: Pug template files
- `cypress/`: End-to-end testing configurations and specs
- `data/`: Static JSON data files
- `src/assets/`: Frontend assets

### Key Files
- `src/server.js`: Express application entry point
- `package.json`: Project configuration and dependencies
- `.env.example`: Environment configuration template
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

## 🔧 Technical Details

### Technologies Used
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
- **Frontend**:
  - Pug templating engine
  - Tailwind CSS
  - Vanilla JavaScript
- **Authentication**:
  - Passport.js
  - OAuth (GitHub, Google)
- **Testing**:
  - Cypress (E2E testing)
  - Jest (Unit testing)

### Architecture Overview
- **MVC (Model-View-Controller)** architectural pattern
- RESTful API design
- Session-based authentication
- Modular and scalable code structure

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

3. Create `.env` file
   - Copy `.env.example` to `.env`
   - Fill in required environment variables
     - MongoDB connection string
     - OAuth client credentials
     - Session secrets

4. Run development server
   ```bash
   # Start server with nodemon
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Configuration Options
- Modify `src/config/` files for database and authentication settings
- Adjust Tailwind configuration in `tailwind.config.cjs`
- Customize environment variables in `.env`

### Testing
```bash
# Run E2E tests
npm run e2e

# Open Cypress interactive mode
npm run e2e:watch
```

## 🧪 User Flows

### Authentication
- Register with email or OAuth providers
- Login/Logout functionality
- Password reset
- Profile management

### Learning Management
- Browse and track lessons
- Mark lessons as complete
- Submit and track homework assignments
- View progress dashboards

### Resources
- Access community projects
- Download learning materials
- View FAQ and additional resources

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙌 Acknowledgments
- Open-source community
- Contributors and supporters

---

**Happy Coding!** 🚀👩‍💻👨‍💻