const express = require('express');
const router = express.Router();
const cityController = require('../../controller/admin/city');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/city/create').post(auth(PLATFORM.ADMIN),checkRolePermission,cityController.addCity);
router.route('/admin/city/list').post(auth(PLATFORM.ADMIN),checkRolePermission,cityController.findAllCity);

router.route('/admin/city/count').post(auth(PLATFORM.ADMIN),checkRolePermission,cityController.getCityCount);
router.route('/admin/city/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,cityController.getCityById);

router.route('/admin/city/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cityController.updateCity);   
router.route('/admin/city/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cityController.partialUpdateCity);   

router.route('/admin/city/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,cityController.softDeleteCity);
router.route('/admin/city/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,cityController.softDeleteManyCity);
router.route('/admin/city/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,cityController.bulkInsertCity);

router.route('/admin/city/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,cityController.bulkUpdateCity); 
router.route('/admin/city/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,cityController.deleteCity);
router.route('/admin/city/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,cityController.deleteManyCity);

module.exports = router;
