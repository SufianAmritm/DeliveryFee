const Seller = require('../dto/seller-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const { getAllService, getSingleService } = require('../../common/utils/services/get-service');
const { zoneExistence } = require('../../common/utils/data-existence');

const tableName = 'sellers';
const sellerInsertService = async (body) => {
    const sellerDTO = new Seller(body);
    const { zone_id, city_id } = sellerDTO;
    if (!zone_id) {
        delete sellerDTO.zone_id;
    } else {
        await zoneExistence(city_id, zone_id);
    }

    return await insertService(sellerDTO, tableName);
};

const sellerUpdateService = async (body, id) => {
    const sellerDTO = new Seller(body);
    const { zone_id, city_id } = sellerDTO;
    if (zone_id) {
        await zoneExistence(city_id, zone_id);
    }

    return await updateService(sellerDTO, tableName, id);
};
const sellerGetAllService = async () => {
    return await getAllService(tableName);
};
const sellerGetSingleService = async (id) => {
    return await getSingleService(id, tableName);
};
const sellerDeleteService = async (id) => {
    const f = { seller_id: id };

    await deleteService(f, 'delivery_fees');

    return await deleteService(id, tableName);
};
module.exports = {
    sellerInsertService,
    sellerUpdateService,
    sellerGetAllService,
    sellerGetSingleService,
    sellerDeleteService
};
