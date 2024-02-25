
/**
 *addAddress.js
 */

const  addressEntity = require('../../entities/address');
const response = require('../../utils/response');

/**
 * @description : create new record of address in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addAddress = ({
  addressDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdAddress  = addressEntity(dataToCreate);
  createdAddress = await addressDb.createOne(createdAddress );
  return response.success({ data:createdAddress });
};
module.exports = addAddress;