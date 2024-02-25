
/**
 *bulkInsertAddress.js
 */

const  addressEntity = require('../../entities/address');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Addresss. {status, message, data}
 */
const bulkInsertAddress = ({
  addressDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let addressEntities = dataToCreate.map(item => addressEntity(item));
  let createdAddress = await addressDb.createMany(addressEntities);
  return response.success({ data:{ count: createdAddress.length } });
};
module.exports = bulkInsertAddress;