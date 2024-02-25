const response = require('../../utils/response');

const getDependencyCount = ({
  shippingDb,addressDb
})=> async (filter) =>{
  let shipping = await shippingDb.findAll(filter);
  if (shipping.length){
    let shippingIds = shipping.map((obj) => obj.id);

    const addressFilter = { '$or': [{ shippingId : { '$in' : shippingIds } }] };
    const addressCnt =  await addressDb.count(addressFilter);
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  shipping : 0 }
    });
  }
};

const deleteWithDependency = ({
  shippingDb,addressDb
})=> async (filter) =>{
  let shipping = await shippingDb.findAll(filter);
  if (shipping.length){
    let shippingIds = shipping.map((obj) => obj.id);

    const addressFilter = { '$or': [{ shippingId : { '$in' : shippingIds } }] };
    const addressCnt =  (await addressDb.destroy(addressFilter)).length;
    let deleted = (await shippingDb.destroy(filter)).length;
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  shipping : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  shippingDb,addressDb
}) => async (filter,updateBody) =>{
  let shipping = await shippingDb.findAll(filter);
  if (shipping.length){
    let shippingIds = shipping.map((obj) => obj.id);

    const addressFilter = { '$or': [{ shippingId : { '$in' : shippingIds } }] };
    const addressCnt =  (await addressDb.update(addressFilter,updateBody)).length;
    let updated = (await shippingDb.update(filter,updateBody)).length;
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  shipping : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
