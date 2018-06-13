"use strict";

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("todo", {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  });

  return Todo;
};