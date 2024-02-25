const express = require('express');
const router = express.Router();
const orderItemController = require('../../../controller/device/v1/orderItem');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/orderitem/create').post(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.addOrderItem);
router.route('/device/api/v1/orderitem/list').post(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.findAllOrderItem);

router.route('/device/api/v1/orderitem/count').post(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.getOrderItemCount);
router.route('/device/api/v1/orderitem/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.getOrderItemById);

router.route('/device/api/v1/orderitem/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.updateOrderItem);   
router.route('/device/api/v1/orderitem/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.partialUpdateOrderItem);   

router.route('/device/api/v1/orderitem/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.softDeleteOrderItem);
router.route('/device/api/v1/orderitem/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.softDeleteManyOrderItem);
router.route('/device/api/v1/orderitem/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.bulkInsertOrderItem);

router.route('/device/api/v1/orderitem/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.bulkUpdateOrderItem); 
router.route('/device/api/v1/orderitem/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.deleteOrderItem);
router.route('/device/api/v1/orderitem/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,orderItemController.deleteManyOrderItem);

module.exports = router;
