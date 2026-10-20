
class ButtonPage {
    constructor(page) {
        this.page = page;
        this.button = page.locator("button").first();
    }

    async openPage() {
        await this.page.goto("https://qaplayground.com/practice/buttons");
    }

    async clickButton() {
        await this.button.click();
    }
}

module.exports = ButtonPage;