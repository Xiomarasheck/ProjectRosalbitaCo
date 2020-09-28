'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderDetail.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });

  OrderDetail.associate = function(models) {
    OrderDetail.belongsTo(models.Order,{
      as:'Order',
      foreignKey:'order_id'
    });
  };

  OrderDetail.associate = function(models) {
    OrderDetail.belongsTo(models.Product,{
      as:'Product',
      foreignKey:'product_id'
    });
  };

  return OrderDetail;
};