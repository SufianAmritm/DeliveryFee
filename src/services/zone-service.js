const Zone = require('../dto/zone-dto');
const insertService = require('../../common/utils/services/insert-service');
const updateService = require('../../common/utils/services/update-service');
const deleteService = require('../../common/utils/services/delete-service');
const { getAllService, getSingleService } = require('../../common/utils/services/get-service');
const tableName = 'zones';
const zoneInsertService = async (body) => {
    const zoneDTO = new Zone(body);

    return await insertService(zoneDTO, tableName);
};

const zoneUpdateService = async (body, id) => {
    const zoneDTO = new Zone(body);

    return await updateService(zoneDTO, tableName, id);
};
const zoneGetAllService = async () => {
    return await getAllService(tableName);
};
const zoneGetSingleService = async (id) => {
    return await getSingleService(id, tableName);
};
const zoneDeleteService = async (id) => {
    const f = { zone_id: id };
    await deleteService(f, 'sellers');
    await deleteService(f, 'delivery_fees');

    return await deleteService(id, tableName);
};
module.exports = {
    zoneInsertService,
    zoneUpdateService,
    zoneGetAllService,
    zoneGetSingleService,
    zoneDeleteService
};
