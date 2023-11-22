class Zone {
    constructor(zone) {
        this.name = zone.name;

        this.is_ds = zone.is_ds;
        this.tiers = zone.tiers;
        this.city_id = zone.city_id;
    }
}

module.exports = Zone;
