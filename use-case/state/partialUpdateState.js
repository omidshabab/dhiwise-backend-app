/**
 *partialUpdateState.js
 */

const  stateEntity = require('../../entities/state');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated State. {status, message, data}
 */
const partialUpdateState = ({ stateDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedState = await stateDb.update(query,dataToUpdate);
  if (!updatedState || updatedState.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedState[0] });
};
module.exports = partialUpdateState;