const { test, expect } = require("@playwright/test");
const CheckboxPage = require("../pageobjects/CheckboxPage");

test("Checkbox Test", async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);

    await checkboxPage.goto();
    await checkboxPage.selectCheckbox();

    await expect(checkboxPage.checkbox).toBeChecked();
});