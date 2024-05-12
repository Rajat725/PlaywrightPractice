import { test, expect, request } from "@playwright/test";

let newContextz;

test.beforeAll("Stroage Session in Json File", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.waitForLoadState("networkidle");
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  await page.waitForLoadState("networkidle");
  await context.storageState({path:'info.json'});
  newContextz =await browser.newContext({storageState:'info.json'});


});

test("Click on Random Section", async () => {
  const page = await newContextz.newPage({storageState:'info.json'});
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.locator("div[title='Apply Leave']").click();
  await page.waitForLoadState("networkidle");
});
