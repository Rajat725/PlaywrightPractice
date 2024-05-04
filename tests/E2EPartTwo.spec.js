import { test, expect } from "@playwright/test";
test('Complete E2E Flow Part Two',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();


    await page.goto('https://omayo.blogspot.com/');
    await page.waitForLoadState('networkidle');

    const head=await page.getByRole('heading',{name:'omayo (QAFox.com) '})
    .textContent();
    expect(head).toContain('QAFox');

    const [NewPage]=await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link',{name:'http://www.Selenium143.blogspot.com'}).click()
    ]);
    expect(NewPage).toHaveTitle('Selenium143');

    await page.locator('select#multiselect1').selectOption('volvox');
    await page.locator('select#multiselect1').selectOption('swiftx');
    await page.locator('select#multiselect1').selectOption('Hyundaix');
    await page.locator('select#multiselect1').selectOption('audix');

    await page.locator('#ta1').pressSequentially('Hello Rajat');

    







})