/**
 *partialUpdateAddress.js
 */

const  addressEntity = require('../../entities/address');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Address. {status, message, data}
 */
const partialUpdateAddress = ({ addressDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedAddress = await addressDb.update(query,dataToUpdate);
  if (!updatedAddress || updatedAddress.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedAddress[0] });
};
module.exports = partialUpdateAddress;