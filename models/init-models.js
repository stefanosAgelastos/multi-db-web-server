var DataTypes = require("sequelize").DataTypes;
var _kea_departments = require("./kea_departments");
var _presence_audit = require("./presence_audit");
var _presence_key = require("./presence_key");
var _programs = require("./programs");
var _students = require("./students");
var _students_presence = require("./students_presence");
var _students_subjects = require("./students_subjects");
var _subjects = require("./subjects");
var _teachers = require("./teachers");
var _teachers_subjects = require("./teachers_subjects");

function initModels(sequelize) {
  var kea_departments = _kea_departments(sequelize, DataTypes);
  var presence_audit = _presence_audit(sequelize, DataTypes);
  var presence_key = _presence_key(sequelize, DataTypes);
  var programs = _programs(sequelize, DataTypes);
  var students = _students(sequelize, DataTypes);
  var students_presence = _students_presence(sequelize, DataTypes);
  var students_subjects = _students_subjects(sequelize, DataTypes);
  var subjects = _subjects(sequelize, DataTypes);
  var teachers = _teachers(sequelize, DataTypes);
  var teachers_subjects = _teachers_subjects(sequelize, DataTypes);

  students.belongsToMany(subjects, { as: 'subject_id_subjects', through: students_subjects, foreignKey: "student_id", otherKey: "subject_id" });
  subjects.belongsToMany(students, { as: 'student_id_students', through: students_subjects, foreignKey: "subject_id", otherKey: "student_id" });
  subjects.belongsToMany(teachers, { as: 'teacher_id_teachers', through: teachers_subjects, foreignKey: "subject_id", otherKey: "teacher_id" });
  teachers.belongsToMany(subjects, { as: 'subject_id_subjects_teachers_subjects', through: teachers_subjects, foreignKey: "teacher_id", otherKey: "subject_id" });
  programs.belongsTo(kea_departments, { as: "department", foreignKey: "department_id"});
  kea_departments.hasMany(programs, { as: "programs", foreignKey: "department_id"});
  teachers.belongsTo(kea_departments, { as: "department", foreignKey: "department_id"});
  kea_departments.hasMany(teachers, { as: "teachers", foreignKey: "department_id"});
  students_presence.belongsTo(presence_key, { as: "presence_key", foreignKey: "presence_key_id"});
  presence_key.hasMany(students_presence, { as: "students_presences", foreignKey: "presence_key_id"});
  students.belongsTo(programs, { as: "program", foreignKey: "program_id"});
  programs.hasMany(students, { as: "students", foreignKey: "program_id"});
  subjects.belongsTo(programs, { as: "program", foreignKey: "program_id"});
  programs.hasMany(subjects, { as: "subjects", foreignKey: "program_id"});
  students_subjects.belongsTo(students, { as: "student", foreignKey: "student_id"});
  students.hasMany(students_subjects, { as: "students_subjects", foreignKey: "student_id"});
  students_presence.belongsTo(students_subjects, { as: "subject", foreignKey: "subject_id"});
  students_subjects.hasMany(students_presence, { as: "students_presences", foreignKey: "subject_id"});
  students_presence.belongsTo(students_subjects, { as: "student", foreignKey: "student_id"});
  students_subjects.hasMany(students_presence, { as: "student_students_presences", foreignKey: "student_id"});
  students_presence.belongsTo(students_subjects, { as: "semester_students_subject", foreignKey: "semester"});
  students_subjects.hasMany(students_presence, { as: "semester_students_presences", foreignKey: "semester"});
  students_subjects.belongsTo(subjects, { as: "subject", foreignKey: "subject_id"});
  subjects.hasMany(students_subjects, { as: "students_subjects", foreignKey: "subject_id"});
  teachers_subjects.belongsTo(subjects, { as: "subject", foreignKey: "subject_id"});
  subjects.hasMany(teachers_subjects, { as: "teachers_subjects", foreignKey: "subject_id"});
  teachers_subjects.belongsTo(teachers, { as: "teacher", foreignKey: "teacher_id"});
  teachers.hasMany(teachers_subjects, { as: "teachers_subjects", foreignKey: "teacher_id"});
  presence_key.belongsTo(teachers_subjects, { as: "teacher", foreignKey: "teacher_id"});
  teachers_subjects.hasMany(presence_key, { as: "presence_keys", foreignKey: "teacher_id"});
  presence_key.belongsTo(teachers_subjects, { as: "subject", foreignKey: "subject_id"});
  teachers_subjects.hasMany(presence_key, { as: "subject_presence_keys", foreignKey: "subject_id"});
  presence_key.belongsTo(teachers_subjects, { as: "semester_teachers_subject", foreignKey: "semester"});
  teachers_subjects.hasMany(presence_key, { as: "semester_presence_keys", foreignKey: "semester"});

  return {
    kea_departments,
    presence_audit,
    presence_key,
    programs,
    students,
    students_presence,
    students_subjects,
    subjects,
    teachers,
    teachers_subjects,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
