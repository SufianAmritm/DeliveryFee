const DeliveryFee = require('../dto/delivery-fee-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const { existenceCheck } = require('../../common/utils/data-existence');
const { getAllService, getSingleService } = require('../../common/utils/services/get-service');
const validateData = require('../validator/ValidationHandlers/delivery-fee-validation-handler');

const tableName = 'delivery_fees';
const deliveryFeeInsertService = async (req) => {
    const deliveryFeeDTO = new DeliveryFee(req.body);
    const value = await validateData(req.body);
    if (value.error) {
        throw new Error(value.error.details[0].message);
    }

    await existenceCheck(deliveryFeeDTO);

    return await insertService(deliveryFeeDTO, tableName);
};

const deliveryFeeUpdateService = async (body, id) => {
    const deliveryFeeDTO = new DeliveryFee(body);
    await existenceCheck(deliveryFeeDTO);

    return await updateService(deliveryFeeDTO, tableName, id);
};
const deliveryFeeGetAllService = async () => {
    return await getAllService(tableName);
};
const deliveryFeeGetSingleService = async (id) => {
    return await getSingleService(id, tableName);
};
const deliveryFeeDeleteService = async (id) => {
    return await deleteService(id, tableName);
};
module.exports = {
    deliveryFeeInsertService,
    deliveryFeeUpdateService,
    deliveryFeeGetAllService,
    deliveryFeeGetSingleService,
    deliveryFeeDeleteService
};
