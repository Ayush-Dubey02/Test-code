const { expect } = require('@playwright/test');

exports.Addledger = class Addledger {

    async gotourl() {
        await this.page.goto('https://demo.addledger.com');
    }
    constructor(page) {
        this.page = page;
        //this.contactus = page.getByRole('link', { name: 'Contact Us' });
    }
    // async addledgerlaunch() {
    //     await this.contactus.click();
    // }
}