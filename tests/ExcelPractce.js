const ExcelJS = require('exceljs');
//import ExcelJS from 'exceljs'

async function getPriceOfProduct(productName, excelPath) {
  let result = { rowNo: 0, colNo: 0 };
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);
  const worksheet = workbook.getWorksheet('Sheet1');
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value == productName) {
        result.rowNo = rowNumber;
        result.colNo = colNumber;
      }
    });
  });
  const cell = worksheet.getCell(result.rowNo, result.colNo + 2);
  return cell.value;
}

async function resetPriceOfProduct(productName, price, excelPath) {
  let result = { rowNo: 0, colNo: 0 };
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);
  const worksheet = workbook.getWorksheet('Sheet1');
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value == productName) {
        result.rowNo = rowNumber;
        result.colNo = colNumber;
      }
    });
  });
  const cell = worksheet.getCell(result.rowNo, result.colNo + 2);
  cell.value = price;
  await workbook.xlsx.writeFile(excelPath);
}

(async () => {
    console.log(await getPriceOfProduct('Apple', 'download.xlsx'));
    await resetPriceOfProduct('Apple', '700', 'download.xlsx');
    console.log(await getPriceOfProduct('Apple', 'download.xlsx'));
  })();

