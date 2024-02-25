
/**
 *deleteWallet.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Wallet. {status, message, data}
 */
const deleteWallet = ({
  walletDb,walletTransactionDb
}) => async (params,req,res) => {
  let {
    isWarning, query 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      walletDb,
      walletTransactionDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      walletDb,
      walletTransactionDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteWallet;
