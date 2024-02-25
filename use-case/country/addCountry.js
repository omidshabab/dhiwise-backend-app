
/**
 *addCountry.js
 */

const  countryEntity = require('../../entities/country');
const response = require('../../utils/response');

/**
 * @description : create new record of country in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addCountry = ({
  countryDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdCountry  = countryEntity(dataToCreate);
  createdCountry = await countryDb.createOne(createdCountry );
  return response.success({ data:createdCountry });
};
module.exports = addCountry;