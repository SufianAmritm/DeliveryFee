class Seller {
    constructor(seller) {
        this.name = seller.name;

        this.tiers = seller.tiers;
        this.city_id = seller.city_id;
        this.zone_id = seller.zone_id;
    }
}

module.exports = Seller;
