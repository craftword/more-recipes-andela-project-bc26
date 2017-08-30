'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notifications = sequelize.define('Notifications', {
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Notifications;
};