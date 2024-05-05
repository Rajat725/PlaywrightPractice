import {test,expect} from '@playwright/test'


test('To test Hidden,Visible Element',async({page})=>{

   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
   await page.locator('#displayed-text').scrollIntoViewIfNeeded();
   await expect(page.locator('#displayed-text:Visible')).toBeVisible();
   await page.locator('#hide-textbox').click();
   await expect(page.locator('#displayed-text')).toBeHidden();
   await page.close();

})