const Page = require('../helpers/Page');

describe('Index page', () => {
  const page = new Page();

  beforeAll(() => {
    page.open();
  });

  it('validates form after once invalidated', () => {

    page.clickSubmitButton();

    expect(page.formIsInvalid).toBeTruthy('Form must be invalid');
    expect(page.maleRadioIsInvalid).toBeTruthy('Male radio must be invalid');
    expect(page.femaleRadioIsInvalid).toBeTruthy('Female radio must be invalid');

    page.clickMaleRadio();

    page.clickSubmitButton();

    expect(page.formIsInvalid).toBeFalsy('Form must be valid');
    expect(page.maleRadioIsInvalid).toBeFalsy('Male radio must be valid');
    expect(page.femaleRadioIsInvalid).toBeFalsy('Female radio must be valid');
  });
});
