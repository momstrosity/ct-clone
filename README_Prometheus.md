# CommunityTaught: An MVC Boilerplate for Node.js and MongoDB with Authentication and Tailwind CSS

## Project Overview

The **CommunityTaught** project is an MVC boilerplate designed for Node.js and MongoDB applications, utilizing Tailwind CSS for styling and Pug for templating. Its main purpose is to provide a robust starting point for developers building web applications with authentication features.

### Key Features and Benefits
- **Authentication**: Supports multiple authentication methods including local, GitHub, and Google OAuth, enhancing user management and security.
- **MVC Architecture**: Follows the Model-View-Controller pattern, promoting separation of concerns and easier maintenance.
- **Frontend**: Uses Tailwind CSS for efficient and customizable styling, and Pug for dynamic templating, which speeds up development.
- **Backend**: Built with Express.js and MongoDB, offering a scalable and flexible backend solution.
- **Testing**: Includes Cypress for end-to-end testing, ensuring application reliability and functionality.
- **Email Integration**: Features email sending capabilities for user notifications and password resets.

This boilerplate solves the problem of starting a new project from scratch by providing a pre-configured environment that developers can quickly adapt to their specific needs.

## Getting Started, Installation, and Setup

### Quick Start Guide

To quickly get started with the CommunityTaught project, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Install Dependencies**: Run `npm install` or `yarn install` to install all necessary dependencies.
3. **Set Up Environment Variables**: Copy `.env.example` to `.env` and fill in the required environment variables.
4. **Start the Application**: Use `npm run dev` to start the application in development mode.

### Installation and Setup

#### Dependencies

The project requires the following dependencies to be installed:

- Node.js (version 14 or higher)
- MongoDB

#### Installation Steps

1. **Install Node.js**: Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. **Install MongoDB**: Follow the installation instructions for MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).
3. **Install Project Dependencies**: Navigate to the project directory and run:
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

#### Setting Up Environment Variables

Create a `.env` file in the root directory by copying `.env.example` and fill in the following variables:

