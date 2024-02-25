const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const City = sequelize.define('city',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    cityName:{ type:DataTypes.STRING },
    stateId:{ type:DataTypes.INTEGER },
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
        async function (city,options){
          city.isActive = true;
          city.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (city,options){
          if (city !== undefined && city.length) { 
            for (let index = 0; index < city.length; index++) { 
        
              const element = city[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  City.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(City);
  sequelizePaginate.paginate(City);
  return City;
}
module.exports = makeModel;