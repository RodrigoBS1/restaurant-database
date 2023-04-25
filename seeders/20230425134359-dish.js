'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dishes', [{
      name: "Grilled Salmon",
      description: "Delicious salmon seasoned with herbs and lemon. Served with a side of roasted vegetables.",
      isGlutenFree: true,
      isSpicy: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Spicy Tofu Stir Fry",
      description: "Stir-fried tofu, mixed vegetables, and spicy sauce. Served with brown rice.",
      isGlutenFree: true,
      isSpicy: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Beef Stroganoff",
      description: "Tender strips of beef cooked in a creamy mushroom sauce. Served over egg noodles.",
      isGlutenFree: false,
      isSpicy: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  }
};