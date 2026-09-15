import { test, expect } from '@playwright/test';
import { Uniflowpom } from '../Pages/UniflowPom';

test('test', async ({ page }) => {
    const   login = new Uniflowpom(page);
    await login.gotourl();
    await login.Loginfn('11816','Ayush@1234')
    await page.pause();
});                                           