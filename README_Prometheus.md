# CommunityTaught: An Educational Platform Boilerplate for Node.js and MongoDB

## Project Overview

The codebase is an educational platform named 'CommunityTaught' designed to facilitate learning and community engagement around coding and related topics. It serves as an MVC boilerplate for Node.js and MongoDB projects, incorporating Tailwind CSS for styling and Pug for templating.

### Main Purpose and Problems Solved
- **Educational Platform**: Provides a structured environment for users to learn through lessons and homework assignments.
- **Community Engagement**: Encourages user interaction through features like community projects and resources.
- **Authentication**: Offers secure user authentication via Passport, including local, Google, and GitHub OAuth.

### Key Features and Benefits
- **User Management**: Supports user registration, login, password reset, and account management.
- **Lesson and Homework Tracking**: Allows users to track their progress on lessons and homework, enhancing the learning experience.
- **Resource Sharing**: Includes a section for sharing resources like community projects, downloads, and FAQs.
- **Responsive Design**: Utilizes Tailwind CSS for a modern, responsive user interface.
- **Extensibility**: As a boilerplate, it provides a foundation that can be extended for various educational or community-driven projects.

## Getting Started, Installation, and Setup

### Quick Start Guide
To get started with CommunityTaught, follow these steps:
1. **Clone the Repository**: Clone the repository to your local machine.
2. **Install Dependencies**: Run `npm install` or `yarn install` to install all necessary dependencies.
3. **Set Up Environment Variables**: Copy `.env.example` to `.env` and fill in the required values.
4. **Start the Application**: Use `npm run dev` or `yarn dev` to start the application in development mode.

### Installation
To install CommunityTaught, you need to have Node.js and npm or Yarn installed on your system. Follow these steps:

#### Dependencies
- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher (or Yarn)

#### Installation Steps
1. **Install Node.js and npm**: Download and install from the official Node.js website if not already installed.
2. **Clone the Repository**: `git clone <repository-url>`
3. **Navigate to the Project Directory**: `cd communitytaught`
4. **Install Dependencies**: `npm install` or `yarn install`

### Setup
To set up CommunityTaught for development or production, follow these steps:

#### Development Setup
1. **Environment Variables**: Create a `.env` file from `.env.example` and set the necessary environment variables.
2. **Start Development Server**: Run `npm run dev` or `yarn dev` to start the server with Nodemon for live reloading.
3. **CSS Watching**: Run `npm run css` or `yarn css` in a separate terminal to watch and compile CSS changes.

#### Production Setup
1. **Build for Production**: Run `npm run build` or `yarn build` to build the project for production (if applicable, though no specific build script is provided in the current package.json).
2. **Start Production Server**: Run `npm start` or `yarn start` to start the server in production mode.

#### Platform-Specific Instructions
- **Windows**: Ensure you have Git Bash or a similar environment to run npm scripts.
- **MacOS/Linux**: No specific instructions beyond standard Node.js and npm setup.

Note: This project uses MongoDB as the database, ensure you have MongoDB installed and running.

## Features / Capabilities

### Core Features and Components

#### User Authentication
- **Login/Register**: Users can log in or register using local credentials or through OAuth with Google and GitHub.
- **Password Management**: Users can change their passwords, reset forgotten passwords, and manage their account settings.

#### Homework Management
- **Add/Edit Homework**: Administrators can add or edit homework assignments, including due dates, descriptions, and requirements.
- **Track Homework Progress**: Users can track their progress on homework items, mark items as completed, and submit homework.
- **Import Data**: Users can import homework progress data, which can be used to update their current status.

#### Lesson Management
- **Add/Edit Lessons**: Administrators can add or edit lessons, including video details, slides, materials, and check-in information.
- **Track Lesson Progress**: Users can track their progress on lessons, mark them as watched, and check in for attendance.
- **View Lessons**: Users can view all lessons or specific lessons by permalink, with navigation to next and previous lessons.

#### Resources
- **Resource Pages**: Users can access various resource pages, including community projects, downloads, FAQ, and more.

#### Additional Features
- **Session Management**: Utilizes MongoDB for session storage to maintain user sessions.
- **Error Handling**: Includes 404 error pages and flash messages for user feedback.
- **Static File Serving**: Serves static files from the assets directory.

### Examples and Configurations

#### Homework Configuration Example
- **File**: `src/controllers/homework.js`
- **Example**: The `addEditHomework` function allows administrators to add or edit homework with various parameters like due dates, descriptions, and required items.

```javascript
const hwData = {
	classNo: req.body.number.split(","),
	dueNo: req.body.due,
	submit: req.body.submit,
	cohort: req.body.cohort,
	note: req.body.note,
	items: items,
	extras: extras
}
await Homework.findByIdAndUpdate(req.params.id  || mongoose.Types.ObjectId(), hwData, { upsert: true});
```

#### Lesson Configuration Example
- **File**: `src/controllers/lessons.js`
- **Example**: The `addEditLesson` function enables administrators to manage lesson details, including video IDs, dates, and materials.

