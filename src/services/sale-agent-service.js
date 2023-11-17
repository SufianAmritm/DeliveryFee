const SaleAgent = require('../dto/sale-agent-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const {
  getAllService,
  getSingleService,
} = require('../../common/utils/services/get-service');
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
