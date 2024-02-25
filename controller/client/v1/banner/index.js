const bannerDb = require('../../../../data-access/bannerDb');
const imageDb = require('../../../../data-access/imageDb');
const bannerSchema = require('../../../../validation/schema/banner');
const createValidation = require('../../../../validation')(bannerSchema.createSchema);
const updateValidation = require('../../../../validation')(bannerSchema.updateSchema);
const filterValidation = require('../../../../validation')(bannerSchema.filterValidationSchema);
const bannerController = require('./banner');

// use-cases imports with dependency injection
const addBannerUsecase = require('../../../../use-case/banner/addBanner')({
  bannerDb,
  createValidation 
});
const findAllBannerUsecase = require('../../../../use-case/banner/findAllBanner')({
  bannerDb,
  filterValidation
});
const getBannerCountUsecase = require('../../../../use-case/banner/getBannerCount')({
  bannerDb,
  filterValidation
});
const getBannerUsecase = require('../../../../use-case/banner/getBanner')({
  bannerDb,
  filterValidation
});
const updateBannerUsecase = require('../../../../use-case/banner/updateBanner')({
  bannerDb,
  updateValidation 
});
const partialUpdateBannerUsecase = require('../../../../use-case/banner/partialUpdateBanner')({
  bannerDb,
  updateValidation
});
const softDeleteBannerUsecase = require('../../../../use-case/banner/softDeleteBanner')({
  bannerDb,
  imageDb
});
const softDeleteManyBannerUsecase = require('../../../../use-case/banner/softDeleteManyBanner')({
  bannerDb,
  imageDb
});
const bulkInsertBannerUsecase = require('../../../../use-case/banner/bulkInsertBanner')({ bannerDb });
const bulkUpdateBannerUsecase = require('../../../../use-case/banner/bulkUpdateBanner')({ bannerDb });
const deleteBannerUsecase = require('../../../../use-case/banner/deleteBanner')({
  bannerDb,
  imageDb
});
const deleteManyBannerUsecase = require('../../../../use-case/banner/deleteManyBanner')({
  bannerDb,
  imageDb
});

// controller methods mapping
const addBanner = bannerController.addBanner(addBannerUsecase);
const findAllBanner = bannerController.findAllBanner(findAllBannerUsecase);
const getBannerCount = bannerController.getBannerCount(getBannerCountUsecase);
const getBannerById = bannerController.getBanner(getBannerUsecase);
const updateBanner = bannerController.updateBanner(updateBannerUsecase);
const partialUpdateBanner = bannerController.partialUpdateBanner(partialUpdateBannerUsecase);
const softDeleteBanner = bannerController.softDeleteBanner(softDeleteBannerUsecase);
const softDeleteManyBanner = bannerController.softDeleteManyBanner(softDeleteManyBannerUsecase);
const bulkInsertBanner = bannerController.bulkInsertBanner(bulkInsertBannerUsecase);
const bulkUpdateBanner = bannerController.bulkUpdateBanner(bulkUpdateBannerUsecase);
const deleteBanner = bannerController.deleteBanner(deleteBannerUsecase);
const deleteManyBanner = bannerController.deleteManyBanner(deleteManyBannerUsecase);

module.exports = {
  addBanner,
  findAllBanner,
  getBannerCount,
  getBannerById,
  updateBanner,
  partialUpdateBanner,
  softDeleteBanner,
  softDeleteManyBanner,
  bulkInsertBanner,
  bulkUpdateBanner,
  deleteBanner,
  deleteManyBanner,
};