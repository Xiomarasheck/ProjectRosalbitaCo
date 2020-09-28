const models = require('./../models');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    itemsPrice: DataTypes.FLOAT,
    taxPrice: DataTypes.FLOAT,
    shippingPrice: DataTypes.FLOAT,
    totalPrice: DataTypes.FLOAT,
    isPaid: DataTypes.BOOLEAN,
    PaidAt: DataTypes.DATE,
    address: DataTypes.STRING,
    isDelivered: DataTypes.BOOLEAN,
    deliveredAt: DataTypes.DATE,
    status: DataTypes.CHAR,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });

  Order.associate = function(models) {
    Order.belongsTo(models.PaymentMethod,{
      as:'PaymentMethod',
      foreignKey:'payment_id'
    });
  };

  return Order;
};