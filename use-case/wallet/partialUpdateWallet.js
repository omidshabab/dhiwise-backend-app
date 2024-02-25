/**
 *partialUpdateWallet.js
 */

const  walletEntity = require('../../entities/wallet');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Wallet. {status, message, data}
 */
const partialUpdateWallet = ({ walletDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedWallet = await walletDb.update(query,dataToUpdate);
  if (!updatedWallet || updatedWallet.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedWallet[0] });
};
module.exports = partialUpdateWallet;