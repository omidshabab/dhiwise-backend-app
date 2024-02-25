/**
 *getState.js
 */
 
const response = require('../../utils/response');

/**
 * @description : find record from database by id;
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found State. {status, message, data}
 */
const getState = ({
  stateDb, filterValidation 
}) => async (params,req,res) => {
  let {
    query, options  
  } = params;
  const validateRequest = await filterValidation(options);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let foundState = await stateDb.findOne(query, options);
  if (!foundState){
    return response.recordNotFound();
  }
  return response.success({ data:foundState });
};
module.exports = getState;