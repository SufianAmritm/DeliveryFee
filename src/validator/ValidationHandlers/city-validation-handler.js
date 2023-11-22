const Joi = require('joi');
const customError = require('../../../common/errors');
const validationMessage = require('../../../common/constants/validation-constants');
const validation = async (data) => {
    const { name } = data;
    const obj = {};
    if (name !== undefined) {
        obj.name = Joi.string()
            .required()
            .trim()

            .error((errors) => {
                console.log(errors);
                errors.forEach((err) => {
                    switch (err.code) {
                        case 'string.required':
                            err.message = validationMessage.isArray('name');
                            break;
                    }
                });

                return errors;
            });
    } else {
        throw new customError.BadRequestError(validationMessage.isEmpty('name'));
    }

    const schema = Joi.object(obj);
    return schema.validate(data, { abortEarly: false });
};
module.exports = validation;
