
/**
 *addWalletTransaction.js
 */

const  walletTransactionEntity = require('../../entities/walletTransaction');
const response = require('../../utils/response');

/**
 * @description : create new record of walletTransaction in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addWalletTransaction = ({
  walletTransactionDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdWalletTransaction  = walletTransactionEntity(dataToCreate);
  createdWalletTransaction = await walletTransactionDb.createOne(createdWalletTransaction );
  return response.success({ data:createdWalletTransaction });
};
module.exports = addWalletTransaction;