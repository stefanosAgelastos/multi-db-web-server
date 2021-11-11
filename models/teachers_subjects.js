const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teachers_subjects', {
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teachers',
        key: 'teacher_id'
      }
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subjects',
        key: 'subject_id'
      }
    }
  }, {
    sequelize,
    tableName: 'teachers_subjects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
          { name: "subject_id" },
          { name: "semester" },
        ]
      },
      {
        name: "subject_id",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
    ]
  });
};
