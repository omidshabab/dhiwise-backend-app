const express = require('express');
const router = express.Router();
const orderItemController = require('../../controller/admin/orderItem');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/orderitem/create').post(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.addOrderItem);
router.route('/admin/orderitem/list').post(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.findAllOrderItem);

router.route('/admin/orderitem/count').post(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.getOrderItemCount);
router.route('/admin/orderitem/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.getOrderItemById);

router.route('/admin/orderitem/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.updateOrderItem);   
router.route('/admin/orderitem/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.partialUpdateOrderItem);   

router.route('/admin/orderitem/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.softDeleteOrderItem);
router.route('/admin/orderitem/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.softDeleteManyOrderItem);
router.route('/admin/orderitem/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.bulkInsertOrderItem);

router.route('/admin/orderitem/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.bulkUpdateOrderItem); 
router.route('/admin/orderitem/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.deleteOrderItem);
router.route('/admin/orderitem/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,orderItemController.deleteManyOrderItem);

module.exports = router;
