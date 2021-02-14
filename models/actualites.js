'use strict';

module.exports = (sequelize, DataTypes) => {
  
  var actualites = sequelize.define('actualites', {
    actu_titre: DataTypes.STRING,
    actu_date: DataTypes.DATE,
    actu_auteur: DataTypes.STRING,
    actu_contenu: DataTypes.STRING,
    actu_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return actualites;
};