/**
 *partialUpdateOrder.js
 */

const  orderEntity = require('../../entities/order');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Order. {status, message, data}
 */
const partialUpdateOrder = ({ orderDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedOrder = await orderDb.update(query,dataToUpdate);
  if (!updatedOrder || updatedOrder.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedOrder[0] });
};
module.exports = partialUpdateOrder;