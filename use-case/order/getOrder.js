/**
 *getOrder.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Order. {status, message, data}
 */
const getOrder = ({
  orderDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundOrder = await orderDb.findOne(query, options);
  if (!foundOrder){
    return response.recordNotFound();
  }
  return response.success({ data:foundOrder });
};
module.exports = getOrder;