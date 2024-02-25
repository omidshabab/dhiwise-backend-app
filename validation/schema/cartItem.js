const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  productId: joi.number().integer().allow(0),
  quantity: joi.number().integer().allow(0),
  price: joi.number().allow(0),
  amount: joi.number().allow(0),
  cartId: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  productId: joi.number().integer().allow(0),
  quantity: joi.number().integer().allow(0),
  price: joi.number().allow(0),
  amount: joi.number().allow(0),
  cartId: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    productId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    quantity: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    price: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
    amount: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
    cartId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    id: joi.any()
  }).unknown(true),])),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};