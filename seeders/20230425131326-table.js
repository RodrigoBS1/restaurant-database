'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tables', [{
      isOpen: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      isOpen: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      isOpen: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tables', null, {})
  }
};
