const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/device/v1/state');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/state/create').post(auth(PLATFORM.DEVICE),checkRolePermission,stateController.addState);
router.route('/device/api/v1/state/list').post(auth(PLATFORM.DEVICE),checkRolePermission,stateController.findAllState);

router.route('/device/api/v1/state/count').post(auth(PLATFORM.DEVICE),checkRolePermission,stateController.getStateCount);
router.route('/device/api/v1/state/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,stateController.getStateById);

router.route('/device/api/v1/state/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,stateController.updateState);   
router.route('/device/api/v1/state/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,stateController.partialUpdateState);   

router.route('/device/api/v1/state/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,stateController.softDeleteState);
router.route('/device/api/v1/state/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,stateController.softDeleteManyState);
router.route('/device/api/v1/state/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,stateController.bulkInsertState);

router.route('/device/api/v1/state/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,stateController.bulkUpdateState); 
router.route('/device/api/v1/state/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,stateController.deleteState);
router.route('/device/api/v1/state/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,stateController.deleteManyState);

module.exports = router;
