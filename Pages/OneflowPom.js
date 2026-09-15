exports.oneflow = class oneflow{

    async gotourl() {
        await this.page.goto('https://oneflow.addnectarstudio.com/');
    }

    constructor(page){
        this.page = page
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginbtn = page.getByRole('button', { name: 'Log In' });
    }

    async onelog(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }

}