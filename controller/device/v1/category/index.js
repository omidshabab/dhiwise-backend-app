const categoryDb = require('../../../../data-access/categoryDb');
const productDb = require('../../../../data-access/productDb');
const categorySchema = require('../../../../validation/schema/category');
const createValidation = require('../../../../validation')(categorySchema.createSchema);
const updateValidation = require('../../../../validation')(categorySchema.updateSchema);
const filterValidation = require('../../../../validation')(categorySchema.filterValidationSchema);
const categoryController = require('./category');

// use-cases imports with dependency injection
const addCategoryUsecase = require('../../../../use-case/category/addCategory')({
  categoryDb,
  createValidation 
});
const findAllCategoryUsecase = require('../../../../use-case/category/findAllCategory')({
  categoryDb,
  filterValidation
});
const getCategoryCountUsecase = require('../../../../use-case/category/getCategoryCount')({
  categoryDb,
  filterValidation
});
const getCategoryUsecase = require('../../../../use-case/category/getCategory')({
  categoryDb,
  filterValidation
});
const updateCategoryUsecase = require('../../../../use-case/category/updateCategory')({
  categoryDb,
  updateValidation 
});
const partialUpdateCategoryUsecase = require('../../../../use-case/category/partialUpdateCategory')({
  categoryDb,
  updateValidation
});
const softDeleteCategoryUsecase = require('../../../../use-case/category/softDeleteCategory')({
  categoryDb,
  productDb
});
const softDeleteManyCategoryUsecase = require('../../../../use-case/category/softDeleteManyCategory')({
  categoryDb,
  productDb
});
const bulkInsertCategoryUsecase = require('../../../../use-case/category/bulkInsertCategory')({ categoryDb });
const bulkUpdateCategoryUsecase = require('../../../../use-case/category/bulkUpdateCategory')({ categoryDb });
const deleteCategoryUsecase = require('../../../../use-case/category/deleteCategory')({
  categoryDb,
  productDb
});
const deleteManyCategoryUsecase = require('../../../../use-case/category/deleteManyCategory')({
  categoryDb,
  productDb
});

// controller methods mapping
const addCategory = categoryController.addCategory(addCategoryUsecase);
const findAllCategory = categoryController.findAllCategory(findAllCategoryUsecase);
const getCategoryCount = categoryController.getCategoryCount(getCategoryCountUsecase);
const getCategoryById = categoryController.getCategory(getCategoryUsecase);
const updateCategory = categoryController.updateCategory(updateCategoryUsecase);
const partialUpdateCategory = categoryController.partialUpdateCategory(partialUpdateCategoryUsecase);
const softDeleteCategory = categoryController.softDeleteCategory(softDeleteCategoryUsecase);
const softDeleteManyCategory = categoryController.softDeleteManyCategory(softDeleteManyCategoryUsecase);
const bulkInsertCategory = categoryController.bulkInsertCategory(bulkInsertCategoryUsecase);
const bulkUpdateCategory = categoryController.bulkUpdateCategory(bulkUpdateCategoryUsecase);
const deleteCategory = categoryController.deleteCategory(deleteCategoryUsecase);
const deleteManyCategory = categoryController.deleteManyCategory(deleteManyCategoryUsecase);

module.exports = {
  addCategory,
  findAllCategory,
  getCategoryCount,
  getCategoryById,
  updateCategory,
  partialUpdateCategory,
  softDeleteCategory,
  softDeleteManyCategory,
  bulkInsertCategory,
  bulkUpdateCategory,
  deleteCategory,
  deleteManyCategory,
};