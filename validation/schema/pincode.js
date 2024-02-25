const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  pincode: joi.string().allow(null).allow(''),
  cityId: joi.number().integer().allow(0),
  stateId: joi.number().integer().allow(0),
  countryId: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  pincode: joi.string().allow(null).allow(''),
  cityId: joi.number().integer().allow(0),
  stateId: joi.number().integer().allow(0),
  countryId: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    pincode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    cityId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    stateId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    countryId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
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