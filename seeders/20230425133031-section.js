'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FrontSectionTables', [{
      tableId: 1,
    },
    {
      tableId: 2,
    }, 
    {
      tableId: 3,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FrontSectionTables', null, {}); 
  }
};
