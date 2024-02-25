const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/client/v1/walletTransaction');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/wallettransaction/create').post(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/client/api/v1/wallettransaction/list').post(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.findAllWalletTransaction);

router.route('/client/api/v1/wallettransaction/count').post(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/client/api/v1/wallettransaction/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.getWalletTransactionById);

router.route('/client/api/v1/wallettransaction/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.updateWalletTransaction);   
router.route('/client/api/v1/wallettransaction/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);   

router.route('/client/api/v1/wallettransaction/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/client/api/v1/wallettransaction/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/client/api/v1/wallettransaction/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);

router.route('/client/api/v1/wallettransaction/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction); 
router.route('/client/api/v1/wallettransaction/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.deleteWalletTransaction);
router.route('/client/api/v1/wallettransaction/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);

module.exports = router;
