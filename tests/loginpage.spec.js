const { test, expect } = require("@playwright/test");
const LoginPage = require("../pageobjects/Loginpage.js");
const { getLoginData } = require("../utils/login.js");

test("Valid Login", async ({ page }) => {
    const login = new LoginPage(page);
    const data = getLoginData();

    await login.goto();
    await login.login(data.validEmail, data.validPassword);
});

test("Invalid Login", async ({ page }) => {
    const login = new LoginPage(page);
    const data = getLoginData();

    await login.goto();
    await login.login(data.invalidEmail, data.invalidPassword);
});