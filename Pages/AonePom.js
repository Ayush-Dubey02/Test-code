exports.Aone = class Aone {

    async gotourl() {
        await this.page.goto('https://aone.addnectarstudio.com/');
    }
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Employee Code' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.Loginbtn = page.getByRole('button', { name: 'Log In' });
        this.profilebtn = page.getByRole('button', { name: 'Open settings' });
        this.logoutbtn = page.getByText('Logout');
    }
    async aonelogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.Loginbtn.click();
        await this.profilebtn.click();
        await this.logoutbtn.click();
    }

}