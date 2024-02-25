const response = require('../../utils/response');

const getDependencyCount = ({
  categoryDb,productDb
})=> async (filter) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ categoryId : { '$in' : categoryIds } },{ subCategoryId : { '$in' : categoryIds } }] };
    const productCnt =  await productDb.count(productFilter);
    let result = { product :productCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  category : 0 }
    });
  }
};

const deleteWithDependency = ({
  categoryDb,productDb
})=> async (filter) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ categoryId : { '$in' : categoryIds } },{ subCategoryId : { '$in' : categoryIds } }] };
    const productCnt =  (await productDb.destroy(productFilter)).length;
    let deleted = (await categoryDb.destroy(filter)).length;
    let result = { product :productCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  categoryDb,productDb
}) => async (filter,updateBody) =>{
  let category = await categoryDb.findAll(filter);
  if (category.length){
    let categoryIds = category.map((obj) => obj.id);

    const productFilter = { '$or': [{ categoryId : { '$in' : categoryIds } },{ subCategoryId : { '$in' : categoryIds } }] };
    const productCnt =  (await productDb.update(productFilter,updateBody)).length;
    let updated = (await categoryDb.update(filter,updateBody)).length;
    let result = { product :productCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  category : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
