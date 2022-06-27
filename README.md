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

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.

Since we are running on BrowserStack, we do not need any local instance of Appium installed, we just specify the latest version in our BS capabilities using the `appiumVersion` capability.

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

```
# firstam-wdio-foundation
# firstam-wdio-foundation
