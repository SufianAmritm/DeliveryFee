const Order = require('../../dto/OrderDTO');
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
const orderReportService = async () => {
  const result = await reportTransaction();
  const response = await reportService(result);
};
module.exports = {
  orderInsertService,
  orderUpdateService,
  orderGetAllService,
  orderGetSingleService,
  orderDeleteService,
  orderReportService,
};
