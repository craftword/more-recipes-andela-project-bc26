"use strict";

const Favorites = (sequelize, DataTypes) => {
    const Favorites = sequelize.define("Recipes", {
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },       
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
           
    });
    Favorites.associate = (model) => {
        Favorites.belongsTo(models.Users, {
            foreignKey: "userId",
            onDelete: "CASCADE",
        });
             
    };
    

    return Favorites;
};

export default Favorites;
