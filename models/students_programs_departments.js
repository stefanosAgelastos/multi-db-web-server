const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students_programs_departments', {
    Student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Fullname: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    Program_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Program_name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Department_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'students_programs_departments',
    timestamps: false
  });
};
