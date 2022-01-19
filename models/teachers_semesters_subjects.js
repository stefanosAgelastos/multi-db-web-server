const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teachers_semesters_subjects', {
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    Fullname: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    subject_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teachers_semesters_subjects',
    timestamps: false
  });
};
