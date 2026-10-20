
const { test, expect } = require("@playwright/test");
const ButtonPage = require("../pageobjects/ButtonPage");

test("Button Test", async ({ page }) => {
    const buttonPage = new ButtonPage(page);

    await buttonPage.openPage();
    await buttonPage.clickButton();

    await expect(buttonPage.button).toBeVisible();
});