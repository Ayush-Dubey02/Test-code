import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });

test('test', async ({ page }) => {
  await page.goto('https://orders.cosmopromos.com/auth/login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ayush.dubey@addnectar.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Add@2026');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('7329');
  await page.getByRole('textbox', { name: 'Search...' }).press('Enter');
  await page.getByRole('button', { name: 'EProof Sent to Customer   (1)' }).click();
  await page.getByRole('link', { name: '7329' }).click();
  await page.getByRole('button', { name: 'Send Proof' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
});