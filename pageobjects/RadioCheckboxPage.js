class RadioCheckboxPage {
    constructor(page) {
        this.page = page;

        // Scenario 1: Basic checkbox
        this.terms = page.getByTestId("chk-accept-terms");

        // Scenario 2: Radio button group
        this.radioGroup = page.getByTestId("radio-plan-group");

        // Scenario 3: Checkbox group
        this.skills = page.getByTestId("chk-skill");

        // Scenario 4: Checked / unchecked state
        this.newsletter = page.getByTestId("chk-newsletter");

        // Scenario 5: Disabled controls
        this.disabledCheckbox = page.getByTestId("chk-disabled");
        this.disabledRadio = page.getByTestId("radio-disabled");

        // Scenario 6: Sibling-located controls
        this.marketing = page.getByLabel("Marketing emails");
        this.sms = page.getByLabel("SMS alerts");
        this.weekly = page.getByLabel("Weekly digest");

        // Scenario 7: Scoped plan cards
        this.enterpriseCard = page.locator(".plan-card").filter({
            hasText: "Enterprise"
        });

        // Scenario 8: Dynamic checkbox list
        this.permissions = page.locator(
            'input[type="checkbox"][name^="perm_"]'
        );
    }

    async goto() {
        await this.page.goto(
            "https://qaplayground.com/practice/radio-checkbox"
        );
    }

    // Scenario 1
    async checkTerms() {
        await this.terms.check();
    }

    async uncheckTerms() {
        await this.terms.uncheck();
    }

    // Scenario 2
    async selectPro() {
        await this.radioGroup.getByLabel("Pro").check();
    }

    // Scenario 3
    async selectAllSkills() {
        const count = await this.skills.count();

        for (let i = 0; i < count; i++) {
            await this.skills.nth(i).check();
        }
    }

    // Scenario 4
    async checkNewsletter() {
        await this.newsletter.check();
    }

    // Scenario 5
    async checkDisabledControls() {
        await this.disabledCheckbox.isDisabled();
        await this.disabledRadio.isDisabled();
    }

    // Scenario 6
    async selectSiblingControls() {
        await this.marketing.check();
        await this.sms.check();
        await this.weekly.check();
    }

    // Scenario 7
    async selectEnterprise() {
        await this.enterpriseCard.getByRole("radio").check();
    }

    // Scenario 8
    async selectPermissions() {
        const count = await this.permissions.count();

        for (let i = 0; i < count; i++) {
            await this.permissions.nth(i).check();
        }
    }
}

module.exports = RadioCheckboxPage;