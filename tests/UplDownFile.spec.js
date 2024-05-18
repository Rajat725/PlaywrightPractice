import { test, expect } from '@playwright/test';
const ExcelJS = require('exceljs');

test('Upload Download File',async({page})=>{

    const newValue='499';
    const productName='Kivi';
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    await page.waitForLoadState('networkidle');
    const prmDownload=page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    const downL=await prmDownload;
    await downL.saveAs('C:/Users/DELL/Downloads/'+downL.suggestedFilename());
    await resetPriceOfProduct(productName,newValue,'C:/Users/DELL/Downloads/download.xlsx');
    //await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles('C:/Users/DELL/Downloads/download.xlsx');
    const textlocator = page.getByText(productName);
    const desiredRow = await page.getByRole('row').filter({has :textlocator });
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(newValue);



})

async function resetPriceOfProduct(productName,price,excelPath){
    let result={rowNo:0,colNo:0};
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelPath);
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row,rowNumber)=>{
    
        row.eachCell((cell,colNumber)=>{
    
            if(cell.value==productName){
            result.rowNo=rowNumber;
            result.colNo=colNumber;}
        })
    
    
    })
    const cell=worksheet.getCell(result.rowNo,result.colNo+2);
    cell.value=price;
    await workbook.xlsx.writeFile(excelPath);
    }