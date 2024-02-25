const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/client/v1/country');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/country/create').post(auth(PLATFORM.CLIENT),checkRolePermission,countryController.addCountry);
router.route('/client/api/v1/country/list').post(auth(PLATFORM.CLIENT),checkRolePermission,countryController.findAllCountry);

router.route('/client/api/v1/country/count').post(auth(PLATFORM.CLIENT),checkRolePermission,countryController.getCountryCount);
router.route('/client/api/v1/country/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,countryController.getCountryById);

router.route('/client/api/v1/country/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,countryController.updateCountry);   
router.route('/client/api/v1/country/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,countryController.partialUpdateCountry);   

router.route('/client/api/v1/country/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,countryController.softDeleteCountry);
router.route('/client/api/v1/country/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/client/api/v1/country/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,countryController.bulkInsertCountry);

router.route('/client/api/v1/country/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,countryController.bulkUpdateCountry); 
router.route('/client/api/v1/country/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,countryController.deleteCountry);
router.route('/client/api/v1/country/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,countryController.deleteManyCountry);

module.exports = router;
