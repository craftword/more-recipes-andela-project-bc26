"use strict";

const Notifications = (sequelize, DataTypes) => {
    const Notifications = sequelize.define("Recipes", {
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },       
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
           
    });
    Notifications.associate = (models) => {
        Notifications.belongsTo(models.Users, {
            foreignKey: "userId",
            onDelete: "CASCADE",
        });
             
    };
    

    return Notifications;
};

export default Notifications;
