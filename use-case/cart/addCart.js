
/**
 *addCart.js
 */

const  cartEntity = require('../../entities/cart');
const response = require('../../utils/response');

/**
 * @description : create new record of cart in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCart = ({
  cartDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdCart  = cartEntity(dataToCreate);
  createdCart = await cartDb.createOne(createdCart );
  return response.success({ data:createdCart });
};
module.exports = addCart;