# Community Taught Web Application

## Project Overview

Community Taught is a comprehensive web application designed to support learning and collaboration within a community-driven educational platform. The application provides features for tracking lessons, managing homework, and facilitating user interactions.

### Key Features
- User Authentication (Local, Google, GitHub)
- Lesson Tracking and Progress Monitoring
- Homework Management
- Resource Sharing
- Community Projects Dashboard
- Responsive Design with Tailwind CSS

## Repository Structure

### Main Directories
- `src/`: Core application source code
  - `assets/`: Static assets (CSS, JS, images)
  - `config/`: Configuration files for databases and authentication
  - `controllers/`: Request handling logic
  - `middleware/`: Express middleware
  - `models/`: Mongoose data models
  - `routes/`: Express route definitions
  - `views/`: Pug template files
- `cypress/`: End-to-end testing configuration
- `data/`: JSON data files for lessons and homework
- `src/config/`: Authentication and database configurations

### Key Files
- `package.json`: Project dependencies and scripts
- `src/server.js`: Main server entry point
- `.env.example`: Environment configuration template
- `fly.toml`: Deployment configuration for Fly.io

## Technical Details

### Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Frontend**: Pug templating, Tailwind CSS
- **Authentication**: Passport.js (Local, Google, GitHub strategies)
- **Testing**: Cypress (E2E), Jest
- **Deployment**: Fly.io

### Architecture
- **MVC Architecture**
  - Models: Mongoose schemas for data structure
  - Views: Pug templates for rendering
  - Controllers: Business logic and request handling
- **Authentication**
  - Multiple login strategies
  - Session-based authentication
- **Responsive Design**
  - Mobile-friendly UI using Tailwind CSS

## Setup and Deployment

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Local Development Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file based on `.env.example`
4. Configure environment variables:
   - `PORT`: Application port
   - `DB_URI`: MongoDB connection string
   - `SECRET`: Session secret
   - Authentication credentials for Google/GitHub

### Running the Application
- Development mode:
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

### Environment Configuration
- `NODE_ENV`: Set to `development` or `production`
- Configure SMTP for email functionality
- Set up OAuth credentials for Google/GitHub login

### Testing
- End-to-end testing with Cypress:
  ```bash
  npm run e2e       # Run tests
  npm run e2e:watch # Interactive test mode
  ```

## Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.