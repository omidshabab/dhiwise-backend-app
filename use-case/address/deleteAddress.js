
/**
 *deleteAddress.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Address. {status, message, data}
 */
const deleteAddress = ({ addressDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedAddress = await addressDb.destroy(query);
  if (!deletedAddress || deletedAddress.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedAddress[0] });
};

module.exports = deleteAddress;
