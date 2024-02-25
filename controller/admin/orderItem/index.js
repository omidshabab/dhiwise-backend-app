const orderItemDb = require('../../../data-access/orderItemDb');
const orderItemSchema = require('../../../validation/schema/orderItem');
const createValidation = require('../../../validation')(orderItemSchema.createSchema);
const updateValidation = require('../../../validation')(orderItemSchema.updateSchema);
const filterValidation = require('../../../validation')(orderItemSchema.filterValidationSchema);
const orderItemController = require('./orderItem');

// use-cases imports with dependency injection
const addOrderItemUsecase = require('../../../use-case/orderItem/addOrderItem')({
  orderItemDb,
  createValidation 
});
const findAllOrderItemUsecase = require('../../../use-case/orderItem/findAllOrderItem')({
  orderItemDb,
  filterValidation
});
const getOrderItemCountUsecase = require('../../../use-case/orderItem/getOrderItemCount')({
  orderItemDb,
  filterValidation
});
const getOrderItemUsecase = require('../../../use-case/orderItem/getOrderItem')({
  orderItemDb,
  filterValidation
});
const updateOrderItemUsecase = require('../../../use-case/orderItem/updateOrderItem')({
  orderItemDb,
  updateValidation 
});
const partialUpdateOrderItemUsecase = require('../../../use-case/orderItem/partialUpdateOrderItem')({
  orderItemDb,
  updateValidation
});
const softDeleteOrderItemUsecase = require('../../../use-case/orderItem/softDeleteOrderItem')({ orderItemDb });
const softDeleteManyOrderItemUsecase = require('../../../use-case/orderItem/softDeleteManyOrderItem')({ orderItemDb });
const bulkInsertOrderItemUsecase = require('../../../use-case/orderItem/bulkInsertOrderItem')({ orderItemDb });
const bulkUpdateOrderItemUsecase = require('../../../use-case/orderItem/bulkUpdateOrderItem')({ orderItemDb });
const deleteOrderItemUsecase = require('../../../use-case/orderItem/deleteOrderItem')({ orderItemDb });
const deleteManyOrderItemUsecase = require('../../../use-case/orderItem/deleteManyOrderItem')({ orderItemDb });

// controller methods mapping
const addOrderItem = orderItemController.addOrderItem(addOrderItemUsecase);
const findAllOrderItem = orderItemController.findAllOrderItem(findAllOrderItemUsecase);
const getOrderItemCount = orderItemController.getOrderItemCount(getOrderItemCountUsecase);
const getOrderItemById = orderItemController.getOrderItem(getOrderItemUsecase);
const updateOrderItem = orderItemController.updateOrderItem(updateOrderItemUsecase);
const partialUpdateOrderItem = orderItemController.partialUpdateOrderItem(partialUpdateOrderItemUsecase);
const softDeleteOrderItem = orderItemController.softDeleteOrderItem(softDeleteOrderItemUsecase);
const softDeleteManyOrderItem = orderItemController.softDeleteManyOrderItem(softDeleteManyOrderItemUsecase);
const bulkInsertOrderItem = orderItemController.bulkInsertOrderItem(bulkInsertOrderItemUsecase);
const bulkUpdateOrderItem = orderItemController.bulkUpdateOrderItem(bulkUpdateOrderItemUsecase);
const deleteOrderItem = orderItemController.deleteOrderItem(deleteOrderItemUsecase);
const deleteManyOrderItem = orderItemController.deleteManyOrderItem(deleteManyOrderItemUsecase);

module.exports = {
  addOrderItem,
  findAllOrderItem,
  getOrderItemCount,
  getOrderItemById,
  updateOrderItem,
  partialUpdateOrderItem,
  softDeleteOrderItem,
  softDeleteManyOrderItem,
  bulkInsertOrderItem,
  bulkUpdateOrderItem,
  deleteOrderItem,
  deleteManyOrderItem,
};