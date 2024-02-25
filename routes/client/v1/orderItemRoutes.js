const express = require('express');
const router = express.Router();
const orderItemController = require('../../../controller/client/v1/orderItem');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/orderitem/create').post(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.addOrderItem);
router.route('/client/api/v1/orderitem/list').post(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.findAllOrderItem);

router.route('/client/api/v1/orderitem/count').post(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.getOrderItemCount);
router.route('/client/api/v1/orderitem/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.getOrderItemById);

router.route('/client/api/v1/orderitem/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.updateOrderItem);   
router.route('/client/api/v1/orderitem/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.partialUpdateOrderItem);   

router.route('/client/api/v1/orderitem/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.softDeleteOrderItem);
router.route('/client/api/v1/orderitem/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.softDeleteManyOrderItem);
router.route('/client/api/v1/orderitem/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.bulkInsertOrderItem);

router.route('/client/api/v1/orderitem/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.bulkUpdateOrderItem); 
router.route('/client/api/v1/orderitem/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.deleteOrderItem);
router.route('/client/api/v1/orderitem/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,orderItemController.deleteManyOrderItem);

module.exports = router;
