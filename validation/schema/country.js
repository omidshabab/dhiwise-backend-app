const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  countryName: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  phoneCode: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  countryName: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  phoneCode: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    countryName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    phoneCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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