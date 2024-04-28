import {test,expect} from '@playwright/test'

test('Select Dropdown',async({page})=>{

    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
    const drpdown=page.locator('(//select)[1]');
    await drpdown.selectOption('IND');

})

test.only('Radio Buttons',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#checkBoxOption1').check();
    await expect(page.locator('#checkBoxOption1')).toBeChecked();
    await page.locator('#checkBoxOption2').check();
    await expect(page.locator('#checkBoxOption2')).toBeChecked();
    await page.locator('#checkBoxOption3').check();
    await expect(page.locator('#checkBoxOption3')).toBeChecked();
    await page.locator("input[value='radio1']").click();
    await page.locator("input[value='radio2']").click();
    await page.locator("input[value='radio3']").click();
    expect(await page.locator("input[value='radio2']").isChecked()).toBeFalsy();

})