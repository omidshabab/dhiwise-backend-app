
/**
 *deleteCategory.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Category. {status, message, data}
 */
const deleteCategory = ({
  categoryDb,productDb
}) => async (params,req,res) => {
  let {
    isWarning, query 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      categoryDb,
      productDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      categoryDb,
      productDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteCategory;
