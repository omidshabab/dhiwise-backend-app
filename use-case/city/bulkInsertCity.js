
/**
 *bulkInsertCity.js
 */

const  cityEntity = require('../../entities/city');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Citys. {status, message, data}
 */
const bulkInsertCity = ({
  cityDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let cityEntities = dataToCreate.map(item => cityEntity(item));
  let createdCity = await cityDb.createMany(cityEntities);
  return response.success({ data:{ count: createdCity.length } });
};
module.exports = bulkInsertCity;