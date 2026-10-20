
const { test, expect } = require('@playwright/test');
const DropdownPage = require('../pageobjects/DropdownPage.js');
const { getData } = require('../utils/dropdowndata.js');

test('Select fruit', async ({ page }) => {
    const dropdown = new DropdownPage(page);
    const data = getData();

    await dropdown.open();
    await dropdown.dropdown.selectOption(data.fruit);

    await expect(dropdown.dropdown).toHaveValue(data.fruit);
});