'use strict';
module.exports = {
  up: async (queryInterface, Sequelize,DataTypes) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      payment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethods',
          key: 'id'
        },
      },
      itemsPrice: {
        type: Sequelize.DECIMAL(15,2),
      },
      taxPrice: {
        type: Sequelize.DECIMAL(15,2),
      },
      shippingPrice: {
        type: Sequelize.DECIMAL(15,2),
      },
      totalPrice: {
        type: Sequelize.DECIMAL(15,2),
      },
      isPaid: {
        type: Sequelize.BOOLEAN
      },
      PaidAt: {
        type: Sequelize.DATE
      },
      isDelivered: {
        type: Sequelize.BOOLEAN
      },
      deliveredAt: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.CHAR
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};