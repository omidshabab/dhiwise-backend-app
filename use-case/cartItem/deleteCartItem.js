
/**
 *deleteCartItem.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted CartItem. {status, message, data}
 */
const deleteCartItem = ({ cartItemDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedCartItem = await cartItemDb.destroy(query);
  if (!deletedCartItem || deletedCartItem.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedCartItem[0] });
};

module.exports = deleteCartItem;
