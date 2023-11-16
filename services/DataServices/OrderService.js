const Order = require('../../dto/OrderDTO');
const archiver = require('archiver');
const insertService = require('../TableServices/InsertService');
const updateService = require('../TableServices/UpdateService');
const {
  getAllService,
  getSingleService,
} = require('../TableServices/GetService');
const deleteService = require('../TableServices/DeleteService');
const reportService = require('../TableServices/ReportService');
const reportTransaction = require('../../db/transactions/ReportTransaction');
const tableName = 'orders';
const orderInsertService = async (body) => {
  const orderDTO = new Order(body);
  return await insertService(orderDTO, tableName);
};

const orderUpdateService = async (body, id) => {
  const orderDTO = new Order(body);
  return await updateService(orderDTO, tableName, id);
};
const orderGetAllService = async () => {
  return await getAllService(tableName);
};
const orderGetSingleService = async (id) => {
  return await getSingleService(id, tableName);
};
const orderDeleteService = async (id) => {
  return await deleteService(id, tableName);
};
const orderReportService = async (res) => {
  const result = await reportTransaction();
  const [file1, file2] = await reportService(result);

  const zip = archiver('zip', {
    zlib: { level: 9 },
  });

  zip.pipe(res);

  zip.file(file1, { name: 'report.xlsx' });
  zip.file(file2, { name: 'summary.xlsx' });

  zip.finalize();
};
module.exports = {
  orderInsertService,
  orderUpdateService,
  orderGetAllService,
  orderGetSingleService,
  orderDeleteService,
  orderReportService,
};
