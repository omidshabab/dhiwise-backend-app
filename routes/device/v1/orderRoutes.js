const express = require('express');
const router = express.Router();
const orderController = require('../../../controller/device/v1/order');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/order/create').post(auth(PLATFORM.DEVICE),checkRolePermission,orderController.addOrder);
router.route('/device/api/v1/order/list').post(auth(PLATFORM.DEVICE),checkRolePermission,orderController.findAllOrder);

router.route('/device/api/v1/order/count').post(auth(PLATFORM.DEVICE),checkRolePermission,orderController.getOrderCount);
router.route('/device/api/v1/order/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,orderController.getOrderById);

router.route('/device/api/v1/order/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderController.updateOrder);   
router.route('/device/api/v1/order/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderController.partialUpdateOrder);   

router.route('/device/api/v1/order/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderController.softDeleteOrder);
router.route('/device/api/v1/order/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,orderController.softDeleteManyOrder);
router.route('/device/api/v1/order/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,orderController.bulkInsertOrder);

router.route('/device/api/v1/order/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,orderController.bulkUpdateOrder); 
router.route('/device/api/v1/order/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,orderController.deleteOrder);
router.route('/device/api/v1/order/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,orderController.deleteManyOrder);

module.exports = router;
