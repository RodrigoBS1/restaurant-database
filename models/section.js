'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Section.hasMany(models.Table, {
        foreignKey: 'tableId',
        onDelete: 'CASCADE'
      })
    }
  }
  Section.init({
    name: DataTypes.STRING,
    tableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};