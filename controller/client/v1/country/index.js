const countryDb = require('../../../../data-access/countryDb');
const stateDb = require('../../../../data-access/stateDb');
const pincodeDb = require('../../../../data-access/pincodeDb');
const countrySchema = require('../../../../validation/schema/country');
const createValidation = require('../../../../validation')(countrySchema.createSchema);
const updateValidation = require('../../../../validation')(countrySchema.updateSchema);
const filterValidation = require('../../../../validation')(countrySchema.filterValidationSchema);
const countryController = require('./country');

// use-cases imports with dependency injection
const addCountryUsecase = require('../../../../use-case/country/addCountry')({
  countryDb,
  createValidation 
});
const findAllCountryUsecase = require('../../../../use-case/country/findAllCountry')({
  countryDb,
  filterValidation
});
const getCountryCountUsecase = require('../../../../use-case/country/getCountryCount')({
  countryDb,
  filterValidation
});
const getCountryUsecase = require('../../../../use-case/country/getCountry')({
  countryDb,
  filterValidation
});
const updateCountryUsecase = require('../../../../use-case/country/updateCountry')({
  countryDb,
  updateValidation 
});
const partialUpdateCountryUsecase = require('../../../../use-case/country/partialUpdateCountry')({
  countryDb,
  updateValidation
});
const softDeleteCountryUsecase = require('../../../../use-case/country/softDeleteCountry')({
  countryDb,
  stateDb,
  pincodeDb
});
const softDeleteManyCountryUsecase = require('../../../../use-case/country/softDeleteManyCountry')({
  countryDb,
  stateDb,
  pincodeDb
});
const bulkInsertCountryUsecase = require('../../../../use-case/country/bulkInsertCountry')({ countryDb });
const bulkUpdateCountryUsecase = require('../../../../use-case/country/bulkUpdateCountry')({ countryDb });
const deleteCountryUsecase = require('../../../../use-case/country/deleteCountry')({
  countryDb,
  stateDb,
  pincodeDb
});
const deleteManyCountryUsecase = require('../../../../use-case/country/deleteManyCountry')({
  countryDb,
  stateDb,
  pincodeDb
});

// controller methods mapping
const addCountry = countryController.addCountry(addCountryUsecase);
const findAllCountry = countryController.findAllCountry(findAllCountryUsecase);
const getCountryCount = countryController.getCountryCount(getCountryCountUsecase);
const getCountryById = countryController.getCountry(getCountryUsecase);
const updateCountry = countryController.updateCountry(updateCountryUsecase);
const partialUpdateCountry = countryController.partialUpdateCountry(partialUpdateCountryUsecase);
const softDeleteCountry = countryController.softDeleteCountry(softDeleteCountryUsecase);
const softDeleteManyCountry = countryController.softDeleteManyCountry(softDeleteManyCountryUsecase);
const bulkInsertCountry = countryController.bulkInsertCountry(bulkInsertCountryUsecase);
const bulkUpdateCountry = countryController.bulkUpdateCountry(bulkUpdateCountryUsecase);
const deleteCountry = countryController.deleteCountry(deleteCountryUsecase);
const deleteManyCountry = countryController.deleteManyCountry(deleteManyCountryUsecase);

module.exports = {
  addCountry,
  findAllCountry,
  getCountryCount,
  getCountryById,
  updateCountry,
  partialUpdateCountry,
  softDeleteCountry,
  softDeleteManyCountry,
  bulkInsertCountry,
  bulkUpdateCountry,
  deleteCountry,
  deleteManyCountry,
};