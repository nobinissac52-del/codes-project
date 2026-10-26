
const { test, expect } = require('@playwright/test');
const ButtonsPage = require('../pageobjects/ButtonPage');

test('Buttons Page Test', async ({ page }) => {
    const buttons = new ButtonsPage(page);

    await buttons.goto();

    // Single click
    await expect(buttons.home).toBeVisible();
    await buttons.home.click();

    // Find location
    await buttons.location.click();

    // Find color
    await buttons.color.click();

    // Find size
    await buttons.size.click();

    // Check disabled button
    await expect(buttons.disabled).toBeDisabled();

    // Click and hold
    await buttons.hold.hover();
    await page.mouse.down();
    await page.waitForTimeout(1500);
    await page.mouse.up();

    // Double click
    await buttons.doubleClick.dblclick();

    // Right click
    await buttons.rightClick.click({ button: 'right' });
});