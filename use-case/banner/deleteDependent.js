const response = require('../../utils/response');

const getDependencyCount = ({
  bannerDb,imageDb
})=> async (filter) =>{
  let banner = await bannerDb.findAll(filter);
  if (banner.length){
    let bannerIds = banner.map((obj) => obj.id);

    const imageFilter = { '$or': [{ bannerId : { '$in' : bannerIds } }] };
    const imageCnt =  await imageDb.count(imageFilter);
    let result = { image :imageCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  banner : 0 }
    });
  }
};

const deleteWithDependency = ({
  bannerDb,imageDb
})=> async (filter) =>{
  let banner = await bannerDb.findAll(filter);
  if (banner.length){
    let bannerIds = banner.map((obj) => obj.id);

    const imageFilter = { '$or': [{ bannerId : { '$in' : bannerIds } }] };
    const imageCnt =  (await imageDb.destroy(imageFilter)).length;
    let deleted = (await bannerDb.destroy(filter)).length;
    let result = { image :imageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  banner : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  bannerDb,imageDb
}) => async (filter,updateBody) =>{
  let banner = await bannerDb.findAll(filter);
  if (banner.length){
    let bannerIds = banner.map((obj) => obj.id);

    const imageFilter = { '$or': [{ bannerId : { '$in' : bannerIds } }] };
    const imageCnt =  (await imageDb.update(imageFilter,updateBody)).length;
    let updated = (await bannerDb.update(filter,updateBody)).length;
    let result = { image :imageCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  banner : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
