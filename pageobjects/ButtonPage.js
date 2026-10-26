
class ButtonsPage {
    constructor(page) {
        this.page = page;

        this.home = page.getByRole('button', { name: 'Go To Home' });
        this.location = page.getByRole('button', { name: 'Find Location' });
        this.color = page.getByRole('button', { name: 'Find my color?' });
        this.size = page.getByRole('button', { name: 'Do you know my size?' });
        this.disabled = page.getByRole('button', { name: 'Disabled' });
        this.hold = page.getByRole('button', { name: 'Click and Hold!' });
        this.doubleClick = page.getByRole('button', { name: 'Double Click Me' });
        this.rightClick = page.getByRole('button', { name: 'Right Click Me' });
    }

    async goto() {
        await this.page.goto('https://qaplayground.com/practice/buttons');
    }
}

module.exports = ButtonsPage;