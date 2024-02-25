
/**
 *deleteOrderItem.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted OrderItem. {status, message, data}
 */
const deleteOrderItem = ({ orderItemDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedOrderItem = await orderItemDb.destroy(query);
  if (!deletedOrderItem || deletedOrderItem.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedOrderItem[0] });
};

module.exports = deleteOrderItem;
