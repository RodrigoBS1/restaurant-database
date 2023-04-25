'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      partyId: 1,
      dishId: 1
    },
    {
      partyId: 1,
      dishId: 2
    },
    {
      partyId: 1,
      dishId: 3
    },
    {
      partyId: 2,
      dishId: 1
    },
    {
      partyId: 2,
      dishId: 2
    },
    {
      partyId: 2,
      dishId: 3
    },
    {
      partyId: 3,
      dishId: 1
    },
    {
      partyId: 3,
      dishId: 2
    },
    {
      partyId: 3,
      dishId: 3
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  } 
};
