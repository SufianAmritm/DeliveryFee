const Container = require('../dto/container-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const {
  getAllService,
  getSingleService,
} = require('../../common/utils/services/get-service');
const tableName = 'containers';
const containerInsertService = async (body) => {
  const containerDTO = new Container(body);
  return await insertService(containerDTO, tableName);
};

const containerUpdateService = async (body, id) => {
  const containerDTO = new Container(body);
  return await updateService(containerDTO, tableName, id);
};
const containerGetAllService = async () => {
  return await getAllService(tableName);
};
const containerGetSingleService = async (id) => {
  return await getSingleService(id, tableName);
};
const containerDeleteService = async (id) => {
  return await deleteService(id, tableName);
};
module.exports = {
  containerInsertService,
  containerUpdateService,
  containerGetAllService,
  containerGetSingleService,
  containerDeleteService,
};
