const response = require('../../utils/response');

const getDependencyCount = ({
  cartDb,cartItemDb
})=> async (filter) =>{
  let cart = await cartDb.findAll(filter);
  if (cart.length){
    let cartIds = cart.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ cartId : { '$in' : cartIds } }] };
    const cartItemCnt =  await cartItemDb.count(cartItemFilter);
    let result = { cartItem :cartItemCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  cart : 0 }
    });
  }
};

const deleteWithDependency = ({
  cartDb,cartItemDb
})=> async (filter) =>{
  let cart = await cartDb.findAll(filter);
  if (cart.length){
    let cartIds = cart.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ cartId : { '$in' : cartIds } }] };
    const cartItemCnt =  (await cartItemDb.destroy(cartItemFilter)).length;
    let deleted = (await cartDb.destroy(filter)).length;
    let result = { cartItem :cartItemCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  cart : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  cartDb,cartItemDb
}) => async (filter,updateBody) =>{
  let cart = await cartDb.findAll(filter);
  if (cart.length){
    let cartIds = cart.map((obj) => obj.id);

    const cartItemFilter = { '$or': [{ cartId : { '$in' : cartIds } }] };
    const cartItemCnt =  (await cartItemDb.update(cartItemFilter,updateBody)).length;
    let updated = (await cartDb.update(filter,updateBody)).length;
    let result = { cartItem :cartItemCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  cart : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
