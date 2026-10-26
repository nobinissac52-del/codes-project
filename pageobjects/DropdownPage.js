
class DropdownPage {
    constructor(page) {
        this.page = page;

        this.fruit = page.locator("#fruitSelect");
        this.country = page.locator("#countrySelect");
        this.language = page.locator("#languageSelect");
        this.heroes = page.locator("#heroSelect");

        this.priorityButton = page.getByTestId("priority-dropdown-trigger");
        this.priorityList = page.getByTestId("priority-dropdown-list");

        this.city = page.getByRole("combobox", { name: "City" });
    }

    async goto() {
        await this.page.goto("https://qaplayground.com/practice/dropdowns");
    }

    async selectFruit(fruit) {
        await this.fruit.selectOption({ label: fruit });
    }

    async selectCountry(country) {
        await this.country.selectOption(country);
    }

    async selectLastLanguage() {
        const options = await this.language.locator("option").allTextContents();
        console.log("Available languages:", options);

        await this.language.selectOption({ index: options.length - 1 });
    }

    async selectHeroes(heroes) {
        await this.heroes.selectOption(heroes);
    }

    async selectPriority(priority) {
        await this.priorityButton.click();

        await this.priorityList
            .getByRole("option", { name: priority })
            .click();
    }

    async selectCity(search, city) {
        await this.city.fill(search);
        await this.page.getByRole("option", { name: city }).click();
    }
}

module.exports = DropdownPage;