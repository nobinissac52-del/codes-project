const { test, expect } = require('@playwright/test');
const AlertsPage = require('../pageobjects/AlertPage');

test('Close info dialog', async ({ page }) => {
    const alerts = new AlertsPage(page);

    await alerts.openPage();

    await page.locator('[data-testid="open-info-dialog"]').click();

    await expect(
        page.locator('[data-testid="info-alert-dialog"]')
    ).toBeVisible();

    await page.locator('[data-testid="info-dialog-close-btn"]').click();
});