const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subjects', {
    subject_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subject_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'programs',
        key: 'program_id'
      }
    }
  }, {
    sequelize,
    tableName: 'subjects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
      {
        name: "subject_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
      {
        name: "program_id",
        using: "BTREE",
        fields: [
          { name: "program_id" },
        ]
      },
    ]
  });
};
