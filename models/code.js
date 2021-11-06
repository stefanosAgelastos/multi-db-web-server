const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('code', {
    code_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    current_dateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teachers_subjects',
        key: 'teacher_id'
      }
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teachers_subjects',
        key: 'subject_id'
      }
    }
  }, {
    sequelize,
    tableName: 'code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_id" },
          { name: "teacher_id" },
          { name: "subject_id" },
        ]
      },
      {
        name: "code_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_id" },
        ]
      },
      {
        name: "teacher_id",
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
          { name: "subject_id" },
        ]
      },
    ]
  });
};
