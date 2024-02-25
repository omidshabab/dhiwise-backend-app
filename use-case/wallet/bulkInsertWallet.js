
/**
 *bulkInsertWallet.js
 */

const  walletEntity = require('../../entities/wallet');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Wallets. {status, message, data}
 */
const bulkInsertWallet = ({
  walletDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let walletEntities = dataToCreate.map(item => walletEntity(item));
  let createdWallet = await walletDb.createMany(walletEntities);
  return response.success({ data:{ count: createdWallet.length } });
};
module.exports = bulkInsertWallet;