
/**
 *addCartItem.js
 */

const  cartItemEntity = require('../../entities/cartItem');
const response = require('../../utils/response');

/**
 * @description : create new record of cartItem in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCartItem = ({
  cartItemDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdCartItem  = cartItemEntity(dataToCreate);
  createdCartItem = await cartItemDb.createOne(createdCartItem );
  return response.success({ data:createdCartItem });
};
module.exports = addCartItem;