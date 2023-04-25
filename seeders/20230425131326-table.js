'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tables', [{
      isOpen: false,
    },
    {
      isOpen: false,
    },
    {
      isOpen: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tables', null, {})
  }
};