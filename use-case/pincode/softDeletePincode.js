/**
 *softDeletePincode.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Pincode. {status, message, data}
 */
const softDeletePincode = ({
  pincodeDb,addressDb
}) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      pincodeDb,
      addressDb
    });
    return await getDependencyCount(query); 
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      pincodeDb,
      addressDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeletePincode;
