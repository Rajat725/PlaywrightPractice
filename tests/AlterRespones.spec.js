import { test, expect } from "@playwright/test";
let payloadz = { data: [], message: "No Orders" };

test("Altering Resposne", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.rahulshettyacademy.com/client");
  await page.waitForLoadState("networkidle");
  await page.locator("#userEmail").fill("ruhitest@yopmail.com");
  await page.locator("#userPassword").fill("Indigo@123");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");

  await page.route(
    "https://www.rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

    async (route) => {
      const response = await route.fetch();
      const actualResponse = await response.json();
      const fakeResponse = JSON.stringify(payloadz);

      route.fulfill({
        actualResponse,
        fakeResponse,
      });
    }
  );

  await page.locator("//button[@routerlink='/dashboard/myorders']").click();
  await page.waitForResponse(
    "https://www.rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
  );
  const text=await page.locator(".mt-4.ng-star-inserted").textContent();
  expect(text).toContain(
    " You have No Orders to show at this time. Please Visit Back Us "
  );
});