```javascript
const lessonData = {
	videoId: req.body.videoId,
	twitchVideo: !!req.body.twitch ? true : false,
	title: req.body.videoTitle,
	dates: dates,
	permalink: req.body.permalink,
	thumbnail: req.body.thumbnail,
	classNo: req.body.number ? req.body.number.split(",") : [],
	slides: req.body.slides ? req.body.slides.split(",") : [],
	materials: req.body.materials,
	checkin: req.body.checkin ? req.body.checkin.split(",") : [],
	motivationLink: req.body.motivationLink,
	motivationTitle: req.body.motivationTitle,
	cohort: req.body.cohort,
	note: req.body.note,
	timestamps: timestamps,
};
const lesson = await Lesson.findByIdAndUpdate(
	req.params.id || mongoose.Types.ObjectId(),
	lessonData,
	{ upsert: true, new: true }
);
```

These examples demonstrate how the system handles core functionalities like homework and lesson management, ensuring users can interact with the platform effectively.

## Technologies Used

- **Node.js**: Used as the runtime environment for the server-side application.
- **Express.js**: Framework for building the web application.
- **MongoDB**: Database used for data storage, with Mongoose as the ODM.
- **Pug**: Templating engine for rendering views.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Passport.js**: Authentication middleware for Node.js.
- **Cypress**: End-to-end testing framework.
- **Nodemailer**: Library for sending emails.
- **Dotenv**: Manages environment variables.
- **Validator**: Library for data validation.

### Frontend Technologies
- **JavaScript**: Primary language for client-side scripting.
- **CSS**: Used for styling, with Tailwind CSS as the framework.

## Usage Examples

### Basic Navigation
To navigate through the website, use the following routes:
- **Home Page**: `/`
- **About Page**: `/about`
- **Dashboard**: `/dashboard`
- **Account**: `/account`

### User Authentication
For user authentication, you can use these endpoints:
- **Register**: `POST /register`
- **Login**: `POST /login`
- **Logout**: `GET /logout`
- **Forgot Password**: `GET /forgot`
- **Reset Password**: `GET /reset` and `POST /reset`
- **Change Password**: `POST /change-password`
- **Set Password**: `POST /set-password`
- **Change Email**: `POST /change-email`
- **Delete Account**: `DELETE /delete-account`
- **Verify Account**: `GET /verify`

### Accessing Resources
To access different resources, use:
- **Resources**: `/resources`
- **Specific Resource Page**: `/resources/:page`

These examples demonstrate how to interact with the core functionalities of the application.

## Project Structure

### Key Directories

- **cypress**: Contains end-to-end tests for the application, including authentication, basic pages, homework, lessons, mobile menu, and resources.

- **data**: Stores JSON files for homework and lessons data.

- **src**: The main source directory, containing:
  - **assets**: CSS, JavaScript, fonts, images, and other static assets.
  - **config**: Configuration files for database and authentication.
  - **controllers**: Handles logic for authentication, email, homework, lessons, and pages.
  - **middleware**: Middleware for authentication and flash messages.
  - **models**: Defines database models for various entities like Homework, Lessons, and Users.
  - **routes**: Defines routes for email, homework, lessons, main, and OAuth.
  - **server.js**: The main server file.
  - **views**: Pug templates for rendering views, including layouts, mixins, and partials.

### Key Files

- **.env.example**: Example environment configuration file.
- **.gitignore**: Specifies files to be ignored by Git.
- **CONTRIBUTING.md**: Guidelines for contributing to the project.
- **LICENSE**: The license file for the project.
- **README.md**: The main README file for the project.
- **package.json**: Manages dependencies and scripts for the project.
- **tailwind.config.cjs**: Configuration for Tailwind CSS.
- **yarn.lock**: Lock file for Yarn package manager.

## Contributing

### How to Contribute

To contribute to this project, follow these steps:

1. **Find an Issue**: Look through the [issues tab](https://github.com/labrocadabro/communitytaught/issues) and find one that interests you. If you want to propose a new change, [create an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) explaining your proposed change.

2. **Wait to be Assigned**: Once you've found an issue, wait for it to be assigned to you to avoid duplication of effort.

3. **Fork the Repository**: [Fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) to start working on your contribution.

4. **Create a Branch**: Create a new branch named with the issue number and a brief description, e.g., `issue-1-lesson-card-styling`. Ensure each branch is created from the main branch.

5. **Make Changes**: Implement the necessary changes on your branch. If you encounter unrelated issues, create a new issue for those changes.

6. **Create a Pull Request**: [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with a detailed explanation of your changes and any deviations from the original issue. [Link the pull request to its issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

7. **Make Requested Changes**: Reviewers may request changes. Make these changes and resubmit your pull request.

8. **Celebrate**: Once your pull request is accepted, celebrate your contribution to Community Taught!

### Contribution Guidelines

- **Code Style**: Follow the existing code style in the repository.
- **Testing**: Ensure your changes pass all existing tests and add new tests if necessary.
- **Documentation**: Update relevant documentation to reflect your changes.

## License

The project is licensed under the [MIT License](LICENSE).