const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/client/v1/wallet');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/wallet/create').post(auth(PLATFORM.CLIENT),checkRolePermission,walletController.addWallet);
router.route('/client/api/v1/wallet/list').post(auth(PLATFORM.CLIENT),checkRolePermission,walletController.findAllWallet);

router.route('/client/api/v1/wallet/count').post(auth(PLATFORM.CLIENT),checkRolePermission,walletController.getWalletCount);
router.route('/client/api/v1/wallet/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,walletController.getWalletById);

router.route('/client/api/v1/wallet/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletController.updateWallet);   
router.route('/client/api/v1/wallet/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletController.partialUpdateWallet);   

router.route('/client/api/v1/wallet/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,walletController.softDeleteWallet);
router.route('/client/api/v1/wallet/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/client/api/v1/wallet/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,walletController.bulkInsertWallet);

router.route('/client/api/v1/wallet/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,walletController.bulkUpdateWallet); 
router.route('/client/api/v1/wallet/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,walletController.deleteWallet);
router.route('/client/api/v1/wallet/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,walletController.deleteManyWallet);

module.exports = router;
