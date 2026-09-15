import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../Pages/Login';


test('POM Demo ', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotologinpage();
    await Login.Login('tomsmith', 'SuperSecretPassword!');
    await Login.logout();
    await page.pause();

});