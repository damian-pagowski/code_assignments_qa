# Damian Pagowski - test project

Project is built of 3 parts. Each demonstrates usage of different test type:
1. Automated UI test
2. API test


## Automated UI tests

Tests are implemented with webdriver + javascript

### Setup - Webdriver 

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries and run it:

```bash
npx webdriver-manager update
npx webdriver-manager start
```

### Running Tests


```bash
npm run test-ui
```

### Project Structure

```bash

|-- test
      |--e2e
         |-- pages (page objects)
         |-- specs (specs - test cases)
         |-- helpers (utility classes)

```

## API tests

Tests implemented using Chai, Chai-http and Jest libraries. 

### Running Tests

```bash
npm run test-api
```
