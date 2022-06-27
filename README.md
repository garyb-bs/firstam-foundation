<div>
<a href="url"><img src="https://www.logolynx.com/images/logolynx/27/2747a30cc3e84b077d9ffebb1bee917c.jpeg" align="left" height="400" width="400" ></a>
<a href="url"><img src="https://www.logolynx.com/images/logolynx/e1/e1bacee48a3099b236e2996a6567a07b.jpeg" align="right" height="400" width="400" ></a>
</div>
<div>
# First AM Insurance Mobile Foundation Project

**NOTE:** This project is built using Webdriver V7 where the tests are written with `async`/`await` and TypeScript.

This project can run:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps

## Based on

This boilerplate is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Open a terminal
1. Copy the following command into the terminal `git clone https://github.com/garyb-bs/firstam-wdio-foundation.git` (you must have [Git](https://git-scm.com/downloads) installed)
1. Move into the directory that you just cloned by typing `cd firstam-foundation`
1. When inside this directory, copy the following command and run it: `npm install`
1. Once all the dependencies are installed, you will be able to run the tests by using the following commands: `npm run android` or `npm run ios`


## Configuration files

This foundation project uses a specific config for iOS and Android, see [configs](./config).

Since we are running on BrowserStack, we do not need any local instance of Appium installed, we just specify the latest version in our BS capabilities using the `appiumVersion` capability.

## Page Objects

This project utilises the Page Object Model to reduce the amount of duplicated code across the project. See this link for documentation on the Page Object Model in WebDriverIO.

Basically if we are performing the same action more than once, it is best practice to turn that logic into a page object. So in the case of this project, things like [Login](./tests/pageobjects/Login.ts), [Search For Address](./tests/pageobjects/Search.ts), [Notifications testing](./tests/pageobjects/Notifications.ts), [Order Details](./tests/pageobjects/Orders.ts); will all be happening more than once so have been turned into Page Objects.

Each page object class file has a number of methods to perform the logic as well as "get" methods that will return the selector for that property. For example "getSearchSelector" will return the selector value for a Search bar that we can then enter text into.

## Specs

The specs (or test) files are where the logical flow of the tests will be stored. At the moment, they are separated into 2 buckets for [Android](./tests/specs/android) and [iOS](./tests/specs/ios). This is because in some cases, the selectors can be different between App versions. If the App was designed with a uniform design and the selectors are not different then we can streamline the code even more by just having one set of test files and running those on both sets of devices.

The spec files will import the Page Objects that are needed for that specific test. For example, if our spec file is testing the Order Details, then we will need to import the [Orders](./tests/pageobjects/Orders.ts) object.

## Locator strategy for native apps

The locator strategy for this project is to use `accessibilityID`'s, see also the
[WebdriverIO docs](https://webdriver.io/docs/selectors#accessibility-id) or this newsletter on
[AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used, and for example only XPATH is available, then the following setup could be used to make cross-platform
selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

## Native App Tests

All tests can be executed on the devices as configured in the capabilities laid out in the relevant iOS and Android config files . Please check the below tests on what they do or on how to run them separately.

```sh
# For Android local execution
npm run android

# For iOS local execution
npm run ios
```

### BrowserStack

This project is setup for testing your app with BrowserStack.

Make sure you install the latest version of the `@wdio/browserstack-service` with

```shell
npm install --save-dev @wdio/browserstack-service
```

## Parallel Testing

This project is set up to run the tests in parallel on multiple devices. So if you kick off 5 files, and your configuration contains 5 devices, then 25 tests will be kicked off in total. We define the devices in our capabilities in [Android Config](./config/wdio.browserstack.android.conf) and [iOS Config](./config/wdio.browserstack.ios.conf) for the different devices. 

Here is an example of the Android device capabilities configured in the Android config.

```js
  capabilities: [{
    "appium:deviceName": 'Samsung Galaxy S22 Ultra',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S22',
    "appium:os_version": "12.0"
  }, {
    "appium:deviceName": 'Samsung Galaxy S10',
    "appium:os_version": "9.0"
  }, {
    "appium:deviceName": 'Huawei P30',
    "appium:os_version": "9.0"
  }, {
    "appium:os_version" : "10.0",
    "appium:device" : "Samsung Galaxy Note 20",
  }],
  ```
  
 And here is the iOS capabilities:
 
 ```js
 capabilities: [{
    device: 'iPhone XS',
    os_version: "15"
  }, {
    device: 'iPhone 13 Pro Max',
    os_version: "15"
  }, {
    device: 'iPhone 11',
    os_version: "13"
  }],
  ```
  
These devices are just random selections. We recommend looking at your App Dynamics data and seeing what the breakdown is for your app and configuring the capabilities based on the highest usage by your user base.

## Notes

Any questions, please reach out to me at any time

</div>
