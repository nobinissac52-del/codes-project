
class FormsPage {
    constructor(page) {
        this.page = page;

        // Login Form
        this.email = page.locator('input[type="email"]').first();
        this.loginPassword = page.locator('input[type="password"]').first();
        this.loginButton = page.getByRole('button', { name: 'Login', exact: true });

        // Personal Details
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.phone = page.locator('#phone');
        this.dob = page.locator('#dob');

        // Address
        this.country = page.getByTestId('select-country');
        this.city = page.getByPlaceholder('Enter city');

        // Interests
        this.selenium = page.getByTestId('checkbox-interest-selenium');
        this.playwright = page.getByTestId('checkbox-interest-playwright');

        // Account Setup
        this.accountPassword = page.locator('#password');
        this.confirmPassword = page.locator('#confirmPassword');
        this.terms = page.getByTestId('checkbox-terms');
    }

    async goto() {
        await this.page.goto('/practice/forms');
    }

    async loginForm(email, password) {
        await this.email.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async personalDetails(first, last, phone, dob) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.phone.fill(phone);
        await this.dob.fill(dob);
        await this.page.getByTestId('radio-gender-male').check();
        await this.page.getByRole('button', { name: 'Save Details' }).click();
    }

    async addressForm(city) {
        await this.country.selectOption({ label: 'India' });
        await this.city.fill(city);
        await this.page.getByRole('button', { name: 'Save Address' }).click();
    }

    async interestsForm() {
        await this.selenium.check();
        await this.playwright.check();
        await this.page.getByRole('button', { name: 'Save Interests' }).click();
    }

    async accountSetup(password) {
        await this.accountPassword.fill(password);
        await this.confirmPassword.fill(password);
        await this.terms.check();
        await this.page.getByRole('button', { name: 'Submit', exact: true }).click();
    }
}

module.exports = FormsPage;