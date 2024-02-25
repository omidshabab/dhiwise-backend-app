const express = require('express');
const router = express.Router();
const cartItemController = require('../../../controller/client/v1/cartItem');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/cartitem/create').post(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.addCartItem);
router.route('/client/api/v1/cartitem/list').post(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.findAllCartItem);

router.route('/client/api/v1/cartitem/count').post(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.getCartItemCount);
router.route('/client/api/v1/cartitem/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.getCartItemById);

router.route('/client/api/v1/cartitem/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.updateCartItem);   
router.route('/client/api/v1/cartitem/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.partialUpdateCartItem);   

router.route('/client/api/v1/cartitem/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.softDeleteCartItem);
router.route('/client/api/v1/cartitem/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.softDeleteManyCartItem);
router.route('/client/api/v1/cartitem/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.bulkInsertCartItem);

router.route('/client/api/v1/cartitem/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.bulkUpdateCartItem); 
router.route('/client/api/v1/cartitem/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.deleteCartItem);
router.route('/client/api/v1/cartitem/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,cartItemController.deleteManyCartItem);

module.exports = router;
