# CommunityTaught: A Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs students, providing an integrated platform for lesson and homework tracking.

### Core Purpose
The application serves as a centralized system for students to:
- Monitor their progress through 100Devs classes
- Track homework assignments
- Manage learning resources and milestones

### Key Features
- User authentication with multiple login methods (GitHub, Google, local)
- Lesson progress tracking
- Homework assignment management
- Resource repository
- Dashboard for personal learning journey visualization

### Technical Architecture
Built as a full-stack web application using a modern, modular architecture:
- Server-side: Node.js with Express
- Database: MongoDB
- View Engine: Pug
- Styling: Tailwind CSS
- Authentication: Passport.js with multiple strategy support

### Benefits
- Streamlines learning tracking for bootcamp participants
- Provides a centralized platform for educational resources
- Offers flexible authentication methods
- Supports individual learning progress monitoring

The project aims to enhance the learning experience by providing tools that help students stay organized, motivated, and connected throughout their coding journey.

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later recommended)
- yarn or npm
- MongoDB (local installation or cloud service like MongoDB Atlas)

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Configure environment variables:
Copy the `.env.example` file to `.env` and fill in the required configuration:
```bash
cp .env.example .env
```

Key configurations include:
- `PORT`: The port the application will run on (default: 3000)
- `DB_URI`: MongoDB connection string
- `SECRET`: Session secret (any random string)
- Authentication credentials for Google/GitHub (optional)
- SMTP settings for email functionality (optional)

### Development Setup

Run the application in development mode:
```bash
# Start the development server with hot reloading
yarn dev
# or
npm run dev

# Compile Tailwind CSS (in a separate terminal)
yarn css
# or
npm run css
```

The application will be available at `http://localhost:3000`

### Production Build

To prepare for production:
1. Set `NODE_ENV` to `production` in your `.env` file
2. Start the application:
```bash
yarn start
# or
npm start
```

### Testing

This project includes end-to-end testing with Cypress:
```bash
# Run all E2E tests
yarn e2e
# or
npm run e2e

# Open Cypress interactive test runner
yarn e2e:watch
# or
npm run e2e:watch
```

### Additional Configuration Notes

- Authentication supports local, Google, and GitHub login strategies
- Email functionality requires SMTP configuration
- Environment variables are critical for application configuration

### Common Issues and Troubleshooting

- Ensure MongoDB connection string is correct
- Check that all required environment variables are set
- Verify Node.js and npm/yarn versions
- For authentication, obtain OAuth client IDs from Google and GitHub developer consoles if using those providers

## Deployment

### Deployment Prerequisites
- Node.js (version specified in `package.json`)
- MongoDB database
- Environment variables configured

### Deployment Platforms
#### Fly.io Deployment
The project is configured for deployment on Fly.io with the following specifications:
- Internal port: 8080
- HTTPS forced by default
- Automatic HTTPS certificate management
- Supports up to 25 hard connections

#### Deployment Steps
1. Install the Fly CLI and log in:
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Log in to Fly
fly auth login
```

2. Deploy the application:
```bash
# Clone the repository
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate

# Create Fly app (if not already created)
fly launch

# Set required environment variables
fly secrets set MONGODB_URI=your_mongodb_connection_string
fly secrets set SESSION_SECRET=your_session_secret

# Deploy the application
fly deploy
```

### Local Production Deployment
1. Install dependencies:
```bash
yarn install
```

2. Build Tailwind CSS:
```bash
yarn css
```

3. Start the production server:
```bash
yarn start
```

### Deployment Considerations
- Ensure all environment variables are properly configured
- Set up MongoDB connection
- Configure authentication providers (GitHub, Google) if needed
- Verify Tailwind CSS is compiled before deployment

### Environment Configuration
Create a `.env` file with the following key variables:
- `MONGODB_URI`: MongoDB connection string
- `SESSION_SECRET`: Session encryption secret
- `GITHUB_CLIENT_ID`: GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET`: GitHub OAuth client secret
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

**Note:** Never commit sensitive credentials to version control.

## Feature Highlights

The application provides a comprehensive learning management and tracking platform with the following key features:

### Authentication and User Management
- Multi-method authentication including:
  - Email/password registration and login
  - Google OAuth integration
  - GitHub OAuth integration
- Secure password reset functionality
- Account management options:
  - Change password
  - Change email
  - Delete account
- OAuth account linking and unlinking

### Learning Tracking
#### Lessons
- View all available lessons
- Detailed lesson pages
- Track lesson progress
  - Mark lessons as watched
  - Check-in for lessons
- Add, edit, and delete lessons (likely for administrators)

