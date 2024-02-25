/**
 *softDeleteManyBanner.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyBanner = ({
  bannerDb,imageDb
}) => async (params,req,res) => {
  let {
    isWarning, query, dataToUpdate 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      bannerDb,
      imageDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      bannerDb,
      imageDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteManyBanner;
