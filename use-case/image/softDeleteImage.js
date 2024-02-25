/**
 *softDeleteImage.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Image. {status, message, data}
 */
const softDeleteImage = ({ imageDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedImage = await imageDb.update(query, dataToUpdate);
  if (!updatedImage || updatedImage.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedImage[0] });
};
module.exports = softDeleteImage;
