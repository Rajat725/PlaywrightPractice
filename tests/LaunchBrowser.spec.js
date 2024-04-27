import { test, expect } from "@playwright/test";

test("Launch Browser", async ({ browser }) => {
  const context = browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/");
  expect(page).toHaveTitle("The Internet");
});

test("Launch Browser Second Time", async ({ browser, page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  expect(page).toHaveTitle("The Internet");
});
