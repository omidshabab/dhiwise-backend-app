const productDb = require('../../../../data-access/productDb');
const cartItemDb = require('../../../../data-access/cartItemDb');
const orderItemDb = require('../../../../data-access/orderItemDb');
const productSchema = require('../../../../validation/schema/product');
const createValidation = require('../../../../validation')(productSchema.createSchema);
const updateValidation = require('../../../../validation')(productSchema.updateSchema);
const filterValidation = require('../../../../validation')(productSchema.filterValidationSchema);
const productController = require('./product');

// use-cases imports with dependency injection
const addProductUsecase = require('../../../../use-case/product/addProduct')({
  productDb,
  createValidation 
});
const findAllProductUsecase = require('../../../../use-case/product/findAllProduct')({
  productDb,
  filterValidation
});
const getProductCountUsecase = require('../../../../use-case/product/getProductCount')({
  productDb,
  filterValidation
});
const getProductUsecase = require('../../../../use-case/product/getProduct')({
  productDb,
  filterValidation
});
const updateProductUsecase = require('../../../../use-case/product/updateProduct')({
  productDb,
  updateValidation 
});
const partialUpdateProductUsecase = require('../../../../use-case/product/partialUpdateProduct')({
  productDb,
  updateValidation
});
const softDeleteProductUsecase = require('../../../../use-case/product/softDeleteProduct')({
  productDb,
  cartItemDb,
  orderItemDb
});
const softDeleteManyProductUsecase = require('../../../../use-case/product/softDeleteManyProduct')({
  productDb,
  cartItemDb,
  orderItemDb
});
const bulkInsertProductUsecase = require('../../../../use-case/product/bulkInsertProduct')({ productDb });
const bulkUpdateProductUsecase = require('../../../../use-case/product/bulkUpdateProduct')({ productDb });
const deleteProductUsecase = require('../../../../use-case/product/deleteProduct')({
  productDb,
  cartItemDb,
  orderItemDb
});
const deleteManyProductUsecase = require('../../../../use-case/product/deleteManyProduct')({
  productDb,
  cartItemDb,
  orderItemDb
});

// controller methods mapping
const addProduct = productController.addProduct(addProductUsecase);
const findAllProduct = productController.findAllProduct(findAllProductUsecase);
const getProductCount = productController.getProductCount(getProductCountUsecase);
const getProductById = productController.getProduct(getProductUsecase);
const updateProduct = productController.updateProduct(updateProductUsecase);
const partialUpdateProduct = productController.partialUpdateProduct(partialUpdateProductUsecase);
const softDeleteProduct = productController.softDeleteProduct(softDeleteProductUsecase);
const softDeleteManyProduct = productController.softDeleteManyProduct(softDeleteManyProductUsecase);
const bulkInsertProduct = productController.bulkInsertProduct(bulkInsertProductUsecase);
const bulkUpdateProduct = productController.bulkUpdateProduct(bulkUpdateProductUsecase);
const deleteProduct = productController.deleteProduct(deleteProductUsecase);
const deleteManyProduct = productController.deleteManyProduct(deleteManyProductUsecase);

module.exports = {
  addProduct,
  findAllProduct,
  getProductCount,
  getProductById,
  updateProduct,
  partialUpdateProduct,
  softDeleteProduct,
  softDeleteManyProduct,
  bulkInsertProduct,
  bulkUpdateProduct,
  deleteProduct,
  deleteManyProduct,
};