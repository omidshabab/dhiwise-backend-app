const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/device/v1/wallet');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/wallet/create').post(auth(PLATFORM.DEVICE),checkRolePermission,walletController.addWallet);
router.route('/device/api/v1/wallet/list').post(auth(PLATFORM.DEVICE),checkRolePermission,walletController.findAllWallet);

router.route('/device/api/v1/wallet/count').post(auth(PLATFORM.DEVICE),checkRolePermission,walletController.getWalletCount);
router.route('/device/api/v1/wallet/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,walletController.getWalletById);

router.route('/device/api/v1/wallet/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletController.updateWallet);   
router.route('/device/api/v1/wallet/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletController.partialUpdateWallet);   

router.route('/device/api/v1/wallet/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,walletController.softDeleteWallet);
router.route('/device/api/v1/wallet/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/device/api/v1/wallet/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,walletController.bulkInsertWallet);

router.route('/device/api/v1/wallet/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,walletController.bulkUpdateWallet); 
router.route('/device/api/v1/wallet/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,walletController.deleteWallet);
router.route('/device/api/v1/wallet/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,walletController.deleteManyWallet);

module.exports = router;
