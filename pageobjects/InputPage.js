class InputPage {

    constructor(page) {

        this.page = page;

        this.movieName = page.locator("#movieNameInput");
        this.submitButton = page.locator("#submitMovieBtn");
    }

    async goto() {
        await this.page.goto("https://qaplayground.com/practice/input-fields");
    }

    async enterMovieName(movieName) {
        await this.movieName.fill(movieName);
    }

    async submitMovie() {
        await this.submitButton.click();
    }
}

module.exports = InputPage;