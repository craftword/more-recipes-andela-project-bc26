"use strict";

const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullname: {
            
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true, 
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        }
           
    });
    Users.associate = (model) => {
        Users.hasMany(models.Recipes, {
            foreignKey: "userId",
            as: "recipe",
        });
             
    };
    

    return Users;
};

export default Users;
