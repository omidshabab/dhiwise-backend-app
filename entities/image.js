module.exports = (image) => {

  let newImage = { 
    id: image.id,
    filepath: image.filepath,
    bannerId: image.bannerId,
    isActive: image.isActive,
    createdAt: image.createdAt,
    updatedAt: image.updatedAt,
    addedBy: image.addedBy,
    updatedBy: image.updatedBy,
    isDeleted: image.isDeleted,
  };

  // remove undefined values
  if (newImage.id){
    Object.keys(newImage).forEach(key =>{
      if (newImage[key] === undefined) return newImage[key] = null;
    });
  } else {
    Object.keys(newImage).forEach(key => newImage[key] === undefined && delete newImage[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newImage) => {
   *   if (!newImage.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newImage) 
   */
  return Object.freeze(newImage);
};
