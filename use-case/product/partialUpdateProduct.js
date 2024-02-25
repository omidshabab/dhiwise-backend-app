/**
 *partialUpdateProduct.js
 */

const  productEntity = require('../../entities/product');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Product. {status, message, data}
 */
const partialUpdateProduct = ({ productDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedProduct = await productDb.update(query,dataToUpdate);
  if (!updatedProduct || updatedProduct.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduct[0] });
};
module.exports = partialUpdateProduct;