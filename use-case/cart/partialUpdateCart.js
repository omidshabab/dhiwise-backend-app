/**
 *partialUpdateCart.js
 */

const  cartEntity = require('../../entities/cart');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Cart. {status, message, data}
 */
const partialUpdateCart = ({ cartDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCart = await cartDb.update(query,dataToUpdate);
  if (!updatedCart || updatedCart.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCart[0] });
};
module.exports = partialUpdateCart;