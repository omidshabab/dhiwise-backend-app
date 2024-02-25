/**
 *findAllOrderItem.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found OrderItem(s). {status, message, data}
 */
const findAllOrderItem = ({
  orderItemDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let totalRecords = await orderItemDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundOrderItem = await orderItemDb.paginate(query,options);
    if (!foundOrderItem){
      return response.recordNotFound();
    }
    return response.success({ data:foundOrderItem });
  }
};
module.exports = findAllOrderItem;