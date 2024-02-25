module.exports = (address) => {

  let newAddress = { 
    id: address.id,
    pincodeId: address.pincodeId,
    address1: address.address1,
    address2: address.address2,
    landmark: address.landmark,
    cityId: address.cityId,
    isDefault: address.isDefault,
    stateId: address.stateId,
    addressType: address.addressType,
    fullName: address.fullName,
    addressNo: address.addressNo,
    isActive: address.isActive,
    createdAt: address.createdAt,
    updatedAt: address.updatedAt,
    addedBy: address.addedBy,
    updatedBy: address.updatedBy,
    mobile: address.mobile,
    shippingId: address.shippingId,
    isDeleted: address.isDeleted,
  };

  // remove undefined values
  if (newAddress.id){
    Object.keys(newAddress).forEach(key =>{
      if (newAddress[key] === undefined) return newAddress[key] = null;
    });
  } else {
    Object.keys(newAddress).forEach(key => newAddress[key] === undefined && delete newAddress[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newAddress) => {
   *   if (!newAddress.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newAddress) 
   */
  return Object.freeze(newAddress);
};
