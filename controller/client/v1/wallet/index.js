const walletDb = require('../../../../data-access/walletDb');
const walletTransactionDb = require('../../../../data-access/walletTransactionDb');
const walletSchema = require('../../../../validation/schema/wallet');
const createValidation = require('../../../../validation')(walletSchema.createSchema);
const updateValidation = require('../../../../validation')(walletSchema.updateSchema);
const filterValidation = require('../../../../validation')(walletSchema.filterValidationSchema);
const walletController = require('./wallet');

// use-cases imports with dependency injection
const addWalletUsecase = require('../../../../use-case/wallet/addWallet')({
  walletDb,
  createValidation 
});
const findAllWalletUsecase = require('../../../../use-case/wallet/findAllWallet')({
  walletDb,
  filterValidation
});
const getWalletCountUsecase = require('../../../../use-case/wallet/getWalletCount')({
  walletDb,
  filterValidation
});
const getWalletUsecase = require('../../../../use-case/wallet/getWallet')({
  walletDb,
  filterValidation
});
const updateWalletUsecase = require('../../../../use-case/wallet/updateWallet')({
  walletDb,
  updateValidation 
});
const partialUpdateWalletUsecase = require('../../../../use-case/wallet/partialUpdateWallet')({
  walletDb,
  updateValidation
});
const softDeleteWalletUsecase = require('../../../../use-case/wallet/softDeleteWallet')({
  walletDb,
  walletTransactionDb
});
const softDeleteManyWalletUsecase = require('../../../../use-case/wallet/softDeleteManyWallet')({
  walletDb,
  walletTransactionDb
});
const bulkInsertWalletUsecase = require('../../../../use-case/wallet/bulkInsertWallet')({ walletDb });
const bulkUpdateWalletUsecase = require('../../../../use-case/wallet/bulkUpdateWallet')({ walletDb });
const deleteWalletUsecase = require('../../../../use-case/wallet/deleteWallet')({
  walletDb,
  walletTransactionDb
});
const deleteManyWalletUsecase = require('../../../../use-case/wallet/deleteManyWallet')({
  walletDb,
  walletTransactionDb
});

// controller methods mapping
const addWallet = walletController.addWallet(addWalletUsecase);
const findAllWallet = walletController.findAllWallet(findAllWalletUsecase);
const getWalletCount = walletController.getWalletCount(getWalletCountUsecase);
const getWalletById = walletController.getWallet(getWalletUsecase);
const updateWallet = walletController.updateWallet(updateWalletUsecase);
const partialUpdateWallet = walletController.partialUpdateWallet(partialUpdateWalletUsecase);
const softDeleteWallet = walletController.softDeleteWallet(softDeleteWalletUsecase);
const softDeleteManyWallet = walletController.softDeleteManyWallet(softDeleteManyWalletUsecase);
const bulkInsertWallet = walletController.bulkInsertWallet(bulkInsertWalletUsecase);
const bulkUpdateWallet = walletController.bulkUpdateWallet(bulkUpdateWalletUsecase);
const deleteWallet = walletController.deleteWallet(deleteWalletUsecase);
const deleteManyWallet = walletController.deleteManyWallet(deleteManyWalletUsecase);

module.exports = {
  addWallet,
  findAllWallet,
  getWalletCount,
  getWalletById,
  updateWallet,
  partialUpdateWallet,
  softDeleteWallet,
  softDeleteManyWallet,
  bulkInsertWallet,
  bulkUpdateWallet,
  deleteWallet,
  deleteManyWallet,
};