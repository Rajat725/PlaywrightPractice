import { test, expect } from "@playwright/test";

test("Launch Browser", async ({ browser}) => {
 const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://omayo.blogspot.com/");
  await expect(page).toHaveTitle("omayo (QAFox.com)");

});

test("Launch Browser Second Time", async ({ browser, page }) => {
  await page.goto("https://omayo.blogspot.com/");
  await expect(page).toHaveTitle("omayo (QAFox.com)");
});
