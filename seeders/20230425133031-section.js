'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sections', [{
      tableId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tableId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      tableId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sections', null, {}); 
  }
};
