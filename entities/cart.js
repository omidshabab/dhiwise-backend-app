module.exports = (cart) => {

  let newCart = { 
    id: cart.id,
    customerId: cart.customerId,
    isVisible: cart.isVisible,
    isActive: cart.isActive,
    createdAt: cart.createdAt,
    updatedAt: cart.updatedAt,
    addedBy: cart.addedBy,
    updatedBy: cart.updatedBy,
    isDeleted: cart.isDeleted,
  };

  // remove undefined values
  if (newCart.id){
    Object.keys(newCart).forEach(key =>{
      if (newCart[key] === undefined) return newCart[key] = null;
    });
  } else {
    Object.keys(newCart).forEach(key => newCart[key] === undefined && delete newCart[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newCart) => {
   *   if (!newCart.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newCart) 
   */
  return Object.freeze(newCart);
};
