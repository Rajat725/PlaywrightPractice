import { test, expect } from "@playwright/test";

test('Alert Window',async({page})=>{

    await page.goto('https://omayo.blogspot.com/');
    await page.goto('https://www.google.com');
    await page.goBack();
    await page.locator('#confirm').click();
    page.on('dialog',dialog=>dialog.accept());
    await page.locator('#alert2').click();
    await page.locator('#selenium143').click();
    await page.close();

})