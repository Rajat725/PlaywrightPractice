import { test, expect } from "@playwright/test";

test('Child Window',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://omayo.blogspot.com/');
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.locator("#selenium143").click()
    ]);
    const text=await newPage
    .locator("a[href='https://plus.google.com/100812711311397735125']")
    .textContent();
    await page.locator('#ta1').fill(text);
    console.log("%c" + text, 'color: blue;');
    

})