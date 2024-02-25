
/**
 *bulkInsertOrder.js
 */

const  orderEntity = require('../../entities/order');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Orders. {status, message, data}
 */
const bulkInsertOrder = ({
  orderDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let orderEntities = dataToCreate.map(item => orderEntity(item));
  let createdOrder = await orderDb.createMany(orderEntities);
  return response.success({ data:{ count: createdOrder.length } });
};
module.exports = bulkInsertOrder;