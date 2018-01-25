const Page = require('../helpers/Page');

describe('Index page', () => {
  const page = new Page();

  beforeAll(() => {
    page.open();
  });

  beforeEach(() => {
    page.refresh();
  });

  it('validates form after once invalidated by Submit button', () => {
    // IE11 doesn't go valid, while it shows 'Success' as well as Chrome and Firefox.
    expect(page.resultText).toBe('');

    page.clickSubmitButton();

    expect(page.formIsInvalid).toBeTruthy('Form must be invalid');
    expect(page.maleRadioIsInvalid).toBeTruthy('Male radio must be invalid');
    expect(page.femaleRadioIsInvalid).toBeTruthy('Female radio must be invalid');
    expect(page.resultText).toBe('Failure');

    page.clickMaleRadio();

    page.clickSubmitButton();

    expect(page.formIsInvalid).toBeFalsy('Form must be valid');
    expect(page.maleRadioIsInvalid).toBeFalsy('Male radio must be valid');
    expect(page.femaleRadioIsInvalid).toBeFalsy('Female radio must be valid');
    expect(page.resultText).toBe('Success');
  });

  it('validates form after once invalidated by Enter key', () => {
    // IE11 doesn't show 'Success' because `onSuccess` isn't called -- bug of SUI!
    expect(page.resultText).toBe('');

    page.hitEnterKeyOnNameInput(); // submit 1st

    expect(page.formIsInvalid).toBeTruthy('Form must be invalid');
    expect(page.maleRadioIsInvalid).toBeTruthy('Male radio must be invalid');
    expect(page.femaleRadioIsInvalid).toBeTruthy('Female radio must be invalid');

    expect(page.resultText).toBe('Failure');

    page.clickMaleRadio();

    page.clickSubmitButton(); // submit 2nd

    expect(page.formIsInvalid).toBeFalsy('Form must be valid');
    expect(page.maleRadioIsInvalid).toBeFalsy('Male radio must be valid');
    expect(page.femaleRadioIsInvalid).toBeFalsy('Female radio must be valid');

    expect(page.resultText).toBe('Success');
  });
});
