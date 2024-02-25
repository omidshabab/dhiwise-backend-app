/**
 *softDeleteCartItem.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated CartItem. {status, message, data}
 */
const softDeleteCartItem = ({ cartItemDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedCartItem = await cartItemDb.update(query, dataToUpdate);
  if (!updatedCartItem || updatedCartItem.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCartItem[0] });
};
module.exports = softDeleteCartItem;
