"use strict";

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  });

  return Todo;
};