
/**
 *bulkInsertCountry.js
 */

const  countryEntity = require('../../entities/country');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Countrys. {status, message, data}
 */
const bulkInsertCountry = ({
  countryDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let countryEntities = dataToCreate.map(item => countryEntity(item));
  let createdCountry = await countryDb.createMany(countryEntities);
  return response.success({ data:{ count: createdCountry.length } });
};
module.exports = bulkInsertCountry;