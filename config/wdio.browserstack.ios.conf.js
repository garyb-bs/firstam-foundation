exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/ios/*.ts'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    "appium:app": process.env.BROWSERSTACK_IOS_APP_ID || 'My_FirstAM_App_iOS',
    "platformName": "ios",

    // Set your BrowserStack config and common capabilities for every test
    "bstack:options": { 
        debug: true,

        // Set other BrowserStack capabilities
        projectName: 'my-firstam-app-foundation-test',
        buildName: 'my-firstam-ios-tests',
        sessionName: 'my-firstam-app-tests-test',
        appiumVersion : "1.22.0",
        realMobile: true
    }
  },

  capabilities: [{
    "appium:deviceName": 'iPhone XS',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 13 Pro Max',
    "appium:os_version": "15"
  }, {
    "appium:deviceName": 'iPhone 11',
    "appium:os_version": "13"
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
