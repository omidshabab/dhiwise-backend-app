const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');  
const shippingDefault = require('../../constants/shipping');

const createSchema = joi.object({
  orderId: joi.number().integer().allow(0),
  courierCompany: joi.string().allow(null).allow(''),
  deliveryStartDate: joi.date().options({ convert: true }).allow(null).allow(''),
  estimatedDeliveryDate: joi.date().options({ convert: true }).allow(null).allow(''),
  actualDeliveryDate: joi.date().options({ convert: true }).allow(null).allow(''),
  isPrepaid: joi.boolean(),
  isReturned: joi.boolean(),
  returningReason: joi.string().allow(null).allow(''),
  returnPickupDate: joi.date().options({ convert: true }).allow(null).allow(''),
  isReturnDamaged: joi.boolean(),
  returnRecievedDate: joi.date().options({ convert: true }).allow(null).allow(''),
  shippingStatus: joi.valid(...convertObjectToEnum(shippingDefault.STATUS)),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  orderId: joi.number().integer().allow(0),
  courierCompany: joi.string().allow(null).allow(''),
  deliveryStartDate: joi.date().options({ convert: true }).allow(null).allow(''),
  estimatedDeliveryDate: joi.date().options({ convert: true }).allow(null).allow(''),
  actualDeliveryDate: joi.date().options({ convert: true }).allow(null).allow(''),
  isPrepaid: joi.boolean(),
  isReturned: joi.boolean(),
  returningReason: joi.string().allow(null).allow(''),
  returnPickupDate: joi.date().options({ convert: true }).allow(null).allow(''),
  isReturnDamaged: joi.boolean(),
  returnRecievedDate: joi.date().options({ convert: true }).allow(null).allow(''),
  shippingStatus: joi.valid(...convertObjectToEnum(shippingDefault.STATUS)),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    orderId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    courierCompany: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    deliveryStartDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    estimatedDeliveryDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    actualDeliveryDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    isPrepaid: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    isReturned: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    returningReason: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    returnPickupDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
    isReturnDamaged: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    returnRecievedDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
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