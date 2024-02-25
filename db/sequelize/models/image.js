const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Image = sequelize.define('image',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    filepath:{ type:DataTypes.STRING },
    bannerId:{ type:DataTypes.INTEGER },
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
        async function (image,options){
          image.isActive = true;
          image.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (image,options){
          if (image !== undefined && image.length) { 
            for (let index = 0; index < image.length; index++) { 
        
              const element = image[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Image.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Image);
  sequelizePaginate.paginate(Image);
  return Image;
}
module.exports = makeModel;