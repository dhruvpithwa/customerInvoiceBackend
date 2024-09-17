const Joi = require('joi');
const Enums = require('../enums');
const priceType = require('../enums/priceType');

module.exports = {
    validateAddProductObj: (productObj) => {
        const schema = Joi.object().keys({
            name: Joi.string().trim().required(),
            pricePerKg: Joi.number().greater(0).required(),
            type: Joi.string().trim().valid(Object.values(Enums.product)).required(),
            priceType: Joi.string().trim().valid(Object.values(Enums.priceType)).required()
        });
        return Joi.validate(productObj, schema);
    },
    validateUpdateProductObj: (productObj) => {
        const schema = Joi.object().keys({
            id: Joi.string().guid().trim().required(),
            name: Joi.string().trim().optional(),
            pricePerKg: Joi.number().greater(0).optional(),
            type: Joi.string().trim().valid(Object.values(Enums.product)).optional(),
            priceType: Joi.string().trim().valid(Object.values(Enums.priceType)).optional()
        });
        return Joi.validate(productObj, schema);
    },
    validateListProductsObj: (productObj) => {
        const schema = Joi.object().keys({
            q: Joi.string().trim().allow("").optional(),
            limit: Joi.number().optional(),
            offset: Joi.number().optional()
        });
        return Joi.validate(productObj, schema);
    },
};
