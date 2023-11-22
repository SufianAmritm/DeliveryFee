class DeliveryFee {
    constructor(deliveryFee) {
        this.delivery_fee = deliveryFee.delivery_fee;
        this.max_order = deliveryFee.max_order;
        this.min_order = deliveryFee.min_order;
        this.exemption = deliveryFee.exemption;
        this.days = deliveryFee.days || undefined;
        this.start_time = deliveryFee.start_time || undefined;
        this.end_time = deliveryFee.end_time || undefined;

        this.city_id = deliveryFee.city_id;
        this.seller_id = deliveryFee.seller_id || undefined;
        this.zone_id = deliveryFee.zone_id || undefined;
    }
}

module.exports = DeliveryFee;
