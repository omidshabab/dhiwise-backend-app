
/**
 *deleteImage.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Image. {status, message, data}
 */
const deleteImage = ({ imageDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedImage = await imageDb.destroy(query);
  if (!deletedImage || deletedImage.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedImage[0] });
};

module.exports = deleteImage;
