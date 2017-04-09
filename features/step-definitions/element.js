const { defineSupportCode } = require('cucumber');
const { until } = require('selenium-webdriver');
const { shouldSeeElement } = require('./common');
// const { expect } = require('chai');


defineSupportCode((functions) => {
  const given = functions.Given;
  const when = functions.When;
  const then = functions.Then;

  when('I click {stringInDoubleQuotes} element', function _when(selector) {
    const query = { css: selector };
    const element = this.driver.findElement(query);
    return element.click();
  });

  then('I should see {stringInDoubleQuotes} element', function _then(selector) {
    const query = { css: selector };
    return shouldSeeElement(this.driver, query);
  });
});
