
/**
 *addOrder.js
 */

const  orderEntity = require('../../entities/order');
const response = require('../../utils/response');

/**
 * @description : create new record of order in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addOrder = ({
  orderDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdOrder  = orderEntity(dataToCreate);
  createdOrder = await orderDb.createOne(createdOrder );
  return response.success({ data:createdOrder });
};
module.exports = addOrder;