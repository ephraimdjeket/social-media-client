# Noroff Workflow Course Assignment

This project is part of the Noroff Workflow Course assignment, where the objectives were to:
- Configure the project with ESLint, Prettier, and commit hooks.
- Set up the project for Jest and Cypress testing frameworks.
- Create tests to cover the required test cases.

[![Automated E2E Testing](https://github.com/ephraimdjeket/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/ephraimdjeket/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/ephraimdjeket/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ephraimdjeket/social-media-client/actions/workflows/unit-test.yml)

## Installation

**Clone the Repository:**
If you haven't already cloned the repository, you can do so with:

```
git clone https://github.com/ephraimdjeket/social-media-client.git
cd social-media-client
```
To install dependencies.
``` 
npm install
```
To compile SCSS files into CSS.
``` 
npm run build
```
To start watching SCSS files for changes and run a live server.
``` 
npm run start
```

## For unit testing
To run unit tests.
``` 
npm run test-unit
``` 

## For E2E testing
To open the Cypress GUI.
``` 
npm run test e2e
```
To run Cypress in the CLI.
``` 
npm run test-e2e-cli
```