#### Homework Management
- Comprehensive homework tracking system
- View all homework assignments
- Track individual homework items
- Mark homework items as complete
- Submit homework assignments
- Track additional homework extras
- Add, edit, and import homework data

### Dashboard and Resources
- Personalized user dashboard
- Extensive resources section with multiple sub-pages
- Community and learning resources
- Downloadable materials

### Additional User Experience Features
- Flash messaging for user notifications
- Mobile-responsive design
- Persistent session management
- Error handling for authentication and account management

## Configuration

The project provides flexible configuration options to customize its behavior across different environments.

### Environment Variables

Configuration is primarily managed through environment variables defined in a `.env` file. Key configuration options include:

- `PORT`: Defines the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL for the application
- `SECRET`: Session secret key for security
- `DB_URI`: MongoDB connection string

#### Authentication Configuration
- `GOOGLE_ID` and `GOOGLE_SECRET`: OAuth credentials for Google login
- `GITHUB_ID` and `GITHUB_SECRET`: OAuth credentials for GitHub login

#### Email Configuration
When `NODE_ENV` is set to `production`, configure SMTP settings:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender display name

### Development Tools Configuration

#### Tailwind CSS
Located in `tailwind.config.cjs`, custom configurations include:
- Custom screen breakpoints
- Extended font families
- Custom color palette (twilight theme)
- Custom text decoration settings
- `@tailwindcss/forms` plugin for enhanced form styling

#### Cypress Testing
Configuration in `cypress.config.js` provides:
- Base URL for end-to-end testing
- Chrome web security settings
- Video recording options

### Build and Development Scripts

Defined in `package.json`, available scripts include:
- `start`: Run production server
- `dev`: Run development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- Various Cypress-related utility commands

### Important Configuration Notes
- Always use a `.env.example` as a template
- Never commit sensitive credentials to version control
- Adjust configuration based on deployment environment

## Project Structure

The project follows a structured directory layout to organize different components and resources:

### Directory Structure
```
.
├── cypress/               # End-to-end testing configuration and specs
│   ├── e2e/               # Cypress end-to-end test files
│   ├── fixtures/          # Test data and mock resources
│   └── support/           # Custom commands and support files for testing
│
├── data/                  # Static JSON data files
│
├── src/                   # Main source code directory
│   ├── assets/            # Static assets
│   │   ├── css/           # Cascading Style Sheets
│   │   ├── fonts/         # Web fonts
│   │   ├── img/           # Image resources
│   │   └── js/            # Client-side JavaScript files
│   │
│   ├── config/            # Configuration files for database and authentication
│   │
│   ├── controllers/       # Route handlers and business logic
│   │
│   ├── middleware/        # Express middleware functions
│   │
│   ├── models/            # Database models and schemas
│   │
│   ├── routes/            # Express route definitions
│   │
│   ├── views/             # Pug template files
│   │   ├── layouts/       # Base layout templates
│   │   ├── mixins/        # Reusable Pug mixins
│   │   ├── partials/      # Partial view components
│   │   └── resources/     # View templates for specific resource pages
│   │
│   ├── server.js          # Main server entry point
│   └── tailwind.css       # Tailwind CSS configuration
│
├── .env.example           # Example environment configuration
├── .gitignore             # Git ignore rules
├── CONTRIBUTING.md        # Guidelines for contributing to the project
├── LICENSE                # Project licensing information
├── README.md              # Project documentation
├── cypress.config.js      # Cypress testing configuration
├── fly.toml               # Deployment configuration for Fly.io
├── package.json           # Project dependencies and scripts
├── tailwind.config.cjs    # Tailwind CSS configuration
└── yarn.lock              # Yarn dependency lock file
```

### Key Directories and Their Purposes

#### `cypress/`
Contains end-to-end testing resources using Cypress, including test specifications, support files, and test fixtures.

#### `data/`
Stores static JSON data files used by the application, such as homework and lesson configurations.

#### `src/assets/`
Hosts static assets including:
- CSS stylesheets
- Web fonts
- Images and thumbnails
- Client-side JavaScript files

#### `src/config/`
Manages configuration files for:
- Database connections
- GitHub and Google authentication
- Data import utilities

#### `src/controllers/`
Implements route handlers and business logic for different application features like authentication, email, homework, and lessons.

#### `src/middleware/`
Contains Express middleware functions for authentication and flash messaging.

#### `src/models/`
Defines Mongoose models representing database schemas for various entities like User, Homework, Lessons, and Progress tracking.

#### `src/routes/`
Defines Express route configurations for different parts of the application, including authentication, homework, lessons, and main routes.

