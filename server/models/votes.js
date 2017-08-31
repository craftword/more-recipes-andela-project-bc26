"use strict";

const Votes = (sequelize, DataTypes) => {
    const Votes = sequelize.define("Votes", {
        upVotes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        downVotes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recipeId: {            
            type: DataTypes.INTEGER,
            allowNull: false,
        }        
           
    });
    Votes.associate = (model) => {
        Votes.belongsTo(models.Recipes, {
            foreignKey: "recipeId",
            onDelete: "CASCADE",
        });
             
    };
    

    return Votes;
};

export default Votes;
