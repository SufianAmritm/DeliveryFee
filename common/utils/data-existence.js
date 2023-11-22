const { getAllService } = require('./services/get-service');

const zoneExistence = async (cityId, zoneId) => {
    const zoneInCity = await getAllService('zones', cityId, zoneId);
    if (!zoneInCity) {
        throw new Error('Zone not found in provided city');
    }
};
const sellerExistence = async (cityId, sellerId) => {
    const sellerInCity = await getAllService('sellers', cityId, sellerId);
    if (!sellerInCity) {
        throw new Error('Seller not found in provided city');
    }
};
const existenceCheck = async (deliveryFeeDTO) => {
    const { seller_id, zone_id, city_id } = deliveryFeeDTO;
    if (seller_id && zone_id) {
        await zoneExistence(city_id, zone_id);
        await sellerExistence(city_id, seller_id);
    }
    if (seller_id && !zone_id) {
        await sellerExistence(city_id, seller_id);
    }
    if (!seller_id && zone_id) {
        await zoneExistence(city_id, zone_id);
    }
};

module.exports = { sellerExistence, zoneExistence, existenceCheck };
