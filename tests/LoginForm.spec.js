import { test, expect } from "@playwright/test";

test("Wrong Login Cred Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("input[placeholder='Username']").fill("RajatSharma");
  await page.locator("input[placeholder='Password']").fill("Indigo@123");
  await page.locator(".orangehrm-login-button").click();
  await expect(await page.locator(".oxd-alert-content--error")).toContainText(
    "Invalid"
  );
  const text = await page
    .locator(".oxd-alert-content--error")
    .allTextContents();
  console.log("Errorr Is :: " + text);
});

test("Clear Text Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("input[placeholder='Username']").fill("RajatSharma");
  await page.locator("input[placeholder='Password']").fill("Indigo@123");

  await page.locator("input[placeholder='Username']").fill("");
  await page.locator("input[placeholder='Password']").fill("");

  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator(".orangehrm-login-button").click();
});

test("Multiple Text Grabbing", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator(".orangehrm-login-button").click();
  await page.locator(".oxd-text.oxd-text--p.--text").first().waitFor();
  const itemQuickLaunch = await page
    .locator(".oxd-text.oxd-text--p.--text")
    .allTextContents();
  console.log(itemQuickLaunch);
});
