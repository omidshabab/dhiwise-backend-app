const response = require('../../utils/response');

const getDependencyCount = ({
  orderDb,orderItemDb,shippingDb
})=> async (filter) =>{
  let order = await orderDb.findAll(filter);
  if (order.length){
    let orderIds = order.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const orderItemCnt =  await orderItemDb.count(orderItemFilter);

    const shippingFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const shippingCnt =  await shippingDb.count(shippingFilter);
    let result = {
      orderItem :orderItemCnt ,
      shipping :shippingCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  order : 0 }
    });
  }
};

const deleteWithDependency = ({
  orderDb,orderItemDb,shippingDb
})=> async (filter) =>{
  let order = await orderDb.findAll(filter);
  if (order.length){
    let orderIds = order.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const orderItemCnt =  (await orderItemDb.destroy(orderItemFilter)).length;

    const shippingFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const shippingCnt =  (await shippingDb.destroy(shippingFilter)).length;
    let deleted = (await orderDb.destroy(filter)).length;
    let result = {
      orderItem :orderItemCnt ,
      shipping :shippingCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  order : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  orderDb,orderItemDb,shippingDb
}) => async (filter,updateBody) =>{
  let order = await orderDb.findAll(filter);
  if (order.length){
    let orderIds = order.map((obj) => obj.id);

    const orderItemFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const orderItemCnt =  (await orderItemDb.update(orderItemFilter,updateBody)).length;

    const shippingFilter = { '$or': [{ orderId : { '$in' : orderIds } }] };
    const shippingCnt =  (await shippingDb.update(shippingFilter,updateBody)).length;
    let updated = (await orderDb.update(filter,updateBody)).length;
    let result = {
      orderItem :orderItemCnt ,
      shipping :shippingCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  order : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
