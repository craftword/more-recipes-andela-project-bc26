"use strict";

const Comments = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        recipeId: {            
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
           
    });
    Comments.associate = (models) => {
        Comments.belongsTo(models.Recipes, {
            foreignKey: "recipeId",
            onDelete: "CASCADE",
        });
             
    };
    

    return Comments;
};

export default Comments;
