const express = require('express');
const router = express.Router();
const bannerController = require('../../../controller/device/v1/banner');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/banner/create').post(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.addBanner);
router.route('/device/api/v1/banner/list').post(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.findAllBanner);

router.route('/device/api/v1/banner/count').post(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.getBannerCount);
router.route('/device/api/v1/banner/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.getBannerById);

router.route('/device/api/v1/banner/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.updateBanner);   
router.route('/device/api/v1/banner/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.partialUpdateBanner);   

router.route('/device/api/v1/banner/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.softDeleteBanner);
router.route('/device/api/v1/banner/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/device/api/v1/banner/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.bulkInsertBanner);

router.route('/device/api/v1/banner/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.bulkUpdateBanner); 
router.route('/device/api/v1/banner/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.deleteBanner);
router.route('/device/api/v1/banner/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,bannerController.deleteManyBanner);

module.exports = router;
