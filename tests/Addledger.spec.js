import { test, expect } from '@playwright/test';
import { Addledger } from '../Pages/AddLedgerPom';

test('Addledger', async ({ page }) => {
    const sitelaunch = new Addledger(page);
    await sitelaunch.gotourl();
    await page.close();
});