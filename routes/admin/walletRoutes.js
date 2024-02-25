const express = require('express');
const router = express.Router();
const walletController = require('../../controller/admin/wallet');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/wallet/create').post(auth(PLATFORM.ADMIN),checkRolePermission,walletController.addWallet);
router.route('/admin/wallet/list').post(auth(PLATFORM.ADMIN),checkRolePermission,walletController.findAllWallet);

router.route('/admin/wallet/count').post(auth(PLATFORM.ADMIN),checkRolePermission,walletController.getWalletCount);
router.route('/admin/wallet/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,walletController.getWalletById);

router.route('/admin/wallet/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,walletController.updateWallet);   
router.route('/admin/wallet/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,walletController.partialUpdateWallet);   

router.route('/admin/wallet/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,walletController.softDeleteWallet);
router.route('/admin/wallet/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/admin/wallet/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,walletController.bulkInsertWallet);

router.route('/admin/wallet/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,walletController.bulkUpdateWallet); 
router.route('/admin/wallet/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,walletController.deleteWallet);
router.route('/admin/wallet/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,walletController.deleteManyWallet);

module.exports = router;
