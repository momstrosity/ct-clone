# CommunityTaught: An MVC Educational Management Platform

## Project Overview

The **CommunityTaught** project is an MVC application designed for managing educational content, specifically tailored for lessons and homework assignments. It serves as a platform where users can add, track, and complete lessons and homework, enhancing educational management and tracking.

### Main Purpose and Problems Solved
- **Educational Management**: Provides a structured way to manage lessons and homework, allowing users to add new content, track progress, and mark completion.
- **User Authentication**: Implements robust user authentication using Passport, supporting local, GitHub, and Google OAuth, ensuring secure access to personal educational data.

### Key Features and Benefits
- **Lesson and Homework Management**: Users can add lessons and homework, with detailed tracking of progress and completion.
- **User Interface**: Utilizes Tailwind CSS for responsive design and Pug for templating, ensuring a user-friendly interface.
- **Database Integration**: Uses MongoDB for data persistence, allowing for scalable storage of educational data.
- **Email Notifications**: Includes functionality for sending emails, useful for reminders or notifications about educational tasks.
- **Testing and Development**: Supports end-to-end testing with Cypress, facilitating robust development and maintenance of the application.

## Getting Started, Installation, and Setup

### Quick Start Guide

To quickly get started with CommunityTaught, follow these steps:

1. **Clone the Repository**: If you haven't already, clone the repository to your local machine.
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.
   ```bash
   cd node-mongo-boilerplate
   npm install
   ```

3. **Set Up Environment Variables**: Copy the `.env.example` file to `.env` and fill in the required values.
   ```bash
   cp .env.example .env
   ```

4. **Run the Application**: Start the application in development mode.
   ```bash
   npm run dev
   ```

5. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to use the application.

### Installation

To install CommunityTaught, ensure you have Node.js and npm installed on your system. Then follow these steps:

1. **Install Node.js and npm**: If not already installed, download and install Node.js from the official website. npm comes bundled with Node.js.

2. **Install Project Dependencies**: From the project root directory, run:
   ```bash
   npm install
   ```
   This command will install all dependencies listed in `package.json`, including:
   - Express for the web framework
   - Mongoose for MongoDB interactions
   - Pug for templating
   - Tailwind CSS for styling
   - Passport for authentication

3. **Set Up MongoDB**: Ensure you have MongoDB installed and running. Update the MongoDB connection string in your `.env` file.

4. **Configure Authentication**: Set up OAuth credentials for GitHub and Google in your `.env` file if you want to use these authentication methods.

### Setup

To set up the project for development or production:

#### Development Setup

- **Start Development Server**: Use the following command to start the server with live reload:
  ```bash
  npm run dev
  ```
  This uses `nodemon` to watch for changes in the server files, excluding JavaScript files in `src/assets/js` and `cypress` directories.

- **Compile CSS**: Run Tailwind CSS in watch mode to automatically compile CSS changes:
  ```bash
  npm run css
  ```

#### Production Setup

- **Build for Production**: Although not explicitly defined in the scripts, you can prepare for production by ensuring all dependencies are installed and environment variables are set correctly. Then, start the server with:
  ```bash
  npm start
  ```

- **Deployment**: The project includes a `fly.toml` file, suggesting it can be deployed on Fly.io. Follow Fly.io's documentation for deploying Node.js applications.

Remember, for detailed usage instructions, refer to the Usage Examples section of this README.

## Features / Capabilities

### Core Features

- **User Authentication**: The project supports user authentication through local login, Google, and GitHub OAuth, managed via Passport.js. Users can register, log in, reset passwords, and manage their account settings.

- **Lesson Management**: Administrators can add, edit, or delete lessons. Each lesson can be associated with specific class numbers, due dates, and includes features like video integration, slides, and timestamps. Users can track their progress on lessons, marking them as watched or checked in.

- **Homework Management**: The system allows for the creation, editing, and deletion of homework assignments. Homework can be assigned to specific classes, with due dates and submission status tracking. Users can mark homework items and extras as completed.

- **Progress Tracking**: Users can track their progress on both lessons and homework. This includes marking lessons as watched or checked in, and toggling the status of homework items, extras, and submissions.

- **Data Import**: Administrators can import data to update user progress on lessons and homework, which can be useful for migrating data or setting up initial states.

- **Resource Access**: Users have access to various resources, including community projects, downloads, FAQs, and other educational materials.

### Examples and Configurations

- **Lesson Example**: A lesson might include a video ID, a title, associated class numbers, and due dates. Users can view lessons, see related homework, and track their progress.

- **Homework Example**: Homework assignments can be configured with descriptions, due dates, and whether they are required or optional. Users can mark items as done and submit their work.

- **Authentication Configuration**: The project uses environment variables for sensitive information like session secrets and database URIs, ensuring secure configuration management.

## Technologies Used

### Languages
- JavaScript

### Frameworks and Libraries
- **Node.js**: Used as the runtime environment for the server-side JavaScript.
- **Express.js**: A fast and minimalist web framework for Node.js, used for building the web application.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used for database interactions.
- **Pug**: A templating engine for generating HTML markup, used for rendering views.
- **Tailwind CSS**: A utility-first CSS framework, used for styling the application.
- **Passport.js**: An authentication middleware for Node.js, used for handling user authentication.
- **Cypress**: A JavaScript end-to-end testing framework, used for testing the application.

### Database
- **MongoDB**: A NoSQL database used for storing application data.

### Authentication
- **GitHub OAuth**: Used for user authentication via GitHub.
- **Google OAuth**: Used for user authentication via Google.

### Other Tools
- **Nodemon**: A utility that monitors for any changes in the source code and automatically restarts the server.
- **Morgan**: An HTTP request logger middleware for Node.js.
- **Nodemailer**: A module for sending emails from Node.js.
- **Validator**: A library for string validation and sanitization.

