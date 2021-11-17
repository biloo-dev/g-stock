'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historiques extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
       models.historiques.belongsTo(models.clients, {
        as: 'Clients',
        foreignKey: 'id_client'
       })
       models.historiques.belongsTo(models.Users, {
        foreignKey: 'id_user'
       })
    }
  }; 
  Historiques.init({
    operateur: DataTypes.INTEGER,
    Numero: DataTypes.STRING,
    somme: DataTypes.DECIMAL,
    rest_somme: DataTypes.DECIMAL,
    somme_payee: DataTypes.DECIMAL,
    Reponse: DataTypes.STRING,
    marge: DataTypes.INTEGER,
    type: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
    credit: DataTypes.BOOLEAN,
    id_client: DataTypes.STRING,
    id_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Historiques',
  });
 
  return Historiques;
};