'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tresorerers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      somme: {
        type: Sequelize.DECIMAL
      },
      rest_somme: {
        type: Sequelize.DECIMAL
      },
      id_hist: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: { // User hasMany WorkingDays n:n
            model: 'Historiques',
            key: 'id'
          } 
      },
      type: {
        type: Sequelize.BOOLEAN
      },
      id_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: { // User hasMany WorkingDays n:n
            model: 'Clients',
            key: 'id'
          } 
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: { // User hasMany WorkingDays n:n
            model: 'Users',
            key: 'id'
          } 
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
    await queryInterface.dropTable('Tresorerers');
  }
};