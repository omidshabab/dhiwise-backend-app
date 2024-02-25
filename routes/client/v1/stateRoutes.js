const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/client/v1/state');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/state/create').post(auth(PLATFORM.CLIENT),checkRolePermission,stateController.addState);
router.route('/client/api/v1/state/list').post(auth(PLATFORM.CLIENT),checkRolePermission,stateController.findAllState);

router.route('/client/api/v1/state/count').post(auth(PLATFORM.CLIENT),checkRolePermission,stateController.getStateCount);
router.route('/client/api/v1/state/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,stateController.getStateById);

router.route('/client/api/v1/state/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,stateController.updateState);   
router.route('/client/api/v1/state/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,stateController.partialUpdateState);   

router.route('/client/api/v1/state/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,stateController.softDeleteState);
router.route('/client/api/v1/state/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,stateController.softDeleteManyState);
router.route('/client/api/v1/state/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,stateController.bulkInsertState);

router.route('/client/api/v1/state/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,stateController.bulkUpdateState); 
router.route('/client/api/v1/state/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,stateController.deleteState);
router.route('/client/api/v1/state/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,stateController.deleteManyState);

module.exports = router;
