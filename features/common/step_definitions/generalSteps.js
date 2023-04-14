// GENERAL TEST STEPS - NO CUSTOMIZATION REQUIRED

"use strict";

// VARIABLE DECLARATIONS

const { Given, When, Then } = require("@cucumber/cucumber");
const { By, Key } = require("selenium-webdriver");

// BROWSING

Given(/^I visit the url '(.*)'/, async function (url) {
  await this.driver.get(url);
});

// PAUSING

When(/^I wait for '(.*)' seconds/, async function (amount) {
  await this.driver.sleep(1000 * amount);
});

// CLICK EVENTS

When(/^I click on the page/, async function () {
  await this.driver.findElement(By.xpath("/html/body")).click();
});

When(/^I click on the option '(.*)'/, async function (text) {
  await this.driver
    .findElement(By.xpath(`//*[contains(text(),"${text}")]`))
    .click();
  await this.driver.sleep(1000 * 2);
});

// VISIBILITY

Then(/^The page should contain '(.*)'/, async function (text) {
  await this.driver.findElement(By.xpath(`//*[contains(text(),"${text}")]`));
});
