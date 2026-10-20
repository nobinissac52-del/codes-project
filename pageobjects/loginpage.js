class LoginPage {

    constructor(page) {
        this.page = page;

        this.email = page.locator('#email');
         this.password = page.locator('#password');
       
       // this.loginButton = page.getByRole("button", { name: "Sign in" });
      this.loginButton = page.locator('//button[@type="submit"]');
        this.resetButton = page.getByRole("button", { name: "Reset" });
    }

    async goto() {
        await this.page.goto("https://qaplayground.com/auth/sign-in");
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async reset() {
        await this.resetButton.click();
    }
}

module.exports = LoginPage;