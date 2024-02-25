/**
 *updateShipping.js
 */

const  shippingEntity = require('../../entities/shipping');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Shipping. {status, message, data}
 */
const updateShipping = ({
  shippingDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedShipping = shippingEntity(dataToUpdate);
  updatedShipping = await shippingDb.update(query,updatedShipping);
  if (!updatedShipping || updatedShipping.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedShipping[0] });
};
module.exports = updateShipping;