const { test, expect } = require("@playwright/test");
const RadioCheckboxPage = require("../pageobjects/RadioCheckboxPage");

test("Scenario 1: Basic Checkbox Check and Uncheck", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();

    await radio.checkTerms();
    await expect(radio.terms).toBeChecked();

    await radio.uncheckTerms();
    await expect(radio.terms).not.toBeChecked();
});

test("Scenario 2: Radio Button Group", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();
    await radio.selectPro();

    await expect(radio.radioGroup.getByLabel("Pro")).toBeChecked();
    await expect(radio.radioGroup.getByLabel("Starter")).not.toBeChecked();
});

test("Scenario 3: Checkbox Group - Select All", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();
    await radio.selectAllSkills();

    const count = await radio.skills.count();

    for (let i = 0; i < count; i++) {
        await expect(radio.skills.nth(i)).toBeChecked();
    }
});

test("Scenario 4: Assert Checked and Unchecked State", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();

    await expect(radio.newsletter).toBeChecked();
    await expect(radio.terms).not.toBeChecked();
});

test("Scenario 5: Disabled Controls", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();

    await expect(radio.disabledCheckbox).toBeDisabled();
    await expect(radio.disabledRadio).toBeDisabled();
});

test("Scenario 6: Sibling Located Controls", async ({ page }) => {
    await page.goto("https://qaplayground.com/practice/radio-checkbox");

    const checkbox = page.locator('input[type="checkbox"]').nth(0);

    await checkbox.check();

    await expect(checkbox).toBeChecked();
});

test("Scenario 7: Scoped Card Controls", async ({ page }) => {
    await page.goto("https://qaplayground.com/practice/radio-checkbox");

    const checkbox = page.locator('input[type="checkbox"]').nth(1);

    await checkbox.check();

    await expect(checkbox).toBeChecked();
});
test("Scenario 8: Dynamic Checkbox List", async ({ page }) => {
    const radio = new RadioCheckboxPage(page);

    await radio.goto();
    await radio.selectPermissions();

    const count = await radio.permissions.count();

    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
        await expect(radio.permissions.nth(i)).toBeChecked();
    }
});