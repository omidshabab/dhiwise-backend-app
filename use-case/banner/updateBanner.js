/**
 *updateBanner.js
 */

const  bannerEntity = require('../../entities/banner');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Banner. {status, message, data}
 */
const updateBanner = ({
  bannerDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedBanner = bannerEntity(dataToUpdate);
  updatedBanner = await bannerDb.update(query,updatedBanner);
  if (!updatedBanner || updatedBanner.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBanner[0] });
};
module.exports = updateBanner;