import { test, expect } from "@playwright/test";

test('Take Screenshot Tests',async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    await page.waitForLoadState('networkidle');
    await page.screenshot({path:'WebPage.png'});
    await page.locator('#downloadButton').screenshot({path:'Download.png'});
    expect(await page.screenshot()).toMatchSnapshot({path:'WebPage.png'});
    expect(await page.locator('#downloadButton').screenshot()).toMatchSnapshot('Download.png');


})