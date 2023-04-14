"use strict";

const { Before, After } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const browser = "chrome";

// FUNCTIONS

const createSession = function () {
  let driver = new Builder()
    .forBrowser(browser)
    .setChromeOptions(new chrome.Options().addArguments("--start-maximized"))
    .build();
  return driver;
};

const createHeadlessSession = function () {
  let driver = new Builder()
    .forBrowser(browser)
    .setChromeOptions(new chrome.Options().headless().addArguments("--start-maximized"))
    .build();
  return driver;
};

// BEFORE HOOKS - EXECUTED FROM TOP TO BOTTOM

Before(
  { name: "Start session", tags: "not @headless" },
  function (scenario, callback) {
    const world = this;
    world.driver = createSession();
    callback();
  }
);

Before(
  { name: "Headless session", tags: "@headless" },
  function (scenario, callback) {
    const world = this;
    world.driver = createHeadlessSession();
    callback();
  }
);

// AFTER HOOKS - EXECUTED FROM BOTTOM TO TOP

After({ name: "End session" }, function () {
  return this.driver.quit();
});
