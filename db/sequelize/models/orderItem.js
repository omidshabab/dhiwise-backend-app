const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const OrderItem = sequelize.define('orderItem',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    orderId:{ type:DataTypes.INTEGER },
    productId:{ type:DataTypes.INTEGER },
    price:{ type:DataTypes.FLOAT },
    quantity:{ type:DataTypes.INTEGER },
    amount:{ type:DataTypes.FLOAT },
    isActive:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER },
    isDeleted:{ type:DataTypes.BOOLEAN }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (orderItem,options){
          orderItem.isActive = true;
          orderItem.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (orderItem,options){
          if (orderItem !== undefined && orderItem.length) { 
            for (let index = 0; index < orderItem.length; index++) { 
        
              const element = orderItem[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  OrderItem.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(OrderItem);
  sequelizePaginate.paginate(OrderItem);
  return OrderItem;
}
module.exports = makeModel;