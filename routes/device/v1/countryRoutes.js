const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/device/v1/country');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/country/create').post(auth(PLATFORM.DEVICE),checkRolePermission,countryController.addCountry);
router.route('/device/api/v1/country/list').post(auth(PLATFORM.DEVICE),checkRolePermission,countryController.findAllCountry);

router.route('/device/api/v1/country/count').post(auth(PLATFORM.DEVICE),checkRolePermission,countryController.getCountryCount);
router.route('/device/api/v1/country/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,countryController.getCountryById);

router.route('/device/api/v1/country/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,countryController.updateCountry);   
router.route('/device/api/v1/country/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,countryController.partialUpdateCountry);   

router.route('/device/api/v1/country/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,countryController.softDeleteCountry);
router.route('/device/api/v1/country/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/device/api/v1/country/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,countryController.bulkInsertCountry);

router.route('/device/api/v1/country/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,countryController.bulkUpdateCountry); 
router.route('/device/api/v1/country/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,countryController.deleteCountry);
router.route('/device/api/v1/country/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,countryController.deleteManyCountry);

module.exports = router;
