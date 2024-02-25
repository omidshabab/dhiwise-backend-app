const cartItemDb = require('../../../data-access/cartItemDb');
const cartItemSchema = require('../../../validation/schema/cartItem');
const createValidation = require('../../../validation')(cartItemSchema.createSchema);
const updateValidation = require('../../../validation')(cartItemSchema.updateSchema);
const filterValidation = require('../../../validation')(cartItemSchema.filterValidationSchema);
const cartItemController = require('./cartItem');

// use-cases imports with dependency injection
const addCartItemUsecase = require('../../../use-case/cartItem/addCartItem')({
  cartItemDb,
  createValidation 
});
const findAllCartItemUsecase = require('../../../use-case/cartItem/findAllCartItem')({
  cartItemDb,
  filterValidation
});
const getCartItemCountUsecase = require('../../../use-case/cartItem/getCartItemCount')({
  cartItemDb,
  filterValidation
});
const getCartItemUsecase = require('../../../use-case/cartItem/getCartItem')({
  cartItemDb,
  filterValidation
});
const updateCartItemUsecase = require('../../../use-case/cartItem/updateCartItem')({
  cartItemDb,
  updateValidation 
});
const partialUpdateCartItemUsecase = require('../../../use-case/cartItem/partialUpdateCartItem')({
  cartItemDb,
  updateValidation
});
const softDeleteCartItemUsecase = require('../../../use-case/cartItem/softDeleteCartItem')({ cartItemDb });
const softDeleteManyCartItemUsecase = require('../../../use-case/cartItem/softDeleteManyCartItem')({ cartItemDb });
const bulkInsertCartItemUsecase = require('../../../use-case/cartItem/bulkInsertCartItem')({ cartItemDb });
const bulkUpdateCartItemUsecase = require('../../../use-case/cartItem/bulkUpdateCartItem')({ cartItemDb });
const deleteCartItemUsecase = require('../../../use-case/cartItem/deleteCartItem')({ cartItemDb });
const deleteManyCartItemUsecase = require('../../../use-case/cartItem/deleteManyCartItem')({ cartItemDb });

// controller methods mapping
const addCartItem = cartItemController.addCartItem(addCartItemUsecase);
const findAllCartItem = cartItemController.findAllCartItem(findAllCartItemUsecase);
const getCartItemCount = cartItemController.getCartItemCount(getCartItemCountUsecase);
const getCartItemById = cartItemController.getCartItem(getCartItemUsecase);
const updateCartItem = cartItemController.updateCartItem(updateCartItemUsecase);
const partialUpdateCartItem = cartItemController.partialUpdateCartItem(partialUpdateCartItemUsecase);
const softDeleteCartItem = cartItemController.softDeleteCartItem(softDeleteCartItemUsecase);
const softDeleteManyCartItem = cartItemController.softDeleteManyCartItem(softDeleteManyCartItemUsecase);
const bulkInsertCartItem = cartItemController.bulkInsertCartItem(bulkInsertCartItemUsecase);
const bulkUpdateCartItem = cartItemController.bulkUpdateCartItem(bulkUpdateCartItemUsecase);
const deleteCartItem = cartItemController.deleteCartItem(deleteCartItemUsecase);
const deleteManyCartItem = cartItemController.deleteManyCartItem(deleteManyCartItemUsecase);

module.exports = {
  addCartItem,
  findAllCartItem,
  getCartItemCount,
  getCartItemById,
  updateCartItem,
  partialUpdateCartItem,
  softDeleteCartItem,
  softDeleteManyCartItem,
  bulkInsertCartItem,
  bulkUpdateCartItem,
  deleteCartItem,
  deleteManyCartItem,
};