const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('teachers', {
    teacher_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a first name'
        },
        is: ["^[a-z]+$", 'i'] // will only allow letters
      }
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter a last name'
        },
        is: ["^[a-z]+$", 'i'] // will only allow letters
      }
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "email",
      validate: {
        isEmail: {
          msg: 'Please enter a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'You must enter a password'
        },
        len: {
          args: [8, 120],
          msg: 'Please enter a password with at least 5 chars long but no more than 8 chars long'
        }
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kea_departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    // validate: {
      // startsWithUpper: function (first_name, last_name) {
      //   var first = string.charAt(0);
      //   var startsWithUpper = first === first.toUpperCase();
      //   if (!startsWithUpper) {
      //     throw new Error('First letter must start with a uppercase letter')
      //   }
      // }
    // },
    tableName: 'teachers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
        ]
      },
      {
        name: "teacher_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacher_id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "department_id",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
};
