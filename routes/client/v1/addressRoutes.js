const express = require('express');
const router = express.Router();
const addressController = require('../../../controller/client/v1/address');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/address/create').post(auth(PLATFORM.CLIENT),checkRolePermission,addressController.addAddress);
router.route('/client/api/v1/address/list').post(auth(PLATFORM.CLIENT),checkRolePermission,addressController.findAllAddress);

router.route('/client/api/v1/address/count').post(auth(PLATFORM.CLIENT),checkRolePermission,addressController.getAddressCount);
router.route('/client/api/v1/address/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,addressController.getAddressById);

router.route('/client/api/v1/address/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,addressController.updateAddress);   
router.route('/client/api/v1/address/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,addressController.partialUpdateAddress);   

router.route('/client/api/v1/address/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,addressController.softDeleteAddress);
router.route('/client/api/v1/address/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,addressController.softDeleteManyAddress);
router.route('/client/api/v1/address/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,addressController.bulkInsertAddress);

router.route('/client/api/v1/address/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,addressController.bulkUpdateAddress); 
router.route('/client/api/v1/address/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,addressController.deleteAddress);
router.route('/client/api/v1/address/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,addressController.deleteManyAddress);

module.exports = router;
