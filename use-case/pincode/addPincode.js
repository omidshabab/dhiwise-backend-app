
/**
 *addPincode.js
 */

const  pincodeEntity = require('../../entities/pincode');
const response = require('../../utils/response');

/**
 * @description : create new record of pincode in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addPincode = ({
  pincodeDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdPincode  = pincodeEntity(dataToCreate);
  createdPincode = await pincodeDb.createOne(createdPincode );
  return response.success({ data:createdPincode });
};
module.exports = addPincode;