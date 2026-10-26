
const { test, expect } = require("@playwright/test");
const DropdownPage = require("../pageobjects/DropdownPage");
const { getDropdownData } = require("../utils/dropdowndata.js");

test("Select Fruit by Visible Text", async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getDropdownData();

    await dropdown.goto();
    await dropdown.selectFruit(data.fruit);

    await expect(dropdown.fruit).toHaveValue("apple");
});

test("Select Country by Value", async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getDropdownData();

    await dropdown.goto();
    await dropdown.selectCountry(data.country);

    await expect(dropdown.country).toHaveValue("india");
});

test("Select Last Language and Read Options", async ({ page }) => {
    const dropdown = new DropdownPage(page);

    await dropdown.goto();
    await dropdown.selectLastLanguage();

    await expect(dropdown.language).toHaveValue("typescript");
});

test("Multi-Select Superheroes", async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getDropdownData();

    await dropdown.goto();
    await dropdown.selectHeroes(data.heroes);

    await expect(
        dropdown.heroes.locator("option:checked")
    ).toHaveCount(2);
});

test("Custom Dropdown Listbox", async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getDropdownData();

    await dropdown.goto();
    await dropdown.selectPriority(data.priority);

    await expect(
        page.getByTestId("priority-dropdown-trigger")
    ).toContainText(data.priority);
});

test("Searchable City Combobox", async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getDropdownData();

    await dropdown.goto();
    await dropdown.selectCity(data.citySearch, data.city);

    await expect(page.getByText("Pune", { exact: true }).last());
});