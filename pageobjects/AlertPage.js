class AlertsPage {
    constructor(page) {
        this.page = page;

        // Scenario 1
        this.infoButton = page.getByTestId("open-info-dialog");
        this.infoDialog = page.getByTestId("info-alert-dialog");

        // Scenario 2
        this.confirmButton = page.getByTestId("open-confirm-dialog");
        this.confirmDialog = page.getByTestId("confirm-action-dialog");

        // Scenario 3
        this.unsavedButton = page.getByTestId("open-unsaved-dialog");

        // Scenario 4
        this.deleteButton = page.getByTestId("open-delete-dialog");

        // Scenario 5
        this.backdropButton = page.getByTestId("open-backdrop-dialog");
        this.backdropDialog = page.getByTestId("backdrop-dismiss-dialog");

        // Scenario 6
        this.escapeButton = page.getByTestId("open-escape-dialog");
        this.escapeDialog = page.getByTestId("escape-dismiss-dialog");

        // Scenario 7
        this.notificationButton = page.getByTestId("open-notification-dialog");

        // Scenario 8
        this.notification = page.locator(
            '[data-testid="notif-item"][data-notif-id="notif-2"]'
        );
    }

    async goto() {
        await this.page.goto(
            "https://qaplayground.com/practice/alerts-dialogs"
        );
    }

    async openInfoDialog() {
        await this.infoButton.click();
    }

    async openConfirmDialog() {
        await this.confirmButton.click();
    }

    async openUnsavedDialog() {
        await this.unsavedButton.click();
    }

    async openDeleteDialog() {
        await this.deleteButton.click();
    }

    async openBackdropDialog() {
        await this.backdropButton.click();
    }

    async openEscapeDialog() {
        await this.escapeButton.click();
    }

    async openNotification() {
        await this.notificationButton.click();
    }
}

module.exports = AlertsPage;