var DataTypes = require("sequelize").DataTypes;
var _code = require("./code");
var _kea_departments = require("./kea_departments");
var _programs = require("./programs");
var _students = require("./students");
var _students_status = require("./students_status");
var _students_subjects = require("./students_subjects");
var _subjects = require("./subjects");
var _teachers = require("./teachers");
var _teachers_subjects = require("./teachers_subjects");

function initModels(sequelize) {
  var code = _code(sequelize, DataTypes);
  var kea_departments = _kea_departments(sequelize, DataTypes);
  var programs = _programs(sequelize, DataTypes);
  var students = _students(sequelize, DataTypes);
  var students_status = _students_status(sequelize, DataTypes);
  var students_subjects = _students_subjects(sequelize, DataTypes);
  var subjects = _subjects(sequelize, DataTypes);
  var teachers = _teachers(sequelize, DataTypes);
  var teachers_subjects = _teachers_subjects(sequelize, DataTypes);

  students.belongsToMany(subjects, { as: 'subject_id_subjects', through: students_subjects, foreignKey: "student_id", otherKey: "subject_id" });
  students_subjects.belongsToMany(students_subjects, { as: 'student_id_students_subjects', through: students_status, foreignKey: "subject_id", otherKey: "student_id" });
  students_subjects.belongsToMany(students_subjects, { as: 'subject_id_students_subjects', through: students_status, foreignKey: "student_id", otherKey: "subject_id" });
  subjects.belongsToMany(students, { as: 'student_id_students', through: students_subjects, foreignKey: "subject_id", otherKey: "student_id" });
  subjects.belongsToMany(teachers, { as: 'teacher_id_teachers', through: teachers_subjects, foreignKey: "subject_id", otherKey: "teacher_id" });
  teachers.belongsToMany(subjects, { as: 'subject_id_subjects_teachers_subjects', through: teachers_subjects, foreignKey: "teacher_id", otherKey: "subject_id" });
  teachers_subjects.belongsToMany(teachers_subjects, { as: 'subject_id_teachers_subjects', through: code, foreignKey: "teacher_id", otherKey: "subject_id" });
  teachers_subjects.belongsToMany(teachers_subjects, { as: 'teacher_id_teachers_subjects', through: code, foreignKey: "subject_id", otherKey: "teacher_id" });
  programs.belongsTo(kea_departments, { as: "department", foreignKey: "department_id"});
  kea_departments.hasMany(programs, { as: "programs", foreignKey: "department_id"});
  teachers.belongsTo(kea_departments, { as: "department", foreignKey: "department_id"});
  kea_departments.hasMany(teachers, { as: "teachers", foreignKey: "department_id"});
  students.belongsTo(programs, { as: "program", foreignKey: "program_id"});
  programs.hasMany(students, { as: "students", foreignKey: "program_id"});
  subjects.belongsTo(programs, { as: "program", foreignKey: "program_id"});
  programs.hasMany(subjects, { as: "subjects", foreignKey: "program_id"});
  students_subjects.belongsTo(students, { as: "student", foreignKey: "student_id"});
  students.hasMany(students_subjects, { as: "students_subjects", foreignKey: "student_id"});
  students_status.belongsTo(students_subjects, { as: "subject", foreignKey: "subject_id"});
  students_subjects.hasMany(students_status, { as: "students_statuses", foreignKey: "subject_id"});
  students_status.belongsTo(students_subjects, { as: "student", foreignKey: "student_id"});
  students_subjects.hasMany(students_status, { as: "student_students_statuses", foreignKey: "student_id"});
  students_subjects.belongsTo(subjects, { as: "subject", foreignKey: "subject_id"});
  subjects.hasMany(students_subjects, { as: "students_subjects", foreignKey: "subject_id"});
  teachers_subjects.belongsTo(subjects, { as: "subject", foreignKey: "subject_id"});
  subjects.hasMany(teachers_subjects, { as: "teachers_subjects", foreignKey: "subject_id"});
  teachers_subjects.belongsTo(teachers, { as: "teacher", foreignKey: "teacher_id"});
  teachers.hasMany(teachers_subjects, { as: "teachers_subjects", foreignKey: "teacher_id"});
  code.belongsTo(teachers_subjects, { as: "teacher", foreignKey: "teacher_id"});
  teachers_subjects.hasMany(code, { as: "codes", foreignKey: "teacher_id"});
  code.belongsTo(teachers_subjects, { as: "subject", foreignKey: "subject_id"});
  teachers_subjects.hasMany(code, { as: "subject_codes", foreignKey: "subject_id"});

  return {
    code,
    kea_departments,
    programs,
    students,
    students_status,
    students_subjects,
    subjects,
    teachers,
    teachers_subjects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
