const Product = require('../../dto/ProductDTO');
const {
  getAllService,
  getSingleService,
} = require('../TableServices/GetService');
const insertService = require('../TableServices/InsertService');
const updateService = require('../TableServices/UpdateService');
const deleteService = require('../TableServices/DeleteService');
const tableName = 'product_skus';
const productInsertService = async (body) => {
  const productDTO = new Product(body);
  return await insertService(productDTO, tableName);
};

const productUpdateService = async (body, id) => {
  const productDTO = new Product(body);
  return await updateService(productDTO, tableName, id);
};
const productGetAllService = async () => {
  return await getAllService(tableName);
};
const productGetSingleService = async (id) => {
  return await getSingleService(id, tableName);
};
const productDeleteService = async (id) => {
  return await deleteService(id, tableName);
};
module.exports = {
  productInsertService,
  productUpdateService,
  productGetAllService,
  productGetSingleService,
  productDeleteService,
};
