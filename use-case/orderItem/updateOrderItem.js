/**
 *updateOrderItem.js
 */

const  orderItemEntity = require('../../entities/orderItem');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated OrderItem. {status, message, data}
 */
const updateOrderItem = ({
  orderItemDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedOrderItem = orderItemEntity(dataToUpdate);
  updatedOrderItem = await orderItemDb.update(query,updatedOrderItem);
  if (!updatedOrderItem || updatedOrderItem.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedOrderItem[0] });
};
module.exports = updateOrderItem;