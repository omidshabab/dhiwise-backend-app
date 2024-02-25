const response = require('../../utils/response');

const getDependencyCount = ({
  pincodeDb,addressDb
})=> async (filter) =>{
  let pincode = await pincodeDb.findAll(filter);
  if (pincode.length){
    let pincodeIds = pincode.map((obj) => obj.id);

    const addressFilter = { '$or': [{ pincodeId : { '$in' : pincodeIds } }] };
    const addressCnt =  await addressDb.count(addressFilter);
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  pincode : 0 }
    });
  }
};

const deleteWithDependency = ({
  pincodeDb,addressDb
})=> async (filter) =>{
  let pincode = await pincodeDb.findAll(filter);
  if (pincode.length){
    let pincodeIds = pincode.map((obj) => obj.id);

    const addressFilter = { '$or': [{ pincodeId : { '$in' : pincodeIds } }] };
    const addressCnt =  (await addressDb.destroy(addressFilter)).length;
    let deleted = (await pincodeDb.destroy(filter)).length;
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  pincode : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  pincodeDb,addressDb
}) => async (filter,updateBody) =>{
  let pincode = await pincodeDb.findAll(filter);
  if (pincode.length){
    let pincodeIds = pincode.map((obj) => obj.id);

    const addressFilter = { '$or': [{ pincodeId : { '$in' : pincodeIds } }] };
    const addressCnt =  (await addressDb.update(addressFilter,updateBody)).length;
    let updated = (await pincodeDb.update(filter,updateBody)).length;
    let result = { address :addressCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  pincode : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
