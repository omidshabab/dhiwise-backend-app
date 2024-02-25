
/**
 *bulkInsertPincode.js
 */

const  pincodeEntity = require('../../entities/pincode');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Pincodes. {status, message, data}
 */
const bulkInsertPincode = ({
  pincodeDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let pincodeEntities = dataToCreate.map(item => pincodeEntity(item));
  let createdPincode = await pincodeDb.createMany(pincodeEntities);
  return response.success({ data:{ count: createdPincode.length } });
};
module.exports = bulkInsertPincode;