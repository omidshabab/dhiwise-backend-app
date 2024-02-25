const express = require('express');
const router = express.Router();
const imageController = require('../../../controller/client/v1/image');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/image/create').post(auth(PLATFORM.CLIENT),checkRolePermission,imageController.addImage);
router.route('/client/api/v1/image/list').post(auth(PLATFORM.CLIENT),checkRolePermission,imageController.findAllImage);

router.route('/client/api/v1/image/count').post(auth(PLATFORM.CLIENT),checkRolePermission,imageController.getImageCount);
router.route('/client/api/v1/image/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,imageController.getImageById);

router.route('/client/api/v1/image/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,imageController.updateImage);   
router.route('/client/api/v1/image/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,imageController.partialUpdateImage);   

router.route('/client/api/v1/image/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,imageController.softDeleteImage);
router.route('/client/api/v1/image/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,imageController.softDeleteManyImage);
router.route('/client/api/v1/image/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,imageController.bulkInsertImage);

router.route('/client/api/v1/image/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,imageController.bulkUpdateImage); 
router.route('/client/api/v1/image/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,imageController.deleteImage);
router.route('/client/api/v1/image/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,imageController.deleteManyImage);

module.exports = router;
