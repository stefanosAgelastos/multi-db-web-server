CREATE DATABASE IF NOT EXISTS `rollcall_db`;

CREATE TABLE IF NOT EXISTS `rollcall_db`.`kea_departments` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `department_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE INDEX `department_name_UNIQUE` (`department_name` ASC),
  UNIQUE INDEX `department_id_UNIQUE` (`department_id` ASC)); 

CREATE TABLE IF NOT EXISTS `rollcall_db`.`courses` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(60) NOT NULL,
  `department_id` INT NOT NULL,
  PRIMARY KEY (`course_id`),
  INDEX `department_id` (`department_id` ASC),
  UNIQUE INDEX `course_id_UNIQUE` (`course_id` ASC),
  CONSTRAINT `courses_ibfk_1`
    FOREIGN KEY (`department_id`)
    REFERENCES `rollcall_db`.`kea_departments` (`department_id`));
 
CREATE TABLE IF NOT EXISTS `rollcall_db`.`subjects` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `subject_name` VARCHAR(200) NOT NULL,
  `course_id` INT NOT NULL,
  PRIMARY KEY (`subject_id`),
  INDEX `course_id` (`course_id` ASC),
  UNIQUE INDEX `subject_id_UNIQUE` (`subject_id` ASC),
  CONSTRAINT `subjects_ibfk_1`
    FOREIGN KEY (`course_id`)
    REFERENCES `rollcall_db`.`courses` (`course_id`));

CREATE TABLE IF NOT EXISTS `rollcall_db`.`teachers` (
  `teacher_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `department_id` INT NOT NULL,
  PRIMARY KEY (`teacher_id`),
  INDEX `department_id` (`department_id` ASC),
  UNIQUE INDEX `teacher_id_UNIQUE` (`teacher_id` ASC),
  CONSTRAINT `teachers_ibfk_1`
    FOREIGN KEY (`department_id`)
    REFERENCES `rollcall_db`.`kea_departments` (`department_id`)) ;

CREATE TABLE IF NOT EXISTS `rollcall_db`.`code` (
  `code_id` INT NOT NULL AUTO_INCREMENT,
  `teacher_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  `current_dateTime` DATETIME NOT NULL,
  PRIMARY KEY (`code_id`),
  INDEX `subject_id` (`subject_id` ASC),
  INDEX `teacher_id` (`teacher_id` ASC),
  UNIQUE INDEX `code_id_UNIQUE` (`code_id` ASC),
  CONSTRAINT `code_ibfk_1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `rollcall_db`.`subjects` (`subject_id`),
  CONSTRAINT `code_ibfk_2`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `rollcall_db`.`teachers` (`teacher_id`)) ;

CREATE TABLE IF NOT EXISTS `rollcall_db`.`students` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `user_name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(120) NOT NULL,
  `course_id` INT NOT NULL,
  PRIMARY KEY (`student_id`),
  INDEX `course_id` (`course_id` ASC),
  UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC),
  CONSTRAINT `students_ibfk_1`
    FOREIGN KEY (`course_id`)
    REFERENCES `rollcall_db`.`courses` (`course_id`)) ;
 
CREATE TABLE IF NOT EXISTS `rollcall_db`.`students_status` (
  `status_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  `is_present` TINYINT(1) NOT NULL,
  `current_datetime` DATETIME NOT NULL,
  PRIMARY KEY (`status_id`),
  INDEX `subject_id` (`subject_id` ASC),
  INDEX `student_id` (`student_id` ASC),
  UNIQUE INDEX `status_id_UNIQUE` (`status_id` ASC),
  CONSTRAINT `students_status_ibfk_1`
    FOREIGN KEY (`subject_id`)
    REFERENCES `rollcall_db`.`subjects` (`subject_id`),
  CONSTRAINT `students_status_ibfk_2`
    FOREIGN KEY (`student_id`)
    REFERENCES `rollcall_db`.`students` (`student_id`)) ;
 
CREATE TABLE IF NOT EXISTS `rollcall_db`.`teacher_course` (
  `teacher_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  INDEX `course_id` (`course_id` ASC),
  PRIMARY KEY (`course_id`, `teacher_id`),
  CONSTRAINT `teacher_course_ibfk_1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `rollcall_db`.`teachers` (`teacher_id`),
  CONSTRAINT `teacher_course_ibfk_2`
    FOREIGN KEY (`course_id`)
    REFERENCES `rollcall_db`.`courses` (`course_id`)) ;