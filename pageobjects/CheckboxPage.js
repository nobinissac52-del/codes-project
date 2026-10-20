class CheckboxPage {
    constructor(page) {
        this.page = page;
        this.checkbox = page.locator('input[type="checkbox"]').first();
    }

    async goto() {
        await this.page.goto("https://qaplayground.com/practice/radio-checkbox");
    }

    async selectCheckbox() {
        await this.checkbox.check();
    }
}

module.exports = CheckboxPage;