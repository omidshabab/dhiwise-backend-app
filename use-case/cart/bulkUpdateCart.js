/**
 *bulkUpdateCart.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of cart with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateCart = ({ cartDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCart = (await cartDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedCart } });
};
module.exports = bulkUpdateCart;