import { test, expect } from "@playwright/test";

test('Complete E2E Flow',async({page})=>{

    const productName='Sauce Labs Onesie';

    await page.goto('https://www.saucedemo.com/');
    await page.locator("#user-name").fill("Rajat Sharma");
    await page.locator("#password").fill("Lol@123");
    await page.locator("#login-button").click();

    await page.locator("#user-name").clear();
    await page.locator("#password").clear();

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForLoadState('networkidle');

    const cards = page.locator('.inventory_item');
    for (let i = 0; i < await cards.count(); i++) {

       if( await cards.nth(i).locator(".inventory_item_name ").textContent()==productName)
       {
        await cards.nth(i).locator("button[id^='add-to-cart']").click();  
        break;
       }

    }

    await page.locator(".shopping_cart_link").click();
    await page.waitForLoadState('networkidle');

    const cartArr=await page.locator(".inventory_item_name").allTextContents();
    expect(cartArr).toContain(productName);
    
    await page.locator("#checkout").click();
    await page.waitForLoadState('networkidle');

    await page.locator("#first-name").pressSequentially("Rajat Sharma");
    await page.locator("#last-name").pressSequentially("Sharma");
    await page.locator("#postal-code").pressSequentially("124001");
    await page.locator("#continue").click();
    await page.waitForLoadState('networkidle');

    await page.locator("#finish").click();
    await page.waitForLoadState('networkidle');

    expect(await page.locator('.complete-header'))
    .toHaveText("Thank you for your order!");
    
    await page.close();


})