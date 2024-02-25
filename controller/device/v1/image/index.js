const imageDb = require('../../../../data-access/imageDb');
const imageSchema = require('../../../../validation/schema/image');
const createValidation = require('../../../../validation')(imageSchema.createSchema);
const updateValidation = require('../../../../validation')(imageSchema.updateSchema);
const filterValidation = require('../../../../validation')(imageSchema.filterValidationSchema);
const imageController = require('./image');

// use-cases imports with dependency injection
const addImageUsecase = require('../../../../use-case/image/addImage')({
  imageDb,
  createValidation 
});
const findAllImageUsecase = require('../../../../use-case/image/findAllImage')({
  imageDb,
  filterValidation
});
const getImageCountUsecase = require('../../../../use-case/image/getImageCount')({
  imageDb,
  filterValidation
});
const getImageUsecase = require('../../../../use-case/image/getImage')({
  imageDb,
  filterValidation
});
const updateImageUsecase = require('../../../../use-case/image/updateImage')({
  imageDb,
  updateValidation 
});
const partialUpdateImageUsecase = require('../../../../use-case/image/partialUpdateImage')({
  imageDb,
  updateValidation
});
const softDeleteImageUsecase = require('../../../../use-case/image/softDeleteImage')({ imageDb });
const softDeleteManyImageUsecase = require('../../../../use-case/image/softDeleteManyImage')({ imageDb });
const bulkInsertImageUsecase = require('../../../../use-case/image/bulkInsertImage')({ imageDb });
const bulkUpdateImageUsecase = require('../../../../use-case/image/bulkUpdateImage')({ imageDb });
const deleteImageUsecase = require('../../../../use-case/image/deleteImage')({ imageDb });
const deleteManyImageUsecase = require('../../../../use-case/image/deleteManyImage')({ imageDb });

// controller methods mapping
const addImage = imageController.addImage(addImageUsecase);
const findAllImage = imageController.findAllImage(findAllImageUsecase);
const getImageCount = imageController.getImageCount(getImageCountUsecase);
const getImageById = imageController.getImage(getImageUsecase);
const updateImage = imageController.updateImage(updateImageUsecase);
const partialUpdateImage = imageController.partialUpdateImage(partialUpdateImageUsecase);
const softDeleteImage = imageController.softDeleteImage(softDeleteImageUsecase);
const softDeleteManyImage = imageController.softDeleteManyImage(softDeleteManyImageUsecase);
const bulkInsertImage = imageController.bulkInsertImage(bulkInsertImageUsecase);
const bulkUpdateImage = imageController.bulkUpdateImage(bulkUpdateImageUsecase);
const deleteImage = imageController.deleteImage(deleteImageUsecase);
const deleteManyImage = imageController.deleteManyImage(deleteManyImageUsecase);

module.exports = {
  addImage,
  findAllImage,
  getImageCount,
  getImageById,
  updateImage,
  partialUpdateImage,
  softDeleteImage,
  softDeleteManyImage,
  bulkInsertImage,
  bulkUpdateImage,
  deleteImage,
  deleteManyImage,
};