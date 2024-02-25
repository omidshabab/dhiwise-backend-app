const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/device/v1/pincode');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/pincode/create').post(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.addPincode);
router.route('/device/api/v1/pincode/list').post(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.findAllPincode);

router.route('/device/api/v1/pincode/count').post(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.getPincodeCount);
router.route('/device/api/v1/pincode/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.getPincodeById);

router.route('/device/api/v1/pincode/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.updatePincode);   
router.route('/device/api/v1/pincode/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.partialUpdatePincode);   

router.route('/device/api/v1/pincode/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.softDeletePincode);
router.route('/device/api/v1/pincode/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/device/api/v1/pincode/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.bulkInsertPincode);

router.route('/device/api/v1/pincode/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.bulkUpdatePincode); 
router.route('/device/api/v1/pincode/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.deletePincode);
router.route('/device/api/v1/pincode/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,pincodeController.deleteManyPincode);

module.exports = router;
