
class LoginFormPage {
    constructor(page) {
        this.page = page;

        this.email = page.locator('#login-email');
         this.password = page.locator('#login-password');
       
       // this.loginButton = page.getByRole("button", { name: "Sign in" });
      this.loginButton = page.locator('#loginSubmitBtn');
      this.loginButton.click();
        this.resetButton = page.getByRole("button", { name: "Reset" });
    }

    async open() {
        await this.page.goto('https://qaplayground.com/practice/forms');
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginFormPage;