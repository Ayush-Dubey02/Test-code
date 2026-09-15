import { test, expect } from '@playwright/test';
import { Aone } from '../Pages/AonePom';

test('Aone LOGIN through POM', async ({ page }) => {
    const Login = new Aone(page);
    await Login.gotourl();
    await Login.aonelogin('11426', 'Add@2025');
    await page.pause();
}); 