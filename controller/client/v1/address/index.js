const addressDb = require('../../../../data-access/addressDb');
const addressSchema = require('../../../../validation/schema/address');
const createValidation = require('../../../../validation')(addressSchema.createSchema);
const updateValidation = require('../../../../validation')(addressSchema.updateSchema);
const filterValidation = require('../../../../validation')(addressSchema.filterValidationSchema);
const addressController = require('./address');

// use-cases imports with dependency injection
const addAddressUsecase = require('../../../../use-case/address/addAddress')({
  addressDb,
  createValidation 
});
const findAllAddressUsecase = require('../../../../use-case/address/findAllAddress')({
  addressDb,
  filterValidation
});
const getAddressCountUsecase = require('../../../../use-case/address/getAddressCount')({
  addressDb,
  filterValidation
});
const getAddressUsecase = require('../../../../use-case/address/getAddress')({
  addressDb,
  filterValidation
});
const updateAddressUsecase = require('../../../../use-case/address/updateAddress')({
  addressDb,
  updateValidation 
});
const partialUpdateAddressUsecase = require('../../../../use-case/address/partialUpdateAddress')({
  addressDb,
  updateValidation
});
const softDeleteAddressUsecase = require('../../../../use-case/address/softDeleteAddress')({ addressDb });
const softDeleteManyAddressUsecase = require('../../../../use-case/address/softDeleteManyAddress')({ addressDb });
const bulkInsertAddressUsecase = require('../../../../use-case/address/bulkInsertAddress')({ addressDb });
const bulkUpdateAddressUsecase = require('../../../../use-case/address/bulkUpdateAddress')({ addressDb });
const deleteAddressUsecase = require('../../../../use-case/address/deleteAddress')({ addressDb });
const deleteManyAddressUsecase = require('../../../../use-case/address/deleteManyAddress')({ addressDb });

// controller methods mapping
const addAddress = addressController.addAddress(addAddressUsecase);
const findAllAddress = addressController.findAllAddress(findAllAddressUsecase);
const getAddressCount = addressController.getAddressCount(getAddressCountUsecase);
const getAddressById = addressController.getAddress(getAddressUsecase);
const updateAddress = addressController.updateAddress(updateAddressUsecase);
const partialUpdateAddress = addressController.partialUpdateAddress(partialUpdateAddressUsecase);
const softDeleteAddress = addressController.softDeleteAddress(softDeleteAddressUsecase);
const softDeleteManyAddress = addressController.softDeleteManyAddress(softDeleteManyAddressUsecase);
const bulkInsertAddress = addressController.bulkInsertAddress(bulkInsertAddressUsecase);
const bulkUpdateAddress = addressController.bulkUpdateAddress(bulkUpdateAddressUsecase);
const deleteAddress = addressController.deleteAddress(deleteAddressUsecase);
const deleteManyAddress = addressController.deleteManyAddress(deleteManyAddressUsecase);

module.exports = {
  addAddress,
  findAllAddress,
  getAddressCount,
  getAddressById,
  updateAddress,
  partialUpdateAddress,
  softDeleteAddress,
  softDeleteManyAddress,
  bulkInsertAddress,
  bulkUpdateAddress,
  deleteAddress,
  deleteManyAddress,
};