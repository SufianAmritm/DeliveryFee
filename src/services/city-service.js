const City = require('../dto/city-dto');
const { getAllService, getSingleService } = require('../../common/utils/services/get-service');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const validation = require('../validator/ValidationHandlers/city-validation-handler');
const customError = require('../../common/errors');
const tableName = 'cities';

const cityInsertService = async (body) => {
    const cityDTO = new City(body);
    let error = [];
    const values = await validation(cityDTO);
    if (values.error) {
        values.error.details.map((err) => {
            error.push(err.message);
        });

        throw new customError.BadRequestError(error);
    }
    return await insertService(cityDTO, tableName);
};

const cityUpdateService = async (body, id) => {
    const cityDTO = new City(body);

    return await updateService(cityDTO, tableName, id);
};
const cityGetAllService = async () => {
    return await getAllService(tableName);
};
const cityGetSingleService = async (id) => {
    return await getSingleService(id, tableName);
};

const cityDeleteService = async (id) => {
    const f = { city_id: id };
    await deleteService(f, 'sellers');
    await deleteService(f, 'zones');
    await deleteService(f, 'delivery_fees');

    return await deleteService(id, tableName);
};
module.exports = {
    cityInsertService,
    cityUpdateService,
    cityGetAllService,
    cityGetSingleService,
    cityDeleteService
};
