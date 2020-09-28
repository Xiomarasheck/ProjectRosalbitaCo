'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price:  DataTypes.INTEGER,
    image:DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Category,{
      as:'Category',
      foreignKey:'category_id'
    });
  };


  return Product;
};