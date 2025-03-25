# Community Taught Web Application

## 🌟 Project Overview

Community Taught is a comprehensive web application designed to facilitate learning, track progress, and provide resources for students and educators. Built as an MVC (Model-View-Controller) boilerplate, the application supports multiple authentication methods and offers a robust platform for educational management.

### 🚀 Key Features
- User Authentication (Local, Google, GitHub)
- Lesson Tracking and Progress Management
- Homework Assignment and Tracking
- Resource Library
- Community Project Showcase
- Responsive Design with Tailwind CSS

## 📂 Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, Images)
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Business logic handlers
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Express route definitions
  - `views/`: Pug template files

### Key Files
- `server.js`: Main application entry point
- `.env.example`: Environment configuration template
- `package.json`: Project dependencies and scripts
- `tailwind.config.cjs`: Tailwind CSS configuration
- `cypress.config.js`: E2E testing configuration

## 🔧 Technical Details

### Technologies
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Frontend**: Pug Templates, Tailwind CSS
- **Authentication**: Passport.js (Local, Google, GitHub)
- **Testing**: Cypress (E2E), Jest
- **Deployment**: Supports various hosting platforms

### Architecture
- **MVC Pattern**
- **Modular Design**
- **RESTful API Endpoints**
- **Session-based Authentication**

## 🛠 Setup and Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation Steps
1. Clone the repository
   ```bash
   git clone https://github.com/your-repo/community-taught.git
   cd community-taught
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure Environment
   - Copy `.env.example` to `.env`
   - Fill in required configurations:
     - Database URI
     - Authentication credentials
     - SMTP settings (optional)

4. Run Development Server
   ```bash
   npm run dev
   ```

### Configuration Options
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)
- `DB_URI`: MongoDB connection string
- Authentication providers:
  - Google OAuth
  - GitHub OAuth
  - Local authentication

## 🧪 Testing
- End-to-End Testing: `npm run e2e`
- Watch E2E Tests: `npm run e2e:watch`

## 🚢 Deployment
- Supports various platforms (Heroku, Fly.io, etc.)
- Use `npm start` for production

## 📄 License
MIT License

## 🤝 Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 🙌 Acknowledgments
- Passport.js for authentication
- Tailwind CSS for styling
- Mongoose for database management