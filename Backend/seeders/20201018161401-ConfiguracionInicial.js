'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      name: "Administrador",
      description: "Administrador",
      status: "1",
      createdAT: new Date(),
      updatedAT: new Date(),
     },
     {
      name: "Cliente",
      description: "Cliente",
      status: "1",
      createdAT: new Date(),
      updatedAT: new Date(),
     }], {});

     await queryInterface.bulkInsert('Users', [{
      name: "Administrador",
      email: "Administrador@admin.com",
      password:"admin123",
      status: "1",
      role_Id:1,
      createdAT: new Date(),
      updatedAT: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
