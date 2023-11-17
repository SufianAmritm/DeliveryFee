const Product = require('../dto/product-dto');
const {
  getAllService,
  getSingleService,
} = require('../../common/utils/services/get-service');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');

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
