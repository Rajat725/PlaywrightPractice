import { test, expect } from "@playwright/test";

test('Locators Strategy Example :-1',async({page})=>{

    await page.goto('https://omayo.blogspot.com/');
    await page.waitForLoadState('networkidle');

    const title=await page.getByRole('heading',{name:'omayo (QAFox.com)'}).textContent();
    console.log(title);
    expect(title).toContain('QAFox');

    await page.locator("input[name='gender']").nth(0).click();

    await page.getByRole('button',{name:'Search'}).click();
    await page.waitForLoadState('networkidle');

    await page.getByRole('link',{name:'http://www.Selenium143.blogspot.com'}).click();

})

test('Locators Strategy Example :-2',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForLoadState('networkidle');

    await page.locator('.inventory_item').filter({hasText:'Sauce Labs Onesie'})
    .getByRole('button',{name:'Add To cart'}).click();

    const price=await page.locator('.inventory_item').filter({hasText:'Sauce Labs Backpack'})
    .locator('.inventory_item_price').textContent();

    console.log(price);
    




})
