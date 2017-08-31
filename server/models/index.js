import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

// This check the Environment in use whether local and online

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(config.url);
} else {
    sequelize = new Sequelize(
        config.database, config.username, config.password, config
    );
}

fs
    .readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {

        const model = sequelize.import(path.join(__dirname, file));
        //console.log(model);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;