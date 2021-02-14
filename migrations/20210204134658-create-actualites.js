'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('actualites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actu_titre: {
        type: Sequelize.STRING
      },
      actu_date: {
        type: Sequelize.DATE
      },
      actu_auteur: {
        type: Sequelize.STRING
      },
      actu_contenu: {
        type: Sequelize.STRING
      },
      actu_image: {
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
    await queryInterface.dropTable('actualites');
  }
};