
/**
 *bulkInsertShipping.js
 */

const  shippingEntity = require('../../entities/shipping');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Shippings. {status, message, data}
 */
const bulkInsertShipping = ({
  shippingDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let shippingEntities = dataToCreate.map(item => shippingEntity(item));
  let createdShipping = await shippingDb.createMany(shippingEntities);
  return response.success({ data:{ count: createdShipping.length } });
};
module.exports = bulkInsertShipping;