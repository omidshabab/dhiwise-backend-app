const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Cart = sequelize.define('cart',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    customerId:{ type:DataTypes.INTEGER },
    isVisible:{ type:DataTypes.BOOLEAN },
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
        async function (cart,options){
          cart.isActive = true;
          cart.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (cart,options){
          if (cart !== undefined && cart.length) { 
            for (let index = 0; index < cart.length; index++) { 
        
              const element = cart[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Cart.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Cart);
  sequelizePaginate.paginate(Cart);
  return Cart;
}
module.exports = makeModel;