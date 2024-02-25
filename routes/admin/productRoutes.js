const express = require('express');
const router = express.Router();
const productController = require('../../controller/admin/product');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/product/create').post(auth(PLATFORM.ADMIN),checkRolePermission,productController.addProduct);
router.route('/admin/product/list').post(auth(PLATFORM.ADMIN),checkRolePermission,productController.findAllProduct);

router.route('/admin/product/count').post(auth(PLATFORM.ADMIN),checkRolePermission,productController.getProductCount);
router.route('/admin/product/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,productController.getProductById);

router.route('/admin/product/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,productController.updateProduct);   
router.route('/admin/product/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,productController.partialUpdateProduct);   

router.route('/admin/product/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,productController.softDeleteProduct);
router.route('/admin/product/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,productController.softDeleteManyProduct);
router.route('/admin/product/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,productController.bulkInsertProduct);

router.route('/admin/product/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,productController.bulkUpdateProduct); 
router.route('/admin/product/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,productController.deleteProduct);
router.route('/admin/product/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,productController.deleteManyProduct);

module.exports = router;
