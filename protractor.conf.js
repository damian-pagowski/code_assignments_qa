exports.config = {
  framework: "jasmine2",
  baseUrl: "http://automationpractice.com",
  specs: ["./test/e2e/src/spec/app.e2e-spec.js"],  
  onPrepare: function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    browser.driver
      .manage()
      .window()
      .maximize();
      var jasmineReporters = require('jasmine-reporters');
      var junitReporter = new jasmineReporters.JUnitXmlReporter({  
        savePath: 'output/',
        consolidateAll: false
  
      });
      jasmine.getEnv().addReporter(junitReporter);
  },
  capabilities: {
    browserName: "chrome",
    directConnect: true,
    "goog:chromeOptions": {
      args: ["--headless", "--disable-gpu", "--window-size=1366,768"],
    },
  },
};
