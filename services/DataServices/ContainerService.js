const Container = require('../../dto/ContainerDTO');
const insertService = require('../TableServices/InsertService');
const updateService = require('../TableServices/UpdateService');
const {
  getAllService,
  getSingleService,
} = require('../TableServices/GetService');
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
