/**
 *updatePincode.js
 */

const  pincodeEntity = require('../../entities/pincode');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Pincode. {status, message, data}
 */
const updatePincode = ({
  pincodeDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedPincode = pincodeEntity(dataToUpdate);
  updatedPincode = await pincodeDb.update(query,updatedPincode);
  if (!updatedPincode || updatedPincode.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPincode[0] });
};
module.exports = updatePincode;