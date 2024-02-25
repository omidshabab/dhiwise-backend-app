
/**
 *deleteWalletTransaction.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted WalletTransaction. {status, message, data}
 */
const deleteWalletTransaction = ({ walletTransactionDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedWalletTransaction = await walletTransactionDb.destroy(query);
  if (!deletedWalletTransaction || deletedWalletTransaction.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedWalletTransaction[0] });
};

module.exports = deleteWalletTransaction;
