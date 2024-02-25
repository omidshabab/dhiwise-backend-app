module.exports = (product) => {

  let newProduct = { 
    id: product.id,
    name: product.name,
    price: product.price,
    sellerId: product.sellerId,
    brand: product.brand,
    categoryId: product.categoryId,
    subCategoryId: product.subCategoryId,
    isActive: product.isActive,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    addedBy: product.addedBy,
    updatedBy: product.updatedBy,
    isDeleted: product.isDeleted,
  };

  // remove undefined values
  if (newProduct.id){
    Object.keys(newProduct).forEach(key =>{
      if (newProduct[key] === undefined) return newProduct[key] = null;
    });
  } else {
    Object.keys(newProduct).forEach(key => newProduct[key] === undefined && delete newProduct[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newProduct) => {
   *   if (!newProduct.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newProduct) 
   */
  return Object.freeze(newProduct);
};
