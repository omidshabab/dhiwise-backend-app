module.exports = (banner) => {

  let newBanner = { 
    id: banner.id,
    bannerTitle: banner.bannerTitle,
    alternateTitle: banner.alternateTitle,
    startDate: banner.startDate,
    endDate: banner.endDate,
    redirectLink: banner.redirectLink,
    sellerId: banner.sellerId,
    isActive: banner.isActive,
    createdAt: banner.createdAt,
    updatedAt: banner.updatedAt,
    addedBy: banner.addedBy,
    updatedBy: banner.updatedBy,
    isDeleted: banner.isDeleted,
  };

  // remove undefined values
  if (newBanner.id){
    Object.keys(newBanner).forEach(key =>{
      if (newBanner[key] === undefined) return newBanner[key] = null;
    });
  } else {
    Object.keys(newBanner).forEach(key => newBanner[key] === undefined && delete newBanner[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newBanner) => {
   *   if (!newBanner.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newBanner) 
   */
  return Object.freeze(newBanner);
};
