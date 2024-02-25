const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  pincodeId: joi.number().integer().allow(0),
  address1: joi.string().allow(null).allow(''),
  address2: joi.string().allow(null).allow(''),
  landmark: joi.string().allow(null).allow(''),
  cityId: joi.number().integer().allow(0),
  isDefault: joi.boolean(),
  stateId: joi.number().integer().allow(0),
  addressType: joi.string().allow(null).allow(''),
  fullName: joi.string().allow(null).allow(''),
  addressNo: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  mobile: joi.number().integer().allow(0),
  shippingId: joi.number().integer().allow(0),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  pincodeId: joi.number().integer().allow(0),
  address1: joi.string().allow(null).allow(''),
  address2: joi.string().allow(null).allow(''),
  landmark: joi.string().allow(null).allow(''),
  cityId: joi.number().integer().allow(0),
  isDefault: joi.boolean(),
  stateId: joi.number().integer().allow(0),
  addressType: joi.string().allow(null).allow(''),
  fullName: joi.string().allow(null).allow(''),
  addressNo: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  mobile: joi.number().integer().allow(0),
  shippingId: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    pincodeId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    address1: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    address2: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    landmark: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    cityId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isDefault: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    stateId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    addressType: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    fullName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    addressNo: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    mobile: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    shippingId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
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