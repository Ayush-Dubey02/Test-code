exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username_txt = page.getByRole('textbox', { name: 'Username' });
        this.password_txt = page.getByRole('textbox', { name: 'Password' });
        this.login_btn = page.getByRole('button', { name: ' Login' });
        this.logout_btn = page.getByRole('link', { name: 'Logout' })
        
    }
    async gotologinpage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }


    async Login(username, password) {
        await this.username_txt.fill(username);
        await this.password_txt.fill(password);
        await this.login_btn.click();
    }
    async logout(){
        await this.logout_btn.click();
    }
}