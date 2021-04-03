# QA assignment - Damian Pagowski

Foobar is a Python library for dealing with word pluralization.

## Installation

Use npm to install project dependencies:
```bash
npm i
```

## Assignment 1 - UI automation

Test implemented with [Cypress](https://www.cypress.io)
Reason for choosing Cypress:
- it can be easily installed with npm and does not require additional configuration
- supports ES6 out of box
- application under test doesn't use features not supported or problematic to implement with  Cypress (works in same tab, does not use file upload etc.)


Running tests in console (headless browser):

```bash
npx run test-ui
```
To open cypress test runner:
```bash
npx run test-ui-runner
```


## Assignment 2 - API tests

stack: 
- Jest
- Chai
Chai-http

Usage:

```bash
npx run test-api
``