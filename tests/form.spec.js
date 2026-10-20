
const { test, expect } = require('@playwright/test');
const LoginFormPage = require('../pageobjects/LoginFormPage');
const { getLoginData } = require('../utils/Logindata');

test('Fill login form', async ({ page }) => {
    const loginForm = new LoginFormPage(page);
    const data = getLoginData();

    await loginForm.open();
    await loginForm.login(data.email, data.password);

    await expect(loginForm.email).toHaveValue(data.email);
    await expect(loginForm.password).toHaveValue(data.password);
});