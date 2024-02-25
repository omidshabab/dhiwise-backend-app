/**
 *partialUpdateImage.js
 */

const  imageEntity = require('../../entities/image');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Image. {status, message, data}
 */
const partialUpdateImage = ({ imageDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedImage = await imageDb.update(query,dataToUpdate);
  if (!updatedImage || updatedImage.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedImage[0] });
};
module.exports = partialUpdateImage;