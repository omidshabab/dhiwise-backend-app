const express = require('express');
const router = express.Router();
const bannerController = require('../../controller/admin/banner');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/banner/create').post(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.addBanner);
router.route('/admin/banner/list').post(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.findAllBanner);

router.route('/admin/banner/count').post(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.getBannerCount);
router.route('/admin/banner/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.getBannerById);

router.route('/admin/banner/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.updateBanner);   
router.route('/admin/banner/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.partialUpdateBanner);   

router.route('/admin/banner/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.softDeleteBanner);
router.route('/admin/banner/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/admin/banner/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.bulkInsertBanner);

router.route('/admin/banner/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.bulkUpdateBanner); 
router.route('/admin/banner/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.deleteBanner);
router.route('/admin/banner/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,bannerController.deleteManyBanner);

module.exports = router;
