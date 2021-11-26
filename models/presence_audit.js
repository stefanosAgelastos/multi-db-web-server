const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presence_audit', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_role: {
      type: DataTypes.ENUM('teacher','sql_event'),
      allowNull: true
    },
    action: {
      type: DataTypes.ENUM('create','delete'),
      allowNull: true
    },
    semester: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passphrase: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'presence_audit',
    timestamps: false
  });
};
