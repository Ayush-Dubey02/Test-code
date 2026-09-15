const { expect } = require("@playwright/test");

exports.AddupCom = class AddupCom {

    async gotourl() {
        await this.page.goto('https://demoaddup.addnectar.site/');
    }
    constructor(page) {
        this.page = page;
        this.signin = page.getByRole('link', { name: 'Sign In' });
        this.login = page.getByRole('link', { name: 'Log in' });
        this.username = page.getByRole('textbox', { name: 'example@youremail.com' });
        this.password = page.getByRole('textbox', { name: 'Enter Your Password' });
        this.signin2 = page.getByRole('button', { name: 'Sign In' });
    }
    async addupPom() {
        await this.signin.click();
        await this.login.click();
    }
    async addupPom2(username, password) {
        await this.username.click();
        await this.username.fill(username);
        await this.password.click();
        await this.password.fill(password);
        await this.signin2.click();
    }
}                                       