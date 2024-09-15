const Joi = require('joi');

module.exports = {
    validateCreateOrderObj: (orderObj) => {
        
        const orderItems = Joi.object().keys({
            productId: Joi.string().guid().required(),
            quantity: Joi.number().greater(0).required(),
            price: Joi.number().greater(0).required()
        });
        
        const schema = Joi.object().keys({
            orderNumber: Joi.string().trim().required(),
            orderDate: Joi.string().trim().required(),
            customerName: Joi.string().trim().optional(),
            customerMobile: Joi.string().trim().optional(),
            subTotal: Joi.number().greater(0).required(),
            total: Joi.number().greater(0).required(),
            tax: Joi.number().greater(0).required(),
            taxPercent: Joi.number().greater(0).required(),
            orderItems: Joi.array().items(orderItems).required()
        });
        return Joi.validate(orderObj, schema);
    },
    
    validateListOrdersObj: (orderObj) => {
        const schema = Joi.object().keys({
            q: Joi.string().trim().allow("").optional(),
            limit: Joi.number().optional(),
            offset: Joi.number().optional()
        });
        return Joi.validate(orderObj, schema);
    },
};
