let WalletTransaction = require('../db/sequelize/models').walletTransaction;
let {
  create,
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,
} = require('../db/sequelize/dbService')(WalletTransaction);

module.exports = {
  createOne,
  createMany,
  update,
  destroy,
  findOne,
  paginate,
  findAll,
  count,
  upsert,  
};