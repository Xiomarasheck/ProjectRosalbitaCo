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
      address: {
        type: Sequelize.STRING
      },
      isDelivered: {
        type: Sequelize.BOOLEAN
      },
      deliveredAt: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.CHAR,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};