const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presence_key', {
    presence_key_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    actual_presence_key: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "actual_presence_key"
    },
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teachers_subjects',
        key: 'semester'
      }
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
    tableName: 'presence_key',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "presence_key_id" },
          { name: "teacher_id" },
          { name: "subject_id" },
          { name: "semester" },
        ]
      },
      {
        name: "presence_key_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "presence_key_id" },
        ]
      },
      {
        name: "actual_presence_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "actual_presence_key" },
        ]
      },
      {
        name: "teacher_id",
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
          { name: "subject_id" },
          { name: "semester" },
        ]
      },
    ]
  });
};
