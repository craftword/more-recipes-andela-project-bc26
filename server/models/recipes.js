'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define('Recipes', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipes;
};