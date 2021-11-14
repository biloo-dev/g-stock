'use strict';
module.exports = {
 up: async (queryInterface, Sequelize) => {
 let Historiques = await queryInterface.createTable('Historiques', {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
   },
   operateur: {
    type: Sequelize.INTEGER
   },
   Numero: {
    type: Sequelize.STRING
   },
   somme: {
    type: Sequelize.DECIMAL
   },
   rest_somme: {
    type: Sequelize.DECIMAL
   },
   somme_payee: {
    type: Sequelize.DECIMAL
   },
   Reponse: {
    type: Sequelize.STRING,
    allowNull: true,
   },
   marge: {
    type: Sequelize.INTEGER
   },
   type: {
    type: Sequelize.BOOLEAN
   },
   status: {
    type: Sequelize.BOOLEAN
   },
   credit: {
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
  await queryInterface.dropTable('Historiques');
 }
};