const Joi = require('joi');
const validation = async (data) => {
    const values = (item) => {
        return Object.values(data[item]);
    };

    const obj = {};

    const {
        delivery_fee,

        start_time,
        end_time,
        exemption,
        days,
        seller_id,
        city_id,
        zone_id
    } = data;
    if (delivery_fee) {
        obj.delivery_fee = Joi.object()
            .keys({
                0: Joi.number().required(),
                1: Joi.number(),
                2: Joi.number(),
                3: Joi.number()
            })
            .min(1)
            .max(4)
            .required();
        obj.max_order = Joi.object()
            .keys({
                0: Joi.number().required(),
                1: Joi.number(),
                2: Joi.number(),
                3: Joi.number()
            })
            .min(1)
            .max(4)
            .required()
            .custom((value, helper) => {
                const keysLength = Object.keys(value).length;

                if (
                    keysLength < values('delivery_fee').length ||
                    keysLength > values('delivery_fee').length
                ) {
                    return helper.message('Must be equal');
                }
            });
        obj.min_order = Joi.object()
            .keys({
                0: Joi.number().required(),
                1: Joi.number(),
                2: Joi.number(),
                3: Joi.number()
            })
            .min(1)
            .max(4)
            .required()
            .custom((value, helper) => {
                const keysLength = Object.keys(value).length;
                if (
                    keysLength < values('delivery_fee').length ||
                    keysLength > values('delivery_fee').length
                ) {
                    return helper.message('Must be equal');
                }
            });
    } else {
        obj.delivery_fee = Joi.object().forbidden();
        obj.max_order = Joi.object().forbidden();
        obj.min_order = Joi.object().forbidden();
    }

    if (exemption) {
        obj.exemption = Joi.boolean();

        obj.days = Joi.object();

        obj.start_time = Joi.object()
            .keys({
                0: Joi.string(),
                1: Joi.string(),
                2: Joi.string(),
                3: Joi.string()
            })
            .min(1)
            .max(4)
            .required()
            .custom((value, helper) => {
                const keysLength = Object.keys(value).length;
                if (keysLength < values('days').length || keysLength > values('days').length) {
                    return helper.message('Must be equal');
                }
            });

        obj.end_time = Joi.object()
            .keys({
                0: Joi.string(),
                1: Joi.string(),
                2: Joi.string(),
                3: Joi.string()
            })
            .min(1)
            .max(4)
            .required()
            .custom((value, helper) => {
                const keysLength = Object.keys(value).length;
                if (keysLength < values('days').length || keysLength > values('days').length) {
                    return helper.message('Must be equal');
                }
            });
    } else {
        obj.days = Joi.object().forbidden();
        obj.start_time = Joi.object().forbidden();
        obj.end_time = Joi.object().forbidden();
        obj.exemption = Joi.bool();
    }

    const schema = Joi.object({
        delivery_fee: obj.delivery_fee,
        max_order: obj.max_order,
        min_order: obj.min_order,
        exemption: obj.exemption,
        days: obj.days,
        start_time: obj.start_time,
        end_time: obj.end_time,

        city_id: Joi.number(),
        seller_id: Joi.number(),
        zone_id: Joi.number()
    });
    return schema.validate(data);
};
module.exports = validation;
