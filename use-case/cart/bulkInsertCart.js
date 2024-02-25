
/**
 *bulkInsertCart.js
 */

const  cartEntity = require('../../entities/cart');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Carts. {status, message, data}
 */
const bulkInsertCart = ({
  cartDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let cartEntities = dataToCreate.map(item => cartEntity(item));
  let createdCart = await cartDb.createMany(cartEntities);
  return response.success({ data:{ count: createdCart.length } });
};
module.exports = bulkInsertCart;