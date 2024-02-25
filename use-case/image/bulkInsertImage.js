
/**
 *bulkInsertImage.js
 */

const  imageEntity = require('../../entities/image');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Images. {status, message, data}
 */
const bulkInsertImage = ({
  imageDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let imageEntities = dataToCreate.map(item => imageEntity(item));
  let createdImage = await imageDb.createMany(imageEntities);
  return response.success({ data:{ count: createdImage.length } });
};
module.exports = bulkInsertImage;