const express = require('express');
const router = express.Router();
const shippingController = require('../../../controller/device/v1/shipping');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/shipping/create').post(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.addShipping);
router.route('/device/api/v1/shipping/list').post(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.findAllShipping);

router.route('/device/api/v1/shipping/count').post(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.getShippingCount);
router.route('/device/api/v1/shipping/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.getShippingById);

router.route('/device/api/v1/shipping/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.updateShipping);   
router.route('/device/api/v1/shipping/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.partialUpdateShipping);   

router.route('/device/api/v1/shipping/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.softDeleteShipping);
router.route('/device/api/v1/shipping/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.softDeleteManyShipping);
router.route('/device/api/v1/shipping/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.bulkInsertShipping);

router.route('/device/api/v1/shipping/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.bulkUpdateShipping); 
router.route('/device/api/v1/shipping/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.deleteShipping);
router.route('/device/api/v1/shipping/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,shippingController.deleteManyShipping);

module.exports = router;
