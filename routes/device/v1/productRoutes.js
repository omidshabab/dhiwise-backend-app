const express = require('express');
const router = express.Router();
const productController = require('../../../controller/device/v1/product');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/product/create').post(auth(PLATFORM.DEVICE),checkRolePermission,productController.addProduct);
router.route('/device/api/v1/product/list').post(auth(PLATFORM.DEVICE),checkRolePermission,productController.findAllProduct);

router.route('/device/api/v1/product/count').post(auth(PLATFORM.DEVICE),checkRolePermission,productController.getProductCount);
router.route('/device/api/v1/product/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,productController.getProductById);

router.route('/device/api/v1/product/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,productController.updateProduct);   
router.route('/device/api/v1/product/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,productController.partialUpdateProduct);   

router.route('/device/api/v1/product/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,productController.softDeleteProduct);
router.route('/device/api/v1/product/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,productController.softDeleteManyProduct);
router.route('/device/api/v1/product/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,productController.bulkInsertProduct);

router.route('/device/api/v1/product/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,productController.bulkUpdateProduct); 
router.route('/device/api/v1/product/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,productController.deleteProduct);
router.route('/device/api/v1/product/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,productController.deleteManyProduct);

module.exports = router;
