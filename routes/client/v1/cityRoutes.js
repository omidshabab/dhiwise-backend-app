const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/client/v1/city');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/city/create').post(auth(PLATFORM.CLIENT),checkRolePermission,cityController.addCity);
router.route('/client/api/v1/city/list').post(auth(PLATFORM.CLIENT),checkRolePermission,cityController.findAllCity);

router.route('/client/api/v1/city/count').post(auth(PLATFORM.CLIENT),checkRolePermission,cityController.getCityCount);
router.route('/client/api/v1/city/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,cityController.getCityById);

router.route('/client/api/v1/city/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cityController.updateCity);   
router.route('/client/api/v1/city/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cityController.partialUpdateCity);   

router.route('/client/api/v1/city/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cityController.softDeleteCity);
router.route('/client/api/v1/city/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,cityController.softDeleteManyCity);
router.route('/client/api/v1/city/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,cityController.bulkInsertCity);

router.route('/client/api/v1/city/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,cityController.bulkUpdateCity); 
router.route('/client/api/v1/city/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,cityController.deleteCity);
router.route('/client/api/v1/city/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,cityController.deleteManyCity);

module.exports = router;
