module.exports = (country) => {

  let newCountry = { 
    id: country.id,
    countryName: country.countryName,
    isActive: country.isActive,
    phoneCode: country.phoneCode,
    createdAt: country.createdAt,
    updatedAt: country.updatedAt,
    addedBy: country.addedBy,
    updatedBy: country.updatedBy,
    isDeleted: country.isDeleted,
  };

  // remove undefined values
  if (newCountry.id){
    Object.keys(newCountry).forEach(key =>{
      if (newCountry[key] === undefined) return newCountry[key] = null;
    });
  } else {
    Object.keys(newCountry).forEach(key => newCountry[key] === undefined && delete newCountry[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newCountry) => {
   *   if (!newCountry.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newCountry) 
   */
  return Object.freeze(newCountry);
};
