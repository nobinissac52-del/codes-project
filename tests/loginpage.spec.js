const { test, expect } = require("@playwright/test");
const LoginPage = require("../pageobjects/loginpage");
const { getLoginData } = require("../utils/login.js");

test("Login Form Test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    const loginData = getLoginData();

    await loginPage.goto();

    await loginPage.login(
        loginData.email,
        loginData.password
    );

});