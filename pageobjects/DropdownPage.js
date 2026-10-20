
class DropdownPage {
    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('#fruitSelect');
    }

    async open() {
        await this.page.goto('https://qaplayground.com/practice/dropdowns');
    }

    async selectFruit() {
        await this.dropdown.selectOption('apple');
    }
}

module.exports = DropdownPage;