const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teachers_semesters_subjects', {
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Fullname: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false
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
