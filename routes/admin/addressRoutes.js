const express = require('express');
const router = express.Router();
const addressController = require('../../controller/admin/address');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/address/create').post(auth(PLATFORM.ADMIN),checkRolePermission,addressController.addAddress);
router.route('/admin/address/list').post(auth(PLATFORM.ADMIN),checkRolePermission,addressController.findAllAddress);

router.route('/admin/address/count').post(auth(PLATFORM.ADMIN),checkRolePermission,addressController.getAddressCount);
router.route('/admin/address/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,addressController.getAddressById);

router.route('/admin/address/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,addressController.updateAddress);   
router.route('/admin/address/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,addressController.partialUpdateAddress);   

router.route('/admin/address/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,addressController.softDeleteAddress);
router.route('/admin/address/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,addressController.softDeleteManyAddress);
router.route('/admin/address/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,addressController.bulkInsertAddress);

router.route('/admin/address/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,addressController.bulkUpdateAddress); 
router.route('/admin/address/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,addressController.deleteAddress);
router.route('/admin/address/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,addressController.deleteManyAddress);

module.exports = router;
