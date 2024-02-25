/**
 *partialUpdateBanner.js
 */

const  bannerEntity = require('../../entities/banner');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Banner. {status, message, data}
 */
const partialUpdateBanner = ({ bannerDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedBanner = await bannerDb.update(query,dataToUpdate);
  if (!updatedBanner || updatedBanner.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedBanner[0] });
};
module.exports = partialUpdateBanner;