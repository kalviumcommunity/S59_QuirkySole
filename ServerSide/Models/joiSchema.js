const Joi = require('joi');

const schema = Joi.object({
    userName: Joi.string().required(),
    age: Joi.number().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required(),
    productName: Joi.string()
});

module.exports = schema;
