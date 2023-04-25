'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Parties', [{
       numberOfAdults: 3,
       numberOfChildren: 3,
       tableId: 1
     },
     {
      numberOfAdults: 1,
      numberOfChildren: 1,
      tableId: 2
    },
    {
      numberOfAdults: 4,
      numberOfChildren: 0,
      tableId: 3
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Parties', null, {});
  }
};