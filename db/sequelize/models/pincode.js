const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Pincode = sequelize.define('pincode',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    pincode:{ type:DataTypes.STRING },
    cityId:{ type:DataTypes.INTEGER },
    stateId:{ type:DataTypes.INTEGER },
    countryId:{ type:DataTypes.INTEGER },
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
        async function (pincode,options){
          pincode.isActive = true;
          pincode.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (pincode,options){
          if (pincode !== undefined && pincode.length) { 
            for (let index = 0; index < pincode.length; index++) { 
        
              const element = pincode[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Pincode.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Pincode);
  sequelizePaginate.paginate(Pincode);
  return Pincode;
}
module.exports = makeModel;