"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          partyId: 1,
          dishId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 1,
          dishId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 1,
          dishId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 2,
          dishId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 2,
          dishId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 2,
          dishId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 3,
          dishId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 3,
          dishId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          partyId: 3,
          dishId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
