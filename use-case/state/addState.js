
/**
 *addState.js
 */

const  stateEntity = require('../../entities/state');
const response = require('../../utils/response');

/**
 * @description : create new record of state in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addState = ({
  stateDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdState  = stateEntity(dataToCreate);
  createdState = await stateDb.createOne(createdState );
  return response.success({ data:createdState });
};
module.exports = addState;