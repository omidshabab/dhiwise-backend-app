module.exports = (orderItem) => {

  let newOrderItem = { 
    id: orderItem.id,
    orderId: orderItem.orderId,
    productId: orderItem.productId,
    price: orderItem.price,
    quantity: orderItem.quantity,
    amount: orderItem.amount,
    isActive: orderItem.isActive,
    createdAt: orderItem.createdAt,
    updatedAt: orderItem.updatedAt,
    addedBy: orderItem.addedBy,
    updatedBy: orderItem.updatedBy,
    isDeleted: orderItem.isDeleted,
  };

  // remove undefined values
  if (newOrderItem.id){
    Object.keys(newOrderItem).forEach(key =>{
      if (newOrderItem[key] === undefined) return newOrderItem[key] = null;
    });
  } else {
    Object.keys(newOrderItem).forEach(key => newOrderItem[key] === undefined && delete newOrderItem[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newOrderItem) => {
   *   if (!newOrderItem.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newOrderItem) 
   */
  return Object.freeze(newOrderItem);
};
