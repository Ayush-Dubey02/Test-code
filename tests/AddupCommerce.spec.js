import { test, expect } from '@playwright/test';
import { AddupCom } from '../Pages/AddupCommercePOM';

test('AddupCommerce POM', async ({ page }) => {
    const Login = new AddupCom(page);
    await Login.gotourl();
    await Login.addupPom();
    await Login.addupPom2('shreenu.lingam@addnectar.com', 'Sinu@1234');
    
  //  await page.pause();
});