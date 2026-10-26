
const { test, expect } = require('@playwright/test');
const FormsPage = require('../pageobjects/FormsPage.js');
const { getFormData } = require('../utils/formdata.js');

test.describe('QA Playground Forms', () => {

    test('Login Form', async ({ page }) => {
        const forms = new FormsPage(page);
        const data = getFormData();

        await forms.goto();
        await forms.loginForm(data.email, data.loginPassword);
    });

    test('Personal Details Form', async ({ page }) => {
        const forms = new FormsPage(page);
        const data = getFormData();

        await forms.goto();
        await forms.personalDetails(
            data.firstName,
            data.lastName,
            data.phone,
            data.dob
        );

        await expect(forms.firstName).toHaveValue(data.firstName);
    });

    test('Address Form', async ({ page }) => {
        const forms = new FormsPage(page);
        const data = getFormData();

        await forms.goto();
        await forms.addressForm(data.city);

        await expect(forms.city).toHaveValue(data.city);
    });

    test('Interests Form', async ({ page }) => {
        const forms = new FormsPage(page);

        await forms.goto();
        await forms.interestsForm();

        await expect(forms.selenium).toBeChecked();
        await expect(forms.playwright).toBeChecked();
    });

    test('Account Setup Form', async ({ page }) => {
        const forms = new FormsPage(page);
        const data = getFormData();

        await forms.goto();
        await forms.accountSetup(data.accountPassword);
    });
});