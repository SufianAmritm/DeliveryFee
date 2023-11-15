const Customer = require('../../dto/CustomerDTO');
const insertService = require('../TableServices/InsertService');
const updateService = require('../TableServices/UpdateService');
const {
  getAllService,
  getSingleService,
} = require('../TableServices/GetService');
const tableName = 'customers';
const customerInsertService = async (body) => {
  const customerDTO = new Customer(body);
  return await insertService(customerDTO, tableName);
};

const customerUpdateService = async (body, id) => {
  const customerDTO = new Customer(body);
  return await updateService(customerDTO, tableName, id);
};
const customerGetAllService = async () => {
  return await getAllService(tableName);
};
const customerGetSingleService = async (id) => {
  return await getSingleService(id, tableName);
};
const customerDeleteService = async (id) => {
  return await deleteService(id, tableName);
};
module.exports = {
  customerInsertService,
  customerUpdateService,
  customerGetAllService,
  customerGetSingleService,
  customerDeleteService,
};
