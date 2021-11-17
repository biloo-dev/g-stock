'use strict';
const {
 Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 class Clients extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
   models.clients.hasMany(models.historiques, {
    as: 'Historiques',
    foreignKey: 'id_client'
   })
  }
 };
 Clients.init({
  nom_prenom: DataTypes.STRING,
  fidel: DataTypes.BOOLEAN,
  type: DataTypes.BOOLEAN,
  numeroPhoneList: DataTypes.STRING,
  credit: DataTypes.DECIMAL
 }, {
  sequelize,
  modelName: 'Clients',
 }); 
 return Clients;
};