const pincodeDb = require('../../../../data-access/pincodeDb');
const addressDb = require('../../../../data-access/addressDb');
const pincodeSchema = require('../../../../validation/schema/pincode');
const createValidation = require('../../../../validation')(pincodeSchema.createSchema);
const updateValidation = require('../../../../validation')(pincodeSchema.updateSchema);
const filterValidation = require('../../../../validation')(pincodeSchema.filterValidationSchema);
const pincodeController = require('./pincode');

// use-cases imports with dependency injection
const addPincodeUsecase = require('../../../../use-case/pincode/addPincode')({
  pincodeDb,
  createValidation 
});
const findAllPincodeUsecase = require('../../../../use-case/pincode/findAllPincode')({
  pincodeDb,
  filterValidation
});
const getPincodeCountUsecase = require('../../../../use-case/pincode/getPincodeCount')({
  pincodeDb,
  filterValidation
});
const getPincodeUsecase = require('../../../../use-case/pincode/getPincode')({
  pincodeDb,
  filterValidation
});
const updatePincodeUsecase = require('../../../../use-case/pincode/updatePincode')({
  pincodeDb,
  updateValidation 
});
const partialUpdatePincodeUsecase = require('../../../../use-case/pincode/partialUpdatePincode')({
  pincodeDb,
  updateValidation
});
const softDeletePincodeUsecase = require('../../../../use-case/pincode/softDeletePincode')({
  pincodeDb,
  addressDb
});
const softDeleteManyPincodeUsecase = require('../../../../use-case/pincode/softDeleteManyPincode')({
  pincodeDb,
  addressDb
});
const bulkInsertPincodeUsecase = require('../../../../use-case/pincode/bulkInsertPincode')({ pincodeDb });
const bulkUpdatePincodeUsecase = require('../../../../use-case/pincode/bulkUpdatePincode')({ pincodeDb });
const deletePincodeUsecase = require('../../../../use-case/pincode/deletePincode')({
  pincodeDb,
  addressDb
});
const deleteManyPincodeUsecase = require('../../../../use-case/pincode/deleteManyPincode')({
  pincodeDb,
  addressDb
});

// controller methods mapping
const addPincode = pincodeController.addPincode(addPincodeUsecase);
const findAllPincode = pincodeController.findAllPincode(findAllPincodeUsecase);
const getPincodeCount = pincodeController.getPincodeCount(getPincodeCountUsecase);
const getPincodeById = pincodeController.getPincode(getPincodeUsecase);
const updatePincode = pincodeController.updatePincode(updatePincodeUsecase);
const partialUpdatePincode = pincodeController.partialUpdatePincode(partialUpdatePincodeUsecase);
const softDeletePincode = pincodeController.softDeletePincode(softDeletePincodeUsecase);
const softDeleteManyPincode = pincodeController.softDeleteManyPincode(softDeleteManyPincodeUsecase);
const bulkInsertPincode = pincodeController.bulkInsertPincode(bulkInsertPincodeUsecase);
const bulkUpdatePincode = pincodeController.bulkUpdatePincode(bulkUpdatePincodeUsecase);
const deletePincode = pincodeController.deletePincode(deletePincodeUsecase);
const deleteManyPincode = pincodeController.deleteManyPincode(deleteManyPincodeUsecase);

module.exports = {
  addPincode,
  findAllPincode,
  getPincodeCount,
  getPincodeById,
  updatePincode,
  partialUpdatePincode,
  softDeletePincode,
  softDeleteManyPincode,
  bulkInsertPincode,
  bulkUpdatePincode,
  deletePincode,
  deleteManyPincode,
};