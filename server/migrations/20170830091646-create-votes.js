"use strict";
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable("Votes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            upVotes: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            downVotes: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            recipeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "Recipes",
                    key: "id",
                    as: "userId",
                },
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
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable("Votes");
    }
};