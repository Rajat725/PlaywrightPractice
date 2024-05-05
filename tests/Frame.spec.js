import { test, expect } from "@playwright/test";

test('Complete E2E Flow',async({page})=>{
    await page.goto('https://omayo.blogspot.com/');
    const farme1=page.frameLocator('#iframe1');
    const farme2=page.frameLocator('#iframe2');

    const text=await farme1
    .locator("a[href='https://plus.google.com/100812711311397735125']")
    .textContent();
    console.log(text);

    
    const text2=await farme2
    .locator("h1[class='title']")
    .textContent();
    console.log(text2);

    const title=await page.getByRole('heading',{name:'omayo (QAFox.com)'}).textContent();
    console.log(title);
    await page.close();
})