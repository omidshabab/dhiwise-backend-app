const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/device/v1/walletTransaction');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/wallettransaction/create').post(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/device/api/v1/wallettransaction/list').post(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.findAllWalletTransaction);

router.route('/device/api/v1/wallettransaction/count').post(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/device/api/v1/wallettransaction/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.getWalletTransactionById);

router.route('/device/api/v1/wallettransaction/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.updateWalletTransaction);   
router.route('/device/api/v1/wallettransaction/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);   

router.route('/device/api/v1/wallettransaction/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/device/api/v1/wallettransaction/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/device/api/v1/wallettransaction/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);

router.route('/device/api/v1/wallettransaction/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction); 
router.route('/device/api/v1/wallettransaction/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.deleteWalletTransaction);
router.route('/device/api/v1/wallettransaction/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);

module.exports = router;
