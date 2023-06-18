const { COMMON } = require("../constants/constant");

exports.LoginPage = class LoginPage {    
    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('#user-email');
        this.password_textbox = page.locator('#user-password');
        this.login_btn = page.getByRole('button', { name: 'Log in' });
    }

    // wait til the website gets open
    async goToLogin(){
        await this.page.goto(COMMON.URL);
    }

    async login(username,password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_btn.click();
    }
}