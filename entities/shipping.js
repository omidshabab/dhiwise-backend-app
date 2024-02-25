module.exports = (shipping) => {

  let newShipping = { 
    id: shipping.id,
    orderId: shipping.orderId,
    courierCompany: shipping.courierCompany,
    deliveryStartDate: shipping.deliveryStartDate,
    estimatedDeliveryDate: shipping.estimatedDeliveryDate,
    actualDeliveryDate: shipping.actualDeliveryDate,
    isPrepaid: shipping.isPrepaid,
    isReturned: shipping.isReturned,
    returningReason: shipping.returningReason,
    returnPickupDate: shipping.returnPickupDate,
    isReturnDamaged: shipping.isReturnDamaged,
    returnRecievedDate: shipping.returnRecievedDate,
    shippingStatus: shipping.shippingStatus,
    isActive: shipping.isActive,
    createdAt: shipping.createdAt,
    updatedAt: shipping.updatedAt,
    addedBy: shipping.addedBy,
    updatedBy: shipping.updatedBy,
    isDeleted: shipping.isDeleted,
  };

  // remove undefined values
  if (newShipping.id){
    Object.keys(newShipping).forEach(key =>{
      if (newShipping[key] === undefined) return newShipping[key] = null;
    });
  } else {
    Object.keys(newShipping).forEach(key => newShipping[key] === undefined && delete newShipping[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newShipping) => {
   *   if (!newShipping.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newShipping) 
   */
  return Object.freeze(newShipping);
};
