const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  walletId: joi.number().integer().allow(0),
  userId: joi.number().integer().allow(0),
  forOrder: joi.boolean(),
  forWallet: joi.boolean(),
  transactionAmount: joi.number().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  walletId: joi.number().integer().allow(0),
  userId: joi.number().integer().allow(0),
  forOrder: joi.boolean(),
  forWallet: joi.boolean(),
  transactionAmount: joi.number().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    walletId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    userId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    forOrder: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    forWallet: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    transactionAmount: joi.alternatives().try(joi.array().items(),joi.number(),joi.object()),
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