🗳️ Voting App
Project Overview

Voting App is a full-stack web application that allows users to create polls, vote on multiple options, and view live results in real-time. The frontend is built using Angular, and the backend is powered by Spring Boot (Java) with a MySQL database.

🚀 Features

Create polls with multiple options dynamically.

View a list of all available polls.

Vote on poll options.

See updated vote counts immediately after voting.

Reset and manage poll options.

RESTful API design for clean frontend-backend interaction.

⚡ Technologies Used

Frontend: Angular, TypeScript, HTML, CSS

Backend: Spring Boot, Java, REST API

Database: MySQL

Version Control: Git, GitHub

🔧 Installation & Setup
Backend

Clone the repository:
git clone https://github.com/Steja25/Voting_App.git

Navigate to backend directory.

Configure MySQL in application.properties.

Run Spring Boot application:
mvn spring-boot:run

Frontend

Navigate to the Angular project directory (poll-app).

Install dependencies:
npm install

Run the Angular app:
ng serve

⚡ API Endpoints

POST /api/polls — Create a new poll.

GET /api/polls — Retrieve all polls.

POST /api/polls/vote — Vote for a specific poll option.

📝 Example Poll JSON
{
  "question": "What is your favourite programming language?",
  "options": [
    { "optionText": "Java", "voteCount": 0 },
    { "optionText": "Python", "voteCount": 0 },
    { "optionText": "C++", "voteCount": 0 },
    { "optionText": "JavaScript", "voteCount": 0 }
  ]
}

📂 Folder Structure
Voting_App/
├── poll-app/               # Angular frontend
├── src/main/java/...       # Spring Boot backend source code
├── pom.xml                 # Maven configuration
├── application.properties  # Backend config file
└── README.md               # Project documentation

✅ Notes

Ensure CORS is enabled on the backend for smooth frontend-backend communication.

Vote count is managed automatically by the backend.



















# PollApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
