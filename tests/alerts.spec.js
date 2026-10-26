const { test, expect } = require("@playwright/test");
const AlertsPage = require("../pageobjects/AlertPage");

test.describe("Alerts and Dialogs", () => {

    test("Scenario 1: Close Info Alert Dialog", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();
        await alerts.openInfoDialog();

        await expect(alerts.infoDialog).toBeVisible();

        await alerts.infoDialog.getByRole("button", {
            name: /close/i
        }).click();

        await expect(alerts.infoDialog).not.toBeVisible();
    });

    test("Scenario 2: Confirm Action in Dialog", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();
        await alerts.openConfirmDialog();

        await expect(alerts.confirmDialog).toBeVisible();

        await alerts.confirmDialog.getByRole("button", {
            name: /confirm|yes|ok/i
        }).click();

        await expect(alerts.confirmDialog).not.toBeVisible();
    });

    test("Scenario 3: Cancel and Stay on Page", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();
        await alerts.openUnsavedDialog();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await dialog.getByRole("button", {
            name: /stay|cancel/i
        }).click();

        await expect(dialog).not.toBeVisible();
        await expect(page).toHaveURL(/alerts-dialogs/);
    });

    test("Scenario 4: Destructive Delete Confirm", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();
        await alerts.openDeleteDialog();

        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();

        await dialog.getByRole("button", {
            name: /delete|confirm/i
        }).click();

        await expect(dialog).not.toBeVisible();
    });

    test("Scenario 5: Backdrop Click to Dismiss", async ({ page }) => {
    const alerts = new AlertsPage(page);

    await alerts.goto();
    await alerts.openBackdropDialog().click();

    const backdrop = page.getByTestId("backdrop-dismiss-dialog");

    await expect(backdrop).toBeVisible();

    const box = await backdrop.boundingBox();
    expect(box).not.toBeNull();

    // Click the top-left corner of the backdrop
    await page.mouse.click(box.x + 5, box.y + 5);

    await expect(backdrop).not.toBeVisible();
});

    test("Scenario 6: Escape Key to Dismiss", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();
        await alerts.openEscapeDialog();

        await expect(alerts.escapeDialog).toBeVisible();

        await page.keyboard.press("Escape");

        await expect(alerts.escapeDialog).not.toBeVisible();
    });
test("Scenario 7: Assert Dialog Content", async ({ page }) => {
    const alerts = new AlertsPage(page);

    await alerts.goto();
    await alerts.openNotification();

    const dialog = page.getByRole("dialog");

    await expect(dialog).toBeVisible();

    // Verify that the dialog has content
    const text = await dialog.textContent();

    expect(text).toBeTruthy();
});



    test("Scenario 8: Scoped Dismiss - Repeated Triggers", async ({ page }) => {
        const alerts = new AlertsPage(page);
        await alerts.goto();

        await expect(alerts.notification).toBeVisible();

        await alerts.notification.getByTestId("notif-dismiss-btn").click();

        const dialog = page.locator(
            '[data-testid="dismiss-confirm-dialog"][data-notif-id="notif-2"]'
        );

        await expect(dialog).toBeVisible();

        await dialog.getByRole("button", {
            name: /confirm dismiss/i
        }).click();

        await expect(alerts.notification).toBeVisible();
    });

});