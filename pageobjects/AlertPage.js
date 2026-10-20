
class AlertsPage {
    constructor(page) {
        this.page = page;
    }

    async openPage() {
        await this.page.goto(
            'https://qaplayground.com/practice/alerts-dialogs'
        );
    }
}

module.exports = AlertsPage;