## Usage Examples

### Running the Application

To start the application in production mode, use the following command:

```bash
npm start
```

For development, you can run the application with live reloading using:

```bash
npm run dev
```

### Building CSS

To build and watch for changes in CSS, use:

```bash
npm run css
```

### Running End-to-End Tests

To run end-to-end tests, you can use:

```bash
npm run e2e
```

For interactive testing, use:

```bash
npm run e2e:watch
```

To record test results, you can run:

```bash
npm run e2e:record
```

### Cypress Commands

Cypress provides additional commands for managing its environment:

- Verify Cypress installation:
  ```bash
  npm run cy:verify
  ```

- Get Cypress information:
  ```bash
  npm run cy:info
  ```

- Check Cypress version:
  ```bash
  npm run cy:version
  ```

- List Cypress cache:
  ```bash
  npm run cy:cache:list
  ```

## Project Structure

### Key Directories

- **cypress**: Contains end-to-end tests for the application, including authentication, basic pages, homework, lessons, and mobile menu functionality.
- **data**: Stores JSON files for homework and lessons data.
- **src**: The main source directory, containing:
  - **assets**: CSS, fonts, images, and JavaScript files for the frontend.
  - **config**: Configuration files for database and authentication.
  - **controllers**: Server-side logic for handling requests related to authentication, email, homework, lessons, and pages.
  - **middleware**: Middleware for authentication and flash messages.
  - **models**: Database models for various entities like Homework, Lessons, and User.
  - **routes**: Defines routes for different functionalities like email, homework, lessons, and main routes.
  - **server.js**: The main server file.
  - **views**: Pug templates for rendering different pages of the application.

### Key Files

- **.env.example**: Example environment variables file.
- **.gitignore**: Specifies intentionally untracked files to ignore.
- **CONTRIBUTING.md**: Guidelines for contributing to the project.
- **LICENSE**: The license under which the project is released.
- **README.md**: The main README file for the project.
- **package.json**: Lists the project's dependencies and scripts.
- **yarn.lock**: Lock file for Yarn package manager.
- **fly.toml**: Configuration file for deploying the application on Fly.io.

## Additional Notes

### Additional Notes

#### Project Architecture
The project follows an MVC (Model-View-Controller) architecture, utilizing Node.js with Express as the server framework, MongoDB for database management, and Pug for templating. The application uses Passport for authentication, supporting local, Google, and GitHub OAuth strategies.

#### Development Environment
- **Node.js**: The project is built using Node.js, with the main server file located at `src/server.js`.
- **Tailwind CSS**: Used for styling, with configuration in `tailwind.config.cjs` and the CSS file at `src/tailwind.css`.
- **Pug**: Templating engine for rendering views, with views located in `src/views`.

#### Testing
The project includes end-to-end testing with Cypress, configured in `cypress.config.js`. Various scripts are available for running tests in different browsers and recording results.

#### Deployment
The project can be deployed using Fly.io, as indicated by the presence of `fly.toml`. Ensure to configure environment variables appropriately for production.

#### Security
- **Session Management**: Uses MongoDB to store sessions, enhancing security by not storing session data in memory.
- **Authentication**: Implements secure authentication methods with Passport, including session management and OAuth.

#### Data Management
- **MongoDB**: The database is managed with Mongoose, with models defined in `src/models`.
- **Data Import**: A script for importing data is available at `src/config/importData.js`.

#### Frontend
- **JavaScript**: Client-side scripts are located in `src/assets/js`, handling various functionalities like accordion, account management, and homework tracking.
- **Assets**: The project includes numerous assets like images, fonts, and CSS files, organized in `src/assets`.

#### Backend
- **Express Routes**: Routes are organized into different files under `src/routes`, handling main, email, OAuth, lesson, and homework functionalities.
- **Controllers**: Logic for handling requests is managed in `src/controllers`.

#### Middleware
- **Authentication**: Middleware for authentication is defined in `src/middleware/auth.js`.
- **Flash Messages**: Handled by `src/middleware/flash.js` for user feedback.

#### Version Control
The project uses Git for version control, with the repository hosted on GitHub.

#### License
The project is licensed under the MIT License, as specified in `LICENSE`.

#### Contact
For any issues or contributions, please refer to the `CONTRIBUTING.md` and reach out via the project's GitHub page.


## Contributing

Thank you for your interest in contributing to this project! Here's how you can contribute:

### Finding an Issue

- Look through the [issues tab](https://github.com/labrocadabro/communitytaught/issues) to find an issue you're interested in. Add a note asking to work on the issue.
- If you want to make a change not related to a current issue, [create a new issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) explaining your proposed change and its rationale.

### Getting Assigned

- Wait to be assigned to an issue to avoid duplication of effort and ensure coordination.

### Forking the Repository

- Once assigned, [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

### Creating a Branch

- Create a branch with the issue number and a short description of your work, e.g., `issue-1-lesson-card-styling`. Ensure each branch is created off the main branch, not from another issue branch.

### Making Changes

- Make the necessary changes on your new branch. If you encounter unrelated changes, create a new issue for those.

### Submitting a Pull Request

- After making changes, [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Explain your changes and any deviations from the original issue, problems encountered, or other important notes.
- [Link the pull request to its issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

### Review and Revisions

- Your pull request will be reviewed. If changes are requested, make them and resubmit your pull request.

### Celebrating Your Contribution

- Congratulations on contributing to the project!

## License

This project is licensed under the [MIT License](LICENSE).

The MIT License is a permissive free software license that allows users to freely use, modify, and distribute the software, subject to the conditions outlined in the license file.