// FEATURE SPECIFIC TEST STEPS - '01_firstFeature'

"use strict";

const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key } = require('selenium-webdriver');

// DATA INPUT

When(/^I enter '(.*)' into the field '(.*)'/, async function (text, inputField) {
  let fieldSelector;
  switch (inputField) {
    case 'searchBar':
      fieldSelector =
        'APjFqb';
      break;
    case 'requestedWord':
      fieldSelector = 'tw-source-text-ta';
      break;
    case 'originalLanguage':
      fieldSelector = 'sl_list-search-box';
      break;
    case 'translatedLanguage':
      fieldSelector = 'sl_list-search-box';
      break;
    default:
      console.log('Statement not found.');
  }
  await this.driver.findElement(By.id(fieldSelector)).sendKeys(text);
});

When(/^In the field '(.*)' I search for '(.*)'/, async function (field, searchTerm) {
  let fieldSelector;
  switch (field) {
    case 'originalLanguage':
      fieldSelector = 'sl_list-search-box';
      break;
    case 'translatedLanguage':
      fieldSelector = 'sl_list-search-box';
      break;
    default:
      console.log('Statement not found.');
  }
  await this.driver.findElement(By.id(fieldSelector)).sendKeys(searchTerm, Key.RETURN);
});


// CLICK EVENTS

When(/^I click on the button '(.*)'/, async function (button) {
  let buttonSelector;
  switch (button) {
    case 'googleSearch':
      buttonSelector =
        '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]';
      break;
    case 'feelingLucky':
      buttonSelector =
        '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[2]';
      break;
    default:
      console.log('Statement not found.');
  }
  await this.driver.findElement(By.xpath(buttonSelector)).click();
  await this.driver.sleep(1000 * 2);
});

When(/^I click on the field '(.*)'/, async function (field) {
  let fieldSelector;
  switch (field) {
    case 'firstLanguageDropdown':
      fieldSelector = '#tw-sl';
      break;
    case 'secondLanguageDropdown':
      fieldSelector = '#tw-tl';
      break;
    default:
      console.log('Statement not found.');
  }
  await this.driver.findElement(By.css(fieldSelector)).click();
  await this.driver.sleep(1000 * 2);
});

// VISIBILITY

Then(/^I should see '(.*)' in the widget '(.*)'/, async function (text, widget) {
  let widgetSelector;
  switch (widget) {
    case 'requestBox':
      widgetSelector = 'tw-source';
      break;
    case 'translationBox':
      widgetSelector = 'tw-target';
      break;
    default:
      console.log('Statement not found.');
  }

  assertTrue(
    await this.driver
      .findElement(By.id(widgetSelector))
      .getText()
      .contains(text)
  );
});
