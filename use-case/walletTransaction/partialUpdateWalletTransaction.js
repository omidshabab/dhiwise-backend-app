/**
 *partialUpdateWalletTransaction.js
 */

const  walletTransactionEntity = require('../../entities/walletTransaction');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated WalletTransaction. {status, message, data}
 */
const partialUpdateWalletTransaction = ({ walletTransactionDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedWalletTransaction = await walletTransactionDb.update(query,dataToUpdate);
  if (!updatedWalletTransaction || updatedWalletTransaction.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedWalletTransaction[0] });
};
module.exports = partialUpdateWalletTransaction;