#### `src/views/`
Stores Pug template files organized into:
- Layouts: Base page templates
- Mixins: Reusable template components
- Partials: Shared view components
- Resource-specific views for different pages

### Configuration and Deployment Files
- `.env.example`: Template for environment configuration
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS customization
- `package.json`: Project metadata and dependency management

## Technologies Used

### Backend
- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Template Engine**: Pug
- **Authentication**: 
  - Passport.js
  - Passport Local
  - Passport GitHub
  - Passport Google OAuth 2.0

### Database
- **Database**: MongoDB
- **ODM**: Mongoose

### Frontend
- **CSS Framework**: Tailwind CSS
- **CSS Plugins**: @tailwindcss/forms

### Authentication and Security
- **OAuth Providers**: GitHub, Google
- **Session Management**: express-session
- **Session Storage**: connect-mongodb-session

### Development Tools
- **Package Manager**: Yarn
- **Development Server**: Nodemon
- **Testing Frameworks**: 
  - Cypress (E2E Testing)
  - Jest (Unit Testing)
  - Vitest

### Deployment
- **Platform**: Fly.io
- **Build Environment**: Heroku Builder 22

### Utilities
- **Environment Variables**: dotenv
- **Validation**: validator
- **Logging**: morgan
- **Email**: Nodemailer
- **GitHub API**: @octokit/core
- **CORS**: cors

### Version Control
- **Repository**: Git

## Additional Notes

### Project Background
This project originated as a personal homework tracker for the 100Devs bootcamp, evolving from a previous homework tracking website. The application aims to provide a comprehensive tracking system for class progress and assignments.

### Architecture Considerations
- The project is built using an MVC (Model-View-Controller) architecture
- Authentication is implemented using multiple strategies (local, GitHub, and Google)
- Uses MongoDB for data persistence

### Development Insights
- The project is an ongoing learning experience, with continuous improvements
- Initial development focused on personal needs, with collaboration features being added retrospectively
- The tech stack was chosen to balance functionality and learning opportunities

### Known Limitations
- The use of Pug templating is acknowledged as potentially challenging for external contributors
- Documentation and contribution processes are still being developed
- Some areas of the codebase may require refactoring to improve maintainability

### Future Development
- Improve documentation and contribution guidelines
- Enhance collaboration-friendly features
- Potentially explore alternative templating solutions
- Continue optimizing performance and user experience

### Testing and Quality Assurance
- End-to-end testing is implemented using Cypress
- Multiple browser testing configurations are available
- Continuous improvement of test coverage is a priority

### Performance Considerations
- Uses Tailwind CSS for efficient styling
- Modular JavaScript approach with separate asset files
- Nodemon used for development to enable quick iterations

### Deployment Notes
- Configured for deployment with flexible hosting options
- Environment-specific configurations supported via `.env` file
- Supports both local and cloud MongoDB database configurations

## Contributing

We welcome contributions from the community! Here's how you can help improve the project:

### Finding an Issue

1. Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab for open tasks.
2. If you want to work on an issue, add a comment expressing your interest.
3. Wait to be assigned to prevent duplicate work.

### Contribution Process

#### Preparation
- Fork the repository
- Create a new branch for your work
  - Use the naming convention: `issue-[number]-short-description`
  - Example: `issue-42-update-lesson-card`
- Ensure you're branching off the main branch

#### Making Changes
- Make focused, specific changes related to the assigned issue
- If you discover additional improvements, create a separate issue

#### Submitting Changes
- Create a pull request (PR) with a clear description of your changes
- Link your PR to the relevant issue
- Explain any modifications or challenges you encountered

### Development Setup
- Use `yarn dev` to run the development server
- Use `yarn css` to watch Tailwind CSS changes
- Run end-to-end tests with `yarn e2e`

### Code Guidelines
- Follow existing code style and patterns
- Write clear, concise, and commented code
- Test your changes thoroughly before submitting

### Reporting Issues
- Check existing issues before creating a new one
- Provide detailed information about bugs or feature requests
- Include steps to reproduce, expected behavior, and actual results

### Code of Conduct
- Be respectful and inclusive
- Collaborate constructively
- Help maintain a positive community environment

### Getting Help
If you need assistance, don't hesitate to:
- Comment on an issue
- Ask questions in the PR review process
- Reach out to project maintainers

Thank you for contributing to Community Taught!

## License

This project is licensed under the MIT License. For the full license text, please see the [LICENSE](LICENSE) file.

#### Key License Terms
- You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software
- The only requirement is to include the original copyright notice in all copies or substantial portions of the software
- The software is provided "as is" without warranty of any kind

#### Copyright
Copyright (c) 2022 Laura Abro