- `PORT`: The port number to run the server on (default is 3000).
- `NODE_ENV`: Set to `development` or `production`.
- `DOMAIN`: The domain of your application (e.g., `http://localhost:3000`).
- `SECRET`: A random string for session management.
- `DB_URI`: MongoDB connection URI.
- `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `FROM_NAME`: SMTP settings for email functionality (only needed in production).
- `GOOGLE_ID`, `GOOGLE_SECRET`: Google OAuth credentials (if using Google login).
- `GITHUB_ID`, `GITHUB_SECRET`: GitHub OAuth credentials (if using GitHub login).

#### Running the Application

- **Development Mode**: Use the following command to start the application in development mode:
  ```bash
  npm run dev
  ```

- **Production Mode**: For a production build, ensure `NODE_ENV` is set to `production` in your `.env` file, then run:
  ```bash
  npm start
  ```

#### Building for Production

To build the application for production, run:
```bash
npm run build
```
This command will compile all necessary assets and prepare the application for deployment.

#### Platform-Specific Instructions

- **Windows**: Ensure you have the necessary permissions to install and run Node.js and MongoDB. You might need to run commands with administrator privileges.
- **MacOS**: If you encounter issues with permissions, you might need to use `sudo` for installation commands.
- **Linux**: Follow standard installation procedures for Node.js and MongoDB. Ensure all dependencies are installed correctly.

## Technologies Used

### Frameworks and Libraries
- **Node.js**: The runtime environment for the server-side application.
- **Express**: Web framework for Node.js used to build the server.
- **Mongoose**: ODM (Object Document Mapper) for MongoDB in Node.js.
- **Passport**: Authentication middleware for Node.js.
- **Pug**: Templating engine used for rendering views.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom user interfaces.

### Languages
- **JavaScript**: Primary language used for both front-end and back-end development.

### Testing and Development Tools
- **Cypress**: End-to-end testing framework.
- **Nodemon**: Tool to automatically restart the node application when file changes are detected.
- **Jest**: JavaScript testing framework.
- **Vitest**: Next generation testing framework for JavaScript.

### Additional Libraries
- **Validator**: Library for data validation.
- **Dotenv**: Zero-dependency module that loads environment variables from a .env file into process.env.
- **Morgan**: HTTP request logger middleware for Node.js.
- **Nodemailer**: Module for sending emails from Node.js.
- **Connect-mongodb-session**: MongoDB session store for Express.
- **Cors**: Middleware to enable CORS (Cross-Origin Resource Sharing).
- **Express-session**: Middleware to manage session data.
- **Octokit**: Toolkit for the GitHub API.
- **Passport-local**: Local authentication strategy for Passport.
- **Passport-local-mongoose**: Plugin for Passport-local to work with Mongoose.

## Usage Examples

### Basic Usage

To use the CommunityTaught.org application, follow these steps:

1. **Start the Application**:
   ```bash
   npm start
   ```
   This command will run the application using Node.js.

2. **Development Mode**:
   For development, use:
   ```bash
   npm run dev
   ```
   This will start the application with Nodemon, allowing for automatic restarts on file changes, excluding JavaScript files in `src/assets/js`, `cypress`, and `test` directories.

3. **CSS Compilation**:
   To compile Tailwind CSS:
   ```bash
   npm run css
   ```
   This watches for changes in `src/tailwind.css` and outputs to `src/assets/css/index.css`.

4. **End-to-End Testing**:
   Run end-to-end tests with Cypress:
   ```bash
   npm run e2e
   ```
   For interactive testing, use:
   ```bash
   npm run e2e:watch
   ```

These commands provide the basic interactions needed to start, develop, and test the application.

## Additional Notes

### Future Enhancements

Based on the current state of the repository, here are some potential areas for future development:

- **Documentation Overhaul**: The existing documentation, particularly in README.md, mentions files and processes that are not fully implemented or documented in the codebase. A comprehensive update to reflect the current state and future plans would be beneficial.

- **Contribution Process**: The `CONTRIBUTING.md` file provides a detailed guide for contributors. However, implementing a more streamlined process for issue assignment and branch management could enhance collaboration.

- **Technology Stack**: The project uses Node.js, Express, MongoDB, Pug, and Tailwind CSS. Consider migrating from Pug to a more widely-used templating engine like EJS or Handlebars to facilitate contributions from a broader developer community.

- **Performance and Optimization**: Review and optimize the application's performance, especially focusing on database queries and frontend rendering to improve user experience.

- **User Interface**: Enhance the user interface, particularly the lesson card styling and homework tracking features, to make them more intuitive and user-friendly.

- **Testing**: Implement a robust testing suite, especially for the backend logic and database interactions, to ensure reliability and ease of maintenance.

These enhancements would align with the project's goals of improving functionality, user experience, and community engagement.

## Contributing

### How to Contribute

Thank you for your interest in contributing to this project! Here's how you can get started:

#### Step 1: Find an Issue

- Look through the [issues tab](https://github.com/labrocadabro/communitytaught/issues) to find an issue you're interested in.
- Add a note asking to work on the issue. If you want to make a change not related to a current issue, [create one](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue).

#### Step 2: Wait to be Assigned

- Wait for the issue to be assigned to you to prevent multiple people working on the same issue.

#### Step 3: Fork the Repository

- Once assigned, [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

#### Step 4: Create a Branch

- Create a branch with the issue number and a short description, e.g., `issue-1-lesson-card-styling`. Ensure each branch is created off `main`.

#### Step 5: Make Changes

- Make the necessary changes on your new branch. If you find additional unrelated changes, create a new issue for them.

#### Step 6: Create a Pull Request

- [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) explaining your changes and why. Link the pull request to its issue.

#### Step 7: Make Requested Changes

- After submission, your pull request will be reviewed. Make any requested changes and resubmit.

#### Step 8: Celebrate

- Congratulations on your contribution to the project!

### Contribution Guidelines

- **Code Style**: Follow the project's coding standards as found in the codebase.
- **Testing**: Ensure your changes pass all existing tests and consider adding new tests if necessary.
- **Documentation**: Update any relevant documentation to reflect your changes.

## License

This project is licensed under the [MIT License](LICENSE).

The MIT License is a permissive free software license that allows users to freely use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. It requires that the copyright notice and permission notice be included in all copies or substantial portions of the software. The software is provided 'as is', without warranty of any kind.