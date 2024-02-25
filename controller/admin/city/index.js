const cityDb = require('../../../data-access/cityDb');
const pincodeDb = require('../../../data-access/pincodeDb');
const addressDb = require('../../../data-access/addressDb');
const citySchema = require('../../../validation/schema/city');
const createValidation = require('../../../validation')(citySchema.createSchema);
const updateValidation = require('../../../validation')(citySchema.updateSchema);
const filterValidation = require('../../../validation')(citySchema.filterValidationSchema);
const cityController = require('./city');

// use-cases imports with dependency injection
const addCityUsecase = require('../../../use-case/city/addCity')({
  cityDb,
  createValidation 
});
const findAllCityUsecase = require('../../../use-case/city/findAllCity')({
  cityDb,
  filterValidation
});
const getCityCountUsecase = require('../../../use-case/city/getCityCount')({
  cityDb,
  filterValidation
});
const getCityUsecase = require('../../../use-case/city/getCity')({
  cityDb,
  filterValidation
});
const updateCityUsecase = require('../../../use-case/city/updateCity')({
  cityDb,
  updateValidation 
});
const partialUpdateCityUsecase = require('../../../use-case/city/partialUpdateCity')({
  cityDb,
  updateValidation
});
const softDeleteCityUsecase = require('../../../use-case/city/softDeleteCity')({
  cityDb,
  pincodeDb,
  addressDb
});
const softDeleteManyCityUsecase = require('../../../use-case/city/softDeleteManyCity')({
  cityDb,
  pincodeDb,
  addressDb
});
const bulkInsertCityUsecase = require('../../../use-case/city/bulkInsertCity')({ cityDb });
const bulkUpdateCityUsecase = require('../../../use-case/city/bulkUpdateCity')({ cityDb });
const deleteCityUsecase = require('../../../use-case/city/deleteCity')({
  cityDb,
  pincodeDb,
  addressDb
});
const deleteManyCityUsecase = require('../../../use-case/city/deleteManyCity')({
  cityDb,
  pincodeDb,
  addressDb
});

// controller methods mapping
const addCity = cityController.addCity(addCityUsecase);
const findAllCity = cityController.findAllCity(findAllCityUsecase);
const getCityCount = cityController.getCityCount(getCityCountUsecase);
const getCityById = cityController.getCity(getCityUsecase);
const updateCity = cityController.updateCity(updateCityUsecase);
const partialUpdateCity = cityController.partialUpdateCity(partialUpdateCityUsecase);
const softDeleteCity = cityController.softDeleteCity(softDeleteCityUsecase);
const softDeleteManyCity = cityController.softDeleteManyCity(softDeleteManyCityUsecase);
const bulkInsertCity = cityController.bulkInsertCity(bulkInsertCityUsecase);
const bulkUpdateCity = cityController.bulkUpdateCity(bulkUpdateCityUsecase);
const deleteCity = cityController.deleteCity(deleteCityUsecase);
const deleteManyCity = cityController.deleteManyCity(deleteManyCityUsecase);

module.exports = {
  addCity,
  findAllCity,
  getCityCount,
  getCityById,
  updateCity,
  partialUpdateCity,
  softDeleteCity,
  softDeleteManyCity,
  bulkInsertCity,
  bulkUpdateCity,
  deleteCity,
  deleteManyCity,
};