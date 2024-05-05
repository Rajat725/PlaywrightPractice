import { test, expect } from "@playwright/test";

test('Complete E2E Flow',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.locator("//img[@alt='User Avatar']").nth(0)
    .hover();
    const text=await page.locator("a[href='/users/1']").textContent();
    console.log(text);

    const imgs = await page.locator("//img[@alt='User Avatar']").allTextContents();
    for (let i = 0; i < imgs.length; i++) {
      console.log("-------------------"); 
      await page.locator("//img[@alt='User Avatar']").nth(i).hover();
      const text = await page.locator("a[href='/users/" + (i + 1) + "']").textContent();
      console.log(text);
    }
    
    await page.close();    
   
})