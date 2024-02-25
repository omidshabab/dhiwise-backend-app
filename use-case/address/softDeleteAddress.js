/**
 *softDeleteAddress.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Address. {status, message, data}
 */
const softDeleteAddress = ({ addressDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedAddress = await addressDb.update(query, dataToUpdate);
  if (!updatedAddress || updatedAddress.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAddress[0] });
};
module.exports = softDeleteAddress;
