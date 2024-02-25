module.exports = (cartItem) => {

  let newCartItem = { 
    id: cartItem.id,
    productId: cartItem.productId,
    quantity: cartItem.quantity,
    price: cartItem.price,
    amount: cartItem.amount,
    cartId: cartItem.cartId,
    isActive: cartItem.isActive,
    createdAt: cartItem.createdAt,
    updatedAt: cartItem.updatedAt,
    addedBy: cartItem.addedBy,
    updatedBy: cartItem.updatedBy,
    isDeleted: cartItem.isDeleted,
  };

  // remove undefined values
  if (newCartItem.id){
    Object.keys(newCartItem).forEach(key =>{
      if (newCartItem[key] === undefined) return newCartItem[key] = null;
    });
  } else {
    Object.keys(newCartItem).forEach(key => newCartItem[key] === undefined && delete newCartItem[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newCartItem) => {
   *   if (!newCartItem.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newCartItem) 
   */
  return Object.freeze(newCartItem);
};
