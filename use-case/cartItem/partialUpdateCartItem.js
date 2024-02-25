/**
 *partialUpdateCartItem.js
 */

const  cartItemEntity = require('../../entities/cartItem');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated CartItem. {status, message, data}
 */
const partialUpdateCartItem = ({ cartItemDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCartItem = await cartItemDb.update(query,dataToUpdate);
  if (!updatedCartItem || updatedCartItem.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCartItem[0] });
};
module.exports = partialUpdateCartItem;