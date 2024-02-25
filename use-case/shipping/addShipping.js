
/**
 *addShipping.js
 */

const  shippingEntity = require('../../entities/shipping');
const response = require('../../utils/response');

/**
 * @description : create new record of shipping in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addShipping = ({
  shippingDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdShipping  = shippingEntity(dataToCreate);
  createdShipping = await shippingDb.createOne(createdShipping );
  return response.success({ data:createdShipping });
};
module.exports = addShipping;