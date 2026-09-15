import { test, expect } from '@playwright/test';
import { AddupCom } from '../Pages/AddupCommercePOM';
import { Aone } from '../Pages/AonePom';
import { oneflow } from '../Pages/OneflowPom';
import { Uniflowpom } from '../Pages/UniflowPom';

test('Addup Login Page', async ({ page })=>{
    const Adduplogin = new AddupCom(page);
    await Adduplogin.gotourl();
    await Adduplogin.addupPom();
    await Adduplogin.addupPom2('shreenu.lingam@addnectar.com','Sinu@1234')
});

test('Aone login page ',async({page})=>{
    const Aonelogin = new Aone(page);
    await Aonelogin.gotourl();
    await Aonelogin.aonelogin('11426', 'Add@2026');
});

test ('Oneflow Login Page',async({page})=>{
    const Oneflowlogin = new oneflow(page);
    await Oneflowlogin.gotourl();
    await Oneflowlogin.onelog('sagar.raut@addnectar.com', 'Add@2025');
});


test ('unilow Login page',async({page})=>{
    const uniflowlogin = new Uniflowpom(page);
    await uniflowlogin.gotourl();
    await uniflowlogin.Loginfn('11816','Ayush@1234');
    await page.pause();
});