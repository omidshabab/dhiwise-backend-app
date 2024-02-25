
/**
 *addImage.js
 */

const  imageEntity = require('../../entities/image');
const response = require('../../utils/response');

/**
 * @description : create new record of image in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addImage = ({
  imageDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdImage  = imageEntity(dataToCreate);
  createdImage = await imageDb.createOne(createdImage );
  return response.success({ data:createdImage });
};
module.exports = addImage;