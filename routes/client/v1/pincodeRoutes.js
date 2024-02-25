const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/client/v1/pincode');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/pincode/create').post(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.addPincode);
router.route('/client/api/v1/pincode/list').post(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.findAllPincode);

router.route('/client/api/v1/pincode/count').post(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.getPincodeCount);
router.route('/client/api/v1/pincode/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.getPincodeById);

router.route('/client/api/v1/pincode/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.updatePincode);   
router.route('/client/api/v1/pincode/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.partialUpdatePincode);   

router.route('/client/api/v1/pincode/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.softDeletePincode);
router.route('/client/api/v1/pincode/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/client/api/v1/pincode/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.bulkInsertPincode);

router.route('/client/api/v1/pincode/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.bulkUpdatePincode); 
router.route('/client/api/v1/pincode/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.deletePincode);
router.route('/client/api/v1/pincode/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,pincodeController.deleteManyPincode);

module.exports = router;
