/**
 *partialUpdateShipping.js
 */

const  shippingEntity = require('../../entities/shipping');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Shipping. {status, message, data}
 */
const partialUpdateShipping = ({ shippingDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedShipping = await shippingDb.update(query,dataToUpdate);
  if (!updatedShipping || updatedShipping.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedShipping[0] });
};
module.exports = partialUpdateShipping;