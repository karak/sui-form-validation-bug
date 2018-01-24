(function () {
  "use strict";
}());

const MALE_RADIO = '.ui.radio input[type="radio"][value="M"]';
const FEMALE_RADIO = '.ui.radio input[type="radio"][value="F"]';
const RESULT_SPAN = '#result';

class Page {
  open() {
    browser.url('/index.html');
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

module.exports = Page;
