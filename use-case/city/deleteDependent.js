const response = require('../../utils/response');

const getDependencyCount = ({
  cityDb,pincodeDb,addressDb
})=> async (filter) =>{
  let city = await cityDb.findAll(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);

    const addressFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const addressCnt =  await addressDb.count(addressFilter);
    let result = {
      pincode :pincodeCnt ,
      address :addressCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  city : 0 }
    });
  }
};

const deleteWithDependency = ({
  cityDb,pincodeDb,addressDb
})=> async (filter) =>{
  let city = await cityDb.findAll(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  (await pincodeDb.destroy(pincodeFilter)).length;

    const addressFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const addressCnt =  (await addressDb.destroy(addressFilter)).length;
    let deleted = (await cityDb.destroy(filter)).length;
    let result = {
      pincode :pincodeCnt ,
      address :addressCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  cityDb,pincodeDb,addressDb
}) => async (filter,updateBody) =>{
  let city = await cityDb.findAll(filter);
  if (city.length){
    let cityIds = city.map((obj) => obj.id);

    const pincodeFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const pincodeCnt =  (await pincodeDb.update(pincodeFilter,updateBody)).length;

    const addressFilter = { '$or': [{ cityId : { '$in' : cityIds } }] };
    const addressCnt =  (await addressDb.update(addressFilter,updateBody)).length;
    let updated = (await cityDb.update(filter,updateBody)).length;
    let result = {
      pincode :pincodeCnt ,
      address :addressCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  city : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
