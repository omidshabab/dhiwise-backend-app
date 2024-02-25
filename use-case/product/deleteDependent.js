const response = require('../../utils/response');

const getDependencyCount = ({
  productDb,cartItemDb,orderItemDb
})=> async (filter) =>{
  let product = await productDb.findAll(filter);
  if (product.length){
    let productIds = product.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const cartItemCnt =  await cartItemDb.count(cartItemFilter);

    const orderItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const orderItemCnt =  await orderItemDb.count(orderItemFilter);
    let result = {
      cartItem :cartItemCnt ,
      orderItem :orderItemCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  product : 0 }
    });
  }
};

const deleteWithDependency = ({
  productDb,cartItemDb,orderItemDb
})=> async (filter) =>{
  let product = await productDb.findAll(filter);
  if (product.length){
    let productIds = product.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const cartItemCnt =  (await cartItemDb.destroy(cartItemFilter)).length;

    const orderItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const orderItemCnt =  (await orderItemDb.destroy(orderItemFilter)).length;
    let deleted = (await productDb.destroy(filter)).length;
    let result = {
      cartItem :cartItemCnt ,
      orderItem :orderItemCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  product : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  productDb,cartItemDb,orderItemDb
}) => async (filter,updateBody) =>{
  let product = await productDb.findAll(filter);
  if (product.length){
    let productIds = product.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const cartItemCnt =  (await cartItemDb.update(cartItemFilter,updateBody)).length;

    const orderItemFilter = { '$or': [{ productId : { '$in' : productIds } }] };
    const orderItemCnt =  (await orderItemDb.update(orderItemFilter,updateBody)).length;
    let updated = (await productDb.update(filter,updateBody)).length;
    let result = {
      cartItem :cartItemCnt ,
      orderItem :orderItemCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  product : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
