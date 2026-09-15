exports.Uniflowpom = class Uniflowpom{

    async gotourl(){
        await this.page.goto('https://uniflow.addnectar.com/login');
    }
    constructor(page){
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Email or Employee Code' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginbtn = page.getByRole('button', { name: 'Login' })
    }
    async Loginfn(username , password ){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }
}