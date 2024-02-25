/**
 *updateImage.js
 */

const  imageEntity = require('../../entities/image');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Image. {status, message, data}
 */
const updateImage = ({
  imageDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedImage = imageEntity(dataToUpdate);
  updatedImage = await imageDb.update(query,updatedImage);
  if (!updatedImage || updatedImage.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedImage[0] });
};
module.exports = updateImage;