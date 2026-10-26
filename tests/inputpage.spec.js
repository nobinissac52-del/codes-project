
const { test, expect } = require('@playwright/test');
const InputPage = require('../pageobjects/InputPage');
const { getInputData } = require('../utils/inputdata.js');

test('Input Fields Full Page Test', async ({ page }) => {
    const input = new InputPage(page);
    const data = getInputData();

    await input.goto();

    // 1. Enter movie name
    await input.movie.fill(data.movie);
    await input.submit.click();
    await expect(input.movie).toHaveValue(data.movie);

    // 2. Append text and press Tab
    await input.append.click();
    await page.keyboard.type(data.appendText);
    await page.keyboard.press('Tab');

    // 3. Read field value
    await input.readButton.click();
    await expect(input.read).not.toHaveValue('');

    // 4. Clear field
    await input.clearButton.click();
    await expect(input.clear).toHaveValue('');

    // 5. Check disabled field
    await expect(input.disabled).toBeDisabled();

    // 6. Check readonly field
    await expect(input.readonly).toHaveAttribute('readonly', '');
});