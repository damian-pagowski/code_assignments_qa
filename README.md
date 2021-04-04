# QA assignment - Damian Pagowski


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

Test spec location
```bash
cypress/integration/online-shop.spec.js
```
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

Test spec location
```bash
test/api/api.spec.js
```
Usage:

```bash
npx run test-api
```

## Assignment 3 - SQL

Created test databases and with 2 tables: EmployeeDetails, EmployeeSalary

- test database exported to SQL file: test.sql
- queries in file: queries.txt

## Assignment 4 - Sample Test Cases

List of sampel test cases can be found in this location

```bash
docs/sample_test_cases.pdf
```


## Assignment 5 - Sample Bug Report

Example Bug report Could be found on my github:

```bash
https://github.com/damian-pagowski/online-store-client-web/issues/2#issue-580038526
```

 