/**
 *updateAddress.js
 */

const  addressEntity = require('../../entities/address');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Address. {status, message, data}
 */
const updateAddress = ({
  addressDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedAddress = addressEntity(dataToUpdate);
  updatedAddress = await addressDb.update(query,updatedAddress);
  if (!updatedAddress || updatedAddress.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAddress[0] });
};
module.exports = updateAddress;