"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../../../config/config.json')[env];


if (env == "production") {
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

    config = {
        user: match[1],
        pass: match[2],
        base: match[5],
        options: {
            dialect: 'postgres',
            protocol: 'postgres',
            host: match[3],
            logging: false,
            port: match[4],
            dialectOptions: {
                ssl: true
            }
        }
    };

    var sequelize = new Sequelize(config.base, config.user, config.pass, config.options);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
