# CommunityTaught Web Application

## Project Overview

CommunityTaught is a comprehensive web application designed to support learning and collaboration in a community-driven educational environment. The project provides a robust platform for managing lessons, homework, resources, and user interactions.

### Key Features
- User Authentication (Local, Google, GitHub)
- Lesson Tracking and Progress Management
- Homework Assignment and Tracking
- Resource Sharing and Community Projects
- Responsive Design with Tailwind CSS
- Secure Session Management

## Repository Structure

### Main Directories
- `/src`: Core application source code
  - `/assets`: Static assets (CSS, JS, images)
  - `/config`: Configuration files for database, authentication
  - `/controllers`: Business logic and request handling
  - `/middleware`: Express middleware for authentication and request processing
  - `/models`: Mongoose database models
  - `/routes`: Express route definitions
  - `/views`: Pug template files
- `/cypress`: End-to-end testing configuration and specs
- `/data`: Static JSON data files
- `/src/assets`: Frontend assets (CSS, JS, images)

### Key Files
- `package.json`: Project dependencies and scripts
- `.env.example`: Environment configuration template
- `src/server.js`: Main application entry point
- `tailwind.config.cjs`: Tailwind CSS configuration
- `cypress.config.js`: Cypress testing configuration

## Technical Details

### Technologies Used
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Frontend**:
  - Pug Template Engine
  - Tailwind CSS
  - Vanilla JavaScript
- **Authentication**:
  - Passport.js
  - Local Strategy
  - Google OAuth
  - GitHub OAuth
- **Testing**:
  - Cypress (E2E Testing)
  - Jest (Unit Testing)

### Architecture
- **MVC Architecture**
  - Models: Mongoose schemas for data representation
  - Views: Pug templates for rendering
  - Controllers: Business logic and request handling
- **Microservices-inspired Modular Design**
  - Separation of concerns
  - Independently manageable components

## Setup and Deployment

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
     - Database URI
     - Authentication credentials
     - SMTP settings (optional)

4. Run Development Server
   ```bash
   # Start server with nodemon
   npm run dev

   # Compile Tailwind CSS
   npm run css
   ```

### Configuration Options
- `PORT`: Server listening port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)
- `DB_URI`: MongoDB connection string
- `GOOGLE_ID/SECRET`: Google OAuth credentials
- `GITHUB_ID/SECRET`: GitHub OAuth credentials
- `SMTP_*`: Email configuration for password reset

### Deployment
- Configured for deployment on Fly.io (see `fly.toml`)
- Environment variables should be set in deployment platform

## Testing

### End-to-End Testing
```bash
# Run Cypress tests
npm run e2e

# Open Cypress interactive mode
npm run e2e:watch
```

### Supported Browsers
- Chrome
- Firefox
- Edge

## Contributing
Please see `CONTRIBUTING.md` for guidelines on contributing to the project.

## License
MIT License - See `LICENSE` file for details.

## Contact
- Project Maintainer: Laura Abro
- GitHub: [labrocadabro](https://github.com/labrocadabro)