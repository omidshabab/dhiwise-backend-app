const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,bannerDb,imageDb,cartDb,cartItemDb,categoryDb,cityDb,stateDb,countryDb,orderDb,orderItemDb,pincodeDb,productDb,shippingDb,addressDb,walletDb,walletTransactionDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const bannerFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const bannerCnt =  await bannerDb.count(bannerFilter);

    const imageFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const imageCnt =  await imageDb.count(imageFilter);

    const cartFilter = { '$or': [{ customerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  await cartDb.count(cartFilter);

    const cartItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartItemCnt =  await cartItemDb.count(cartItemFilter);

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  await categoryDb.count(categoryFilter);

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  await cityDb.count(cityFilter);

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  await stateDb.count(stateFilter);

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  await countryDb.count(countryFilter);

    const orderFilter = { '$or': [{ customerId : { '$in' : userIds } },{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  await orderDb.count(orderFilter);

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  await orderItemDb.count(orderItemFilter);

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  await pincodeDb.count(pincodeFilter);

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  await productDb.count(productFilter);

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  await shippingDb.count(shippingFilter);

    const addressFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const addressCnt =  await addressDb.count(addressFilter);

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  await walletDb.count(walletFilter);

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  await walletTransactionDb.count(walletTransactionFilter);

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  await userAuthSettingsDb.count(userAuthSettingsFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      user :userCnt + 1,
      banner :bannerCnt ,
      image :imageCnt ,
      cart :cartCnt ,
      cartItem :cartItemCnt ,
      category :categoryCnt ,
      city :cityCnt ,
      state :stateCnt ,
      country :countryCnt ,
      order :orderCnt ,
      orderItem :orderItemCnt ,
      pincode :pincodeCnt ,
      product :productCnt ,
      shipping :shippingCnt ,
      address :addressCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,bannerDb,imageDb,cartDb,cartItemDb,categoryDb,cityDb,stateDb,countryDb,orderDb,orderItemDb,pincodeDb,productDb,shippingDb,addressDb,walletDb,walletTransactionDb,userAuthSettingsDb,userTokensDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.destroy(userFilter)).length;

    const bannerFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const bannerCnt =  (await bannerDb.destroy(bannerFilter)).length;

    const imageFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const imageCnt =  (await imageDb.destroy(imageFilter)).length;

    const cartFilter = { '$or': [{ customerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  (await cartDb.destroy(cartFilter)).length;

    const cartItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartItemCnt =  (await cartItemDb.destroy(cartItemFilter)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.destroy(categoryFilter)).length;

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  (await cityDb.destroy(cityFilter)).length;

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  (await stateDb.destroy(stateFilter)).length;

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.destroy(countryFilter)).length;

    const orderFilter = { '$or': [{ customerId : { '$in' : userIds } },{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.destroy(orderFilter)).length;

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.destroy(orderItemFilter)).length;

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  (await pincodeDb.destroy(pincodeFilter)).length;

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.destroy(productFilter)).length;

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  (await shippingDb.destroy(shippingFilter)).length;

    const addressFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const addressCnt =  (await addressDb.destroy(addressFilter)).length;

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  (await walletDb.destroy(walletFilter)).length;

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.destroy(walletTransactionFilter)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.destroy(userAuthSettingsFilter)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.destroy(userTokensFilter)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.destroy(userRoleFilter)).length;
    let deleted = (await userDb.destroy(filter)).length;
    let result = {
      user :userCnt + deleted,
      banner :bannerCnt ,
      image :imageCnt ,
      cart :cartCnt ,
      cartItem :cartItemCnt ,
      category :categoryCnt ,
      city :cityCnt ,
      state :stateCnt ,
      country :countryCnt ,
      order :orderCnt ,
      orderItem :orderItemCnt ,
      pincode :pincodeCnt ,
      product :productCnt ,
      shipping :shippingCnt ,
      address :addressCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,bannerDb,imageDb,cartDb,cartItemDb,categoryDb,cityDb,stateDb,countryDb,orderDb,orderItemDb,pincodeDb,productDb,shippingDb,addressDb,walletDb,walletTransactionDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findAll(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.update(userFilter,updateBody)).length;

    const bannerFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const bannerCnt =  (await bannerDb.update(bannerFilter,updateBody)).length;

    const imageFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const imageCnt =  (await imageDb.update(imageFilter,updateBody)).length;

    const cartFilter = { '$or': [{ customerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartCnt =  (await cartDb.update(cartFilter,updateBody)).length;

    const cartItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cartItemCnt =  (await cartItemDb.update(cartItemFilter,updateBody)).length;

    const categoryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const categoryCnt =  (await categoryDb.update(categoryFilter,updateBody)).length;

    const cityFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const cityCnt =  (await cityDb.update(cityFilter,updateBody)).length;

    const stateFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const stateCnt =  (await stateDb.update(stateFilter,updateBody)).length;

    const countryFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const countryCnt =  (await countryDb.update(countryFilter,updateBody)).length;

    const orderFilter = { '$or': [{ customerId : { '$in' : userIds } },{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.update(orderFilter,updateBody)).length;

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.update(orderItemFilter,updateBody)).length;

    const pincodeFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const pincodeCnt =  (await pincodeDb.update(pincodeFilter,updateBody)).length;

    const productFilter = { '$or': [{ sellerId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const productCnt =  (await productDb.update(productFilter,updateBody)).length;

    const shippingFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const shippingCnt =  (await shippingDb.update(shippingFilter,updateBody)).length;

    const addressFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const addressCnt =  (await addressDb.update(addressFilter,updateBody)).length;

    const walletFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletCnt =  (await walletDb.update(walletFilter,updateBody)).length;

    const walletTransactionFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const walletTransactionCnt =  (await walletTransactionDb.update(walletTransactionFilter,updateBody)).length;

    const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userAuthSettingsCnt =  (await userAuthSettingsDb.update(userAuthSettingsFilter,updateBody)).length;

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.update(userTokensFilter,updateBody)).length;

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.update(userRoleFilter,updateBody)).length;
    let updated = (await userDb.update(filter,updateBody)).length;
    let result = {
      user :userCnt + updated,
      banner :bannerCnt ,
      image :imageCnt ,
      cart :cartCnt ,
      cartItem :cartItemCnt ,
      category :categoryCnt ,
      city :cityCnt ,
      state :stateCnt ,
      country :countryCnt ,
      order :orderCnt ,
      orderItem :orderItemCnt ,
      pincode :pincodeCnt ,
      product :productCnt ,
      shipping :shippingCnt ,
      address :addressCnt ,
      wallet :walletCnt ,
      walletTransaction :walletTransactionCnt ,
      userAuthSettings :userAuthSettingsCnt ,
      userTokens :userTokensCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
