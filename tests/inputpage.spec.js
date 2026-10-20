const { test, expect } = require("@playwright/test");
const InputPage = require("../pageobjects/InputPage");

test("Movie Name Input Test", async ({ page }) => {

    const inputPage = new InputPage(page);

    await inputPage.goto();

    await inputPage.enterMovieName("Avatar");

    await inputPage.submitMovie();

});