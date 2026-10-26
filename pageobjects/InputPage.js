
class InputPage {
    constructor(page) {
        this.page = page;
        this.movie = page.locator('#movieNameInput');
        this.append = page.locator('#appendInput');
        this.read = page.locator('#readValueInput');
        this.readButton = page.getByRole('button', { name: 'Read Value' });
        this.clear = page.locator('#clearInput');
        this.clearButton = page.getByRole('button', { name: 'Clear' });
        this.disabled = page.locator('#disabledInput');
        this.readonly = page.locator('#readonlyInput');
        this.submit = page.getByRole('button', { name: 'Submit' });
    }

    async goto() {
        await this.page.goto('https://qaplayground.com/practice/input-fields');
    }
}

module.exports = InputPage;