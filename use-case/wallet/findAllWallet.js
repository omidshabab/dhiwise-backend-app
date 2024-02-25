/**
 *findAllWallet.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Wallet(s). {status, message, data}
 */
const findAllWallet = ({
  walletDb,filterValidation 
}) => async (params,req,res) => {
  let {
    options, query, isCountOnly 
  } = params;
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  if (isCountOnly){
    let totalRecords = await walletDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundWallet = await walletDb.paginate(query,options);
    if (!foundWallet){
      return response.recordNotFound();
    }
    return response.success({ data:foundWallet });
  }
};
module.exports = findAllWallet;