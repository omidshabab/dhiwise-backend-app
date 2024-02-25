/**
 *partialUpdateCity.js
 */

const  cityEntity = require('../../entities/city');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated City. {status, message, data}
 */
const partialUpdateCity = ({ cityDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCity = await cityDb.update(query,dataToUpdate);
  if (!updatedCity || updatedCity.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCity[0] });
};
module.exports = partialUpdateCity;