const express = require('express');
const router = express.Router();
const imageController = require('../../../controller/device/v1/image');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/image/create').post(auth(PLATFORM.DEVICE),checkRolePermission,imageController.addImage);
router.route('/device/api/v1/image/list').post(auth(PLATFORM.DEVICE),checkRolePermission,imageController.findAllImage);

router.route('/device/api/v1/image/count').post(auth(PLATFORM.DEVICE),checkRolePermission,imageController.getImageCount);
router.route('/device/api/v1/image/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,imageController.getImageById);

router.route('/device/api/v1/image/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,imageController.updateImage);   
router.route('/device/api/v1/image/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,imageController.partialUpdateImage);   

router.route('/device/api/v1/image/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,imageController.softDeleteImage);
router.route('/device/api/v1/image/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,imageController.softDeleteManyImage);
router.route('/device/api/v1/image/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,imageController.bulkInsertImage);

router.route('/device/api/v1/image/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,imageController.bulkUpdateImage); 
router.route('/device/api/v1/image/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,imageController.deleteImage);
router.route('/device/api/v1/image/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,imageController.deleteManyImage);

module.exports = router;
