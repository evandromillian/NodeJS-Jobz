'use strict';

let fs          = require('fs');
let path        = require('path');
let Sequelize   = require('sequelize');
let basename    = path.basename(module.filename);
var db          = {};

db.initWithDB = function(sequelizeDB) {
    fs
    .readdirSync(__dirname)
    .filter(function(file) {
            return  (file.indexOf('.') !== 0)   && 
                    (file !== basename)         && 
                    (file.slice(-3) === '.js');
        })
    .forEach(function(file) {
            var model = sequelizeDB['import'](path.join(__dirname, file));
            db[model.name] = model;
        });

    Object.keys(db).forEach(function(modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.db = sequelizeDB;
}

module.exports = db;