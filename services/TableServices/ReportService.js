const excelJs = require('exceljs');
const fs = require('fs');

const reportService = async (data) => {
  const workbook = new excelJs.Workbook();

  const headers = Object.keys(data[0]).map((item) => {
    return { header: item.split('_').join(' '), key: item };
  });

  const sheet = workbook.addWorksheet('Report');
  sheet.columns = headers;

  sheet.addRows(data);

  for (i = 0; i < headers.length; i++) {
    sheet.getCell(String.fromCharCode(65 + i) + '1').font = {
      name: 'Arial Black',
    };
    sheet.getColumn(i + 1).alignment = {
      horizontal: 'left',
    };
    sheet.getColumn(i + 1).width = 20;
  }
  sheet.getColumn(1).alignment = { horizontal: 'center' };
  const firstFilePath = 'report.xlsx';
  await workbook.xlsx.writeFile(firstFilePath);
  const secondWorkbook = new excelJs.Workbook();
  const secondSheet = secondWorkbook.addWorksheet('Summary');

  const firstFile = await workbook.xlsx.readFile(firstFilePath);

  const firstSheet = firstFile.getWorksheet('Report');

  const totalOrders = firstSheet.getColumn(1).values.length - 1;

  const quantityColumn = firstSheet.getColumn(6);
  let totalQuantity = 0;
  quantityColumn.eachCell((cell, rowNumber) => {
    if (rowNumber > 1 && !isNaN(cell.value)) {
      totalQuantity += cell.value;
    }
  });

  const totalMoneyColumn = firstSheet.getColumn(7);
  let totalMoney = 0;
  totalMoneyColumn.eachCell((cell, rowNumber) => {
    if (rowNumber > 1 && !isNaN(cell.value)) {
      totalMoney += cell.value;
    }
  });

  secondSheet.addRow(['Total Orders', totalOrders]);
  secondSheet.addRow(['Quantity', totalQuantity]);
  secondSheet.addRow(['Total Money', totalMoney]);
  secondSheet.getColumn(1).font = {
    name: 'Arial Black',
  };
  secondSheet.getColumn(2).alignment = {
    horizontal: 'center',
  };
  secondSheet.getColumn(2).width = 20;
  secondSheet.getColumn(1).width = 20;
  const secondFilePath = 'summary.xlsx';
  await secondWorkbook.xlsx.writeFile(secondFilePath);

  return [firstFilePath, secondFilePath];
};

module.exports = reportService;
