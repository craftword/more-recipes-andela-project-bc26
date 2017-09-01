"use strict";

const Recipes = (sequelize, DataTypes) => {
    const Recipes = sequelize.define("Recipes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ingredients: {            
            type: DataTypes.TEXT,
            allowNull: false,
        },
        directions: {
            type: DataTypes.TEXT,
            allowNull: false,
            
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
           
    });
    Recipes.associate = (models) => {
        Recipes.belongsTo(models.Users, {
            foreignKey: "userId",
            onDelete: "CASCADE",
        });
             
    };
    

    return Recipes;
};

export default Recipes;
