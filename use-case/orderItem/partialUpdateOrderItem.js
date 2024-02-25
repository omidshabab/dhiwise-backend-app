/**
 *partialUpdateOrderItem.js
 */

const  orderItemEntity = require('../../entities/orderItem');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated OrderItem. {status, message, data}
 */
const partialUpdateOrderItem = ({ orderItemDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedOrderItem = await orderItemDb.update(query,dataToUpdate);
  if (!updatedOrderItem || updatedOrderItem.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedOrderItem[0] });
};
module.exports = partialUpdateOrderItem;