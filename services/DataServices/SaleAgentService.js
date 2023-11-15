const SaleAgent = require('../../dto/SaleAgentDTO');
const insertService = require('../TableServices/InsertService');
const updateService = require('../TableServices/UpdateService');
const {
  getAllService,
  getSingleService,
} = require('../TableServices/GetService');
const tableName = 'sale_agents';
const saleAgentInsertService = async (body) => {
  const saleAgentDTO = new SaleAgent(body);
  return await insertService(saleAgentDTO, tableName);
};

const saleAgentUpdateService = async (body, id) => {
  const saleAgentDTO = new SaleAgent(body);
  return await updateService(saleAgentDTO, tableName, id);
};
const saleAgentGetAllService = async () => {
  return await getAllService(tableName);
};
const saleAgentGetSingleService = async (id) => {
  return await getSingleService(id, tableName);
};
const saleAgentDeleteService = async (id) => {
  return await deleteService(id, tableName);
};
module.exports = {
  saleAgentInsertService,
  saleAgentUpdateService,
  saleAgentGetAllService,
  saleAgentGetSingleService,
  saleAgentDeleteService,
};
