const response = require('../../utils/response');

const getDependencyCount = ({
  countryDb,stateDb,pincodeDb
})=> async (filter) =>{
  let country = await countryDb.findAll(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  await stateDb.count(stateFilter);

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);
    let result = {
      state :stateCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  country : 0 }
    });
  }
};

const deleteWithDependency = ({
  countryDb,stateDb,pincodeDb
})=> async (filter) =>{
  let country = await countryDb.findAll(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  (await stateDb.destroy(stateFilter)).length;

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  (await pincodeDb.destroy(pincodeFilter)).length;
    let deleted = (await countryDb.destroy(filter)).length;
    let result = {
      state :stateCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  countryDb,stateDb,pincodeDb
}) => async (filter,updateBody) =>{
  let country = await countryDb.findAll(filter);
  if (country.length){
    let countryIds = country.map((obj) => obj.id);

    const stateFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const stateCnt =  (await stateDb.update(stateFilter,updateBody)).length;

    const pincodeFilter = { '$or': [{ countryId : { '$in' : countryIds } }] };
    const pincodeCnt =  (await pincodeDb.update(pincodeFilter,updateBody)).length;
    let updated = (await countryDb.update(filter,updateBody)).length;
    let result = {
      state :stateCnt ,
      pincode :pincodeCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  country : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
