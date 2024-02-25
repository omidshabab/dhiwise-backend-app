const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/device/v1/city');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/city/create').post(auth(PLATFORM.DEVICE),checkRolePermission,cityController.addCity);
router.route('/device/api/v1/city/list').post(auth(PLATFORM.DEVICE),checkRolePermission,cityController.findAllCity);

router.route('/device/api/v1/city/count').post(auth(PLATFORM.DEVICE),checkRolePermission,cityController.getCityCount);
router.route('/device/api/v1/city/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,cityController.getCityById);

router.route('/device/api/v1/city/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cityController.updateCity);   
router.route('/device/api/v1/city/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cityController.partialUpdateCity);   

router.route('/device/api/v1/city/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,cityController.softDeleteCity);
router.route('/device/api/v1/city/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,cityController.softDeleteManyCity);
router.route('/device/api/v1/city/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,cityController.bulkInsertCity);

router.route('/device/api/v1/city/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,cityController.bulkUpdateCity); 
router.route('/device/api/v1/city/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,cityController.deleteCity);
router.route('/device/api/v1/city/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,cityController.deleteManyCity);

module.exports = router;
