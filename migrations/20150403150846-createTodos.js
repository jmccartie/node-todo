"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'todos',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        title: DataTypes.STRING,
        completed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      }
    )
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('todos')
    done();
  }
};
