/**
 *softDeleteCart.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Cart. {status, message, data}
 */
const softDeleteCart = ({
  cartDb,cartItemDb
}) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      cartDb,
      cartItemDb
    });
    return await getDependencyCount(query); 
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      cartDb,
      cartItemDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteCart;
