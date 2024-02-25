
/**
 *bulkInsertProduct.js
 */

const  productEntity = require('../../entities/product');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Products. {status, message, data}
 */
const bulkInsertProduct = ({
  productDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let productEntities = dataToCreate.map(item => productEntity(item));
  let createdProduct = await productDb.createMany(productEntities);
  return response.success({ data:{ count: createdProduct.length } });
};
module.exports = bulkInsertProduct;