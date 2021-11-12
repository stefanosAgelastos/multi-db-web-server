const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students_presence', {
    presence_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students_subjects',
        key: 'semester'
      }
    },
    current_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students_subjects',
        key: 'subject_id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students_subjects',
        key: 'student_id'
      }
    }
  }, {
    sequelize,
    tableName: 'students_presence',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "presence_id" },
          { name: "subject_id" },
          { name: "student_id" },
          { name: "semester" },
        ]
      },
      {
        name: "presence_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "presence_id" },
        ]
      },
      {
        name: "subject_id",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
          { name: "student_id" },
          { name: "semester" },
        ]
      },
    ]
  });
};
