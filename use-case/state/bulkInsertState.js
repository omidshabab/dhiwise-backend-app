
/**
 *bulkInsertState.js
 */

const  stateEntity = require('../../entities/state');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created States. {status, message, data}
 */
const bulkInsertState = ({
  stateDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let stateEntities = dataToCreate.map(item => stateEntity(item));
  let createdState = await stateDb.createMany(stateEntities);
  return response.success({ data:{ count: createdState.length } });
};
module.exports = bulkInsertState;