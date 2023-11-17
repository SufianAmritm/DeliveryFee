const Customer = require('../dto/customer-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const {
  getAllService,
  getSingleService,
} = require('../../common/utils/services/get-service');
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
