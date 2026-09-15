import { test, expect } from '@playwright/test';
import { oneflow } from '../Pages/OneflowPom';

test('OneFlow Login Page ', async ({ page }) => {
    const login = new oneflow(page);
    await login.gotourl();
    await login.onelog('sagar.raut@addnectar.com', 'Add@2025');
    await page.pause();
    await page.getByRole('button', { name: 'In Progress In Progress -' }).click();
    await page.getByRole('button', { name: 'Create New Job' }).click();
    await page.getByRole('combobox', { name: 'Job / Service Type' }).click();
    await page.getByRole('option', { name: 'Recreation' }).click();
    await page.getByRole('textbox', { name: 'Reference #' }).click();
    await page.getByRole('textbox', { name: 'Reference #' }).fill('Test');
    await page.getByRole('combobox', { name: 'Priority' }).click();
    await page.getByRole('option', { name: 'Rush' }).click();
    await page.getByRole('textbox', { name: 'Description:' }).click();
    await page.getByRole('textbox', { name: 'Description:' }).fill('test');
    await page.getByRole('button', { name: 'Upload from computer' }).first().click();
    //await page.getByRole('button', { name: 'Upload from computer' }).first().setInputFiles('C:\Users\PROJECT13\dummy-pdf_2.pdf');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Rejected Rejected -' }).click();
});