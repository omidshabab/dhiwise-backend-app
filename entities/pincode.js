module.exports = (pincode) => {

  let newPincode = { 
    id: pincode.id,
    pincode: pincode.pincode,
    cityId: pincode.cityId,
    stateId: pincode.stateId,
    countryId: pincode.countryId,
    isActive: pincode.isActive,
    createdAt: pincode.createdAt,
    updatedAt: pincode.updatedAt,
    addedBy: pincode.addedBy,
    updatedBy: pincode.updatedBy,
    isDeleted: pincode.isDeleted,
  };

  // remove undefined values
  if (newPincode.id){
    Object.keys(newPincode).forEach(key =>{
      if (newPincode[key] === undefined) return newPincode[key] = null;
    });
  } else {
    Object.keys(newPincode).forEach(key => newPincode[key] === undefined && delete newPincode[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newPincode) => {
   *   if (!newPincode.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newPincode) 
   */
  return Object.freeze(newPincode);
};
