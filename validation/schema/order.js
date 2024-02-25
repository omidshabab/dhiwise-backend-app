const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  customerId: joi.number().integer().allow(0),
  sellerId: joi.number().integer().allow(0),
  totalAmount: joi.number().allow(0),
  status: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  customerId: joi.number().integer().allow(0),
  sellerId: joi.number().integer().allow(0),
  totalAmount: joi.number().allow(0),
  status: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    customerId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    sellerId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    totalAmount: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
    status: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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