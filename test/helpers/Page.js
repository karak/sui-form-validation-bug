(function () {
  "use strict";
}());

const MALE_RADIO = '.ui.radio input[type="radio"][value="M"]';
const FEMALE_RADIO = '.ui.radio input[type="radio"][value="F"]';
const RESULT_SPAN = '#result';
const NAME_INPUT = '#form input[name="name"]';

class Page {
  open() {
    browser.url('/index.html');
  }

  /** set <input name="name"> empty and then send Enter key. */
  hitEnterKeyOnNameInput() {
    // browser.keys('Enter');
    const input = browser.element(NAME_INPUT);
    setEmptyAndSendEnterKey(browser, input);
  }

  clickSubmitButton() {
    browser.click('#form button[type="submit"]');
  }

  clickMaleRadio() {
    browser.click(`#form ${MALE_RADIO}`);
  }

  get formIsInvalid() {
    return browser.isExisting('#form.error');
  }

  get maleRadioIsInvalid() {
    return browser.isExisting(`#form .field.error ${MALE_RADIO}`);
  }

  get femaleRadioIsInvalid() {
    return browser.isExisting(`#form .field.error ${FEMALE_RADIO}`);
  }

  get resultText() {
    return browser.getText(RESULT_SPAN);
  }
}

/**
 * SEE: https://sqa.stackexchange.com/questions/22259/how-to-send-an-enter-using-webdriverio
 */
function setEmptyAndSendEnterKey(browser, element) {
  if (browser.options.desiredCapabilities.browserName == 'MicrosoftEdge') {
    element.setValue('');
    browser.keys('\uE007'); // Firefox doesn't support this protocol.
  } else {
    element.setValue('\n');
  }
}

module.exports = Page;
