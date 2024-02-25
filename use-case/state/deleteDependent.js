const response = require('../../utils/response');

const getDependencyCount = ({
  stateDb,cityDb,pincodeDb,addressDb
})=> async (filter) =>{
  let state = await stateDb.findAll(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  await cityDb.count(cityFilter);

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);

    const addressFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const addressCnt =  await addressDb.count(addressFilter);
    let result = {
      city :cityCnt ,
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
      data: {  state : 0 }
    });
  }
};

const deleteWithDependency = ({
  stateDb,cityDb,pincodeDb,addressDb
})=> async (filter) =>{
  let state = await stateDb.findAll(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  (await cityDb.destroy(cityFilter)).length;

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  (await pincodeDb.destroy(pincodeFilter)).length;

    const addressFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const addressCnt =  (await addressDb.destroy(addressFilter)).length;
    let deleted = (await stateDb.destroy(filter)).length;
    let result = {
      city :cityCnt ,
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
      data: {  state : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  stateDb,cityDb,pincodeDb,addressDb
}) => async (filter,updateBody) =>{
  let state = await stateDb.findAll(filter);
  if (state.length){
    let stateIds = state.map((obj) => obj.id);

    const cityFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const cityCnt =  (await cityDb.update(cityFilter,updateBody)).length;

    const pincodeFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const pincodeCnt =  (await pincodeDb.update(pincodeFilter,updateBody)).length;

    const addressFilter = { '$or': [{ stateId : { '$in' : stateIds } }] };
    const addressCnt =  (await addressDb.update(addressFilter,updateBody)).length;
    let updated = (await stateDb.update(filter,updateBody)).length;
    let result = {
      city :cityCnt ,
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
      data: {  state : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
