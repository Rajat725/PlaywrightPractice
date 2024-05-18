//const ExcelJS = require('exceljs');
import ExcelJS from 'exceljs'

async function workSheetLoader(){
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('download.xlsx');
const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{

        console.log(cell.value);
    })


})

}
workSheetLoader();