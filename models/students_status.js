const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students_status', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_present: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    tableName: 'students_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
          { name: "subject_id" },
          { name: "student_id" },
        ]
      },
      {
        name: "status_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "subject_id",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
          { name: "student_id" },
        ]
      },
    ]
  });
};
