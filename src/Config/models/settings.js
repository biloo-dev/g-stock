'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
     
    static associate(models) {
      // define association here
    }
  };
  Settings.init({
    codeTrensfert: DataTypes.INTEGER,
    typeOperator: DataTypes.INTEGER,
    codeSolde: DataTypes.INTEGER,
    codeInternational: DataTypes.INTEGER,
    codePin: DataTypes.STRING,
    MsgIntTrn1: DataTypes.STRING,
    MsgCnfTrn1: DataTypes.STRING,
    MsgInttTrn2: DataTypes.STRING,
    MsgCnfTrn2: DataTypes.STRING,
    MsgIntTrn3: DataTypes.STRING,
    MsgCnfTrn3: DataTypes.STRING,
    codeFacteur: DataTypes.INTEGER,
    confYes: DataTypes.INTEGER,
    confNo: DataTypes.INTEGER,
    autoConfirmation: DataTypes.BOOLEAN,
    regexConsultation: DataTypes.STRING,
    buttonList: DataTypes.STRING,
    margeSome: DataTypes.STRING,
    autoDetectUSB: DataTypes.BOOLEAN,
    audioEnabled: DataTypes.BOOLEAN,
    audioSpeed: DataTypes.INTEGER,
    audioPerson: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Settings',
  });
  return Settings;
};