const express = require('express');
const router = express.Router();
const addressController = require('../../../controller/device/v1/address');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/address/create').post(auth(PLATFORM.DEVICE),checkRolePermission,addressController.addAddress);
router.route('/device/api/v1/address/list').post(auth(PLATFORM.DEVICE),checkRolePermission,addressController.findAllAddress);

router.route('/device/api/v1/address/count').post(auth(PLATFORM.DEVICE),checkRolePermission,addressController.getAddressCount);
router.route('/device/api/v1/address/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,addressController.getAddressById);

router.route('/device/api/v1/address/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,addressController.updateAddress);   
router.route('/device/api/v1/address/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,addressController.partialUpdateAddress);   

router.route('/device/api/v1/address/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,addressController.softDeleteAddress);
router.route('/device/api/v1/address/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,addressController.softDeleteManyAddress);
router.route('/device/api/v1/address/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,addressController.bulkInsertAddress);

router.route('/device/api/v1/address/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,addressController.bulkUpdateAddress); 
router.route('/device/api/v1/address/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,addressController.deleteAddress);
router.route('/device/api/v1/address/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,addressController.deleteManyAddress);

module.exports = router;
