import {test,expect} from '@playwright/test'

test.only('Wrong Login Cred Test',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator("input[placeholder='Username']").fill('RajatSharma');
await page.locator("input[placeholder='Password']").fill('Indigo@123');
await page.locator(".orangehrm-login-button").click();
await expect(await page.locator(".oxd-alert-content--error")).toContainText('Invalid');
const text=await page.locator(".oxd-alert-content--error").allTextContents();
console.log("Errorr Is :: "+text);

})