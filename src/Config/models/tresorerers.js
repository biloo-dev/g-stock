'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tresorerers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tresorerers.init({
    somme: DataTypes.DECIMAL,
    rest_somme: DataTypes.DECIMAL,
    id_hist: DataTypes.INTEGER,
    type: DataTypes.BOOLEAN,
    id_client: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tresorerers',
  });
  return Tresorerers;
};