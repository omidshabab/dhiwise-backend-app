/**
 *partialUpdatePincode.js
 */

const  pincodeEntity = require('../../entities/pincode');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Pincode. {status, message, data}
 */
const partialUpdatePincode = ({ pincodeDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedPincode = await pincodeDb.update(query,dataToUpdate);
  if (!updatedPincode || updatedPincode.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedPincode[0] });
};
module.exports = partialUpdatePincode;