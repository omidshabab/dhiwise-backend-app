const express = require('express');
const router = express.Router();
const productController = require('../../../controller/client/v1/product');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/product/create').post(auth(PLATFORM.CLIENT),checkRolePermission,productController.addProduct);
router.route('/client/api/v1/product/list').post(auth(PLATFORM.CLIENT),checkRolePermission,productController.findAllProduct);

router.route('/client/api/v1/product/count').post(auth(PLATFORM.CLIENT),checkRolePermission,productController.getProductCount);
router.route('/client/api/v1/product/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,productController.getProductById);

router.route('/client/api/v1/product/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,productController.updateProduct);   
router.route('/client/api/v1/product/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,productController.partialUpdateProduct);   

router.route('/client/api/v1/product/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,productController.softDeleteProduct);
router.route('/client/api/v1/product/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,productController.softDeleteManyProduct);
router.route('/client/api/v1/product/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,productController.bulkInsertProduct);

router.route('/client/api/v1/product/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,productController.bulkUpdateProduct); 
router.route('/client/api/v1/product/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,productController.deleteProduct);
router.route('/client/api/v1/product/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,productController.deleteManyProduct);

module.exports = router;
