'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeTrensfert: {
        type: Sequelize.INTEGER
      },
      typeOperator: {
        type: Sequelize.INTEGER
      },
      codeSolde: {
        type: Sequelize.INTEGER
      },
      codeInternational: {
        type: Sequelize.INTEGER
      },
      codePin: {
        type: Sequelize.STRING
      },
      MsgIntTrn1: {
        type: Sequelize.STRING
      },
      MsgCnfTrn1: {
        type: Sequelize.STRING
      },
      MsgInttTrn2: {
        type: Sequelize.STRING
      },
      MsgCnfTrn2: {
        type: Sequelize.STRING
      },
      MsgIntTrn3: {
        type: Sequelize.STRING
      },
      MsgCnfTrn3: {
        type: Sequelize.STRING
      },
      codeFacteur: {
        type: Sequelize.INTEGER
      },
      confYes: {
        type: Sequelize.INTEGER
      },
      confNo: {
        type: Sequelize.INTEGER
      },
      autoConfirmation: {
        type: Sequelize.BOOLEAN
      },
      regexConsultation: {
        type: Sequelize.STRING
      },
      buttonList: {
        type: Sequelize.STRING
      },
      margeSome: {
        type: Sequelize.STRING
      },
      autoDetectUSB: {
        type: Sequelize.BOOLEAN
      },
      audioEnabled: {
        type: Sequelize.BOOLEAN
      },
      audioSpeed: {
        type: Sequelize.INTEGER
      },
      audioPerson: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Settings');
  }
};