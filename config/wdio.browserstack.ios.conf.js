exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/utils/doSearch.ts'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    "appium:app": process.env.BROWSERSTACK_ANDROID_APP_ID || 'My_FirstAM_App',
    "platformName": "android",

    // Set your BrowserStack config and common capabilities for every test
    "bstack:options": { 
        debug: true,

        // Set other BrowserStack capabilities
        projectName: 'ubs-app-foundation-test',
        buildName: 'ubs-android-tests',
        sessionName: 'fx-app-tests-test',
        appiumVersion : "1.22.0",
        realMobile: true
    }
  },

  capabilities: [{
    device: 'Samsung Galaxy S22 Ultra',
    os_version: "12.0"
  }, {
    device: 'Samsung Galaxy S21',
    os_version: "12.0"
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
