/**
 *partialUpdateCountry.js
 */

const  countryEntity = require('../../entities/country');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Country. {status, message, data}
 */
const partialUpdateCountry = ({ countryDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCountry = await countryDb.update(query,dataToUpdate);
  if (!updatedCountry || updatedCountry.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCountry[0] });
};
module.exports = partialUpdateCountry;