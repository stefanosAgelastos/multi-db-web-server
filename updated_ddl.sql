
CREATE SCHEMA IF NOT EXISTS `rollcall_db`;
USE `rollcall_db` ;

-- -----------------------------------------------------
-- Table `rollcall_db`.`kea_departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`kea_departments` (
`department_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`department_name` VARCHAR(20) NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`program`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`program` (
`program_id` INT NOT NULL,
`program_name` VARCHAR(60) NOT NULL,
`department_id` INT NOT NULL,
`kea_departments_department_id` INT NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`subjects` (
`subject_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`subject_name` VARCHAR(200) NOT NULL,
`program_id` INT NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`teachers` (
`teacher_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`first_name` VARCHAR(20) NOT NULL,
`last_name` VARCHAR(20) NOT NULL,
`email` VARCHAR(60) NOT NULL,
`password` VARCHAR(120) NOT NULL,
`department_id` INT NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`teachers_subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`teachers_subjects` (
`teachers_teacher_id` INT NOT NULL,
`subjects_subject_id` INT NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`code`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`code` (
`code_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`current_dateTime` DATETIME NOT NULL,
`teachers_subjects_teachers_teacher_id` INT NOT NULL,
`teachers_subjects_subjects_subject_id` INT NOT NULL);

-- -----------------------------------------------------
-- Table `rollcall_db`.`students_subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`students_subjects` (
`students_student_id` INT NOT NULL,
`subjects_subject_id` INT NOT NULL,
`students_status_status_id` INT NOT NULL,
`students_status_subjects_has_students_subjects_subject_id` INT NOT NULL,
`students_status_subjects_has_students_students_student_id` INT NOT NULL);


-- -----------------------------------------------------
-- Table `rollcall_db`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`students` (
`student_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`first_name` VARCHAR(20) NOT NULL,
`last_name` VARCHAR(20) NOT NULL,
`user_name` VARCHAR(20) NOT NULL,
`password` VARCHAR(120) NOT NULL,
`program_id` INT NOT NULL);




-- -----------------------------------------------------
-- Table `rollcall_db`.`students_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`students_status` (
`status_id` INT NOT NULL AUTO_INCREMENT UNIQUE,
`is_present` TINYINT(1) NOT NULL,
`current_datetime` DATETIME NOT NULL,
`subjects_has_students_subjects_subject_id` INT NOT NULL,
`subjects_has_students_students_student_id` INT NOT NULL);



ALTER TABLE `rollcall_db`.`kea_departments` ADD PRIMARY KEY (`department_id`);

ALTER TABLE `rollcall_db`.`program` ADD PRIMARY KEY (`program_id`);
ALTER TABLE `rollcall_db`.`program` ADD FOREIGN KEY (`kea_departments_department_id`) REFERENCES `rollcall_db`.`kea_departments` (`department_id`);

ALTER TABLE `rollcall_db`.`subjects` ADD PRIMARY KEY (`subject_id`);
ALTER TABLE `rollcall_db`.`subjects` ADD FOREIGN KEY (`program_id`) REFERENCES `rollcall_db`.`program` (`program_id`);


ALTER TABLE `rollcall_db`.`teachers` ADD PRIMARY KEY (`teacher_id`);
ALTER TABLE `rollcall_db`.`teachers` ADD FOREIGN KEY (`department_id`) REFERENCES `rollcall_db`.`kea_departments` (`department_id`);

ALTER TABLE `teachers_subjects` ADD PRIMARY KEY(`teachers_teacher_id`, `subjects_subject_id`);
ALTER TABLE `teachers_subjects` ADD FOREIGN KEY(`subjects_subject_id`) REFERENCES `rollcall_db`.`subjects` (`subject_id`);
ALTER TABLE `teachers_subjects` ADD FOREIGN KEY (`teachers_teacher_id`) REFERENCES `rollcall_db`.`teachers` (`teacher_id`);

ALTER TABLE `rollcall_db`.`code` ADD PRIMARY KEY (`code_id`, `teachers_subjects_teachers_teacher_id`, `teachers_subjects_subjects_subject_id`);
ALTER TABLE `rollcall_db`.`code` ADD FOREIGN KEY (`teachers_subjects_teachers_teacher_id` , `teachers_subjects_subjects_subject_id`) REFERENCES `rollcall_db`.`teachers_subjects` (`teachers_teacher_id` , `subjects_subject_id`);

ALTER TABLE `rollcall_db`.`students` ADD PRIMARY KEY (`student_id`);
ALTER TABLE `rollcall_db`.`students` ADD FOREIGN KEY (`program_id`) REFERENCES `rollcall_db`.`program` (`program_id`);


ALTER TABLE `rollcall_db`.`students_subjects` ADD PRIMARY KEY (`students_student_id`, `subjects_subject_id`, `students_status_status_id`, `students_status_subjects_has_students_subjects_subject_id`, `students_status_subjects_has_students_students_student_id`);
ALTER TABLE `rollcall_db`.`students_subjects` ADD FOREIGN KEY (`students_student_id`) REFERENCES `rollcall_db`.`students` (`student_id`);
ALTER TABLE `rollcall_db`.`students_subjects` ADD FOREIGN KEY (`students_status_status_id` , `students_status_subjects_has_students_subjects_subject_id` , `students_status_subjects_has_students_students_student_id`) REFERENCES `rollcall_db`.`students_status` (`status_id` , `subjects_has_students_subjects_subject_id` , `subjects_has_students_students_student_id`);
ALTER TABLE `rollcall_db`.`students_subjects` ADD FOREIGN KEY (`subjects_subject_id`) REFERENCES `rollcall_db`.`subjects` (`subject_id`);

ALTER TABLE `rollcall_db`.`students_status` ADD PRIMARY KEY (`status_id`, `subjects_has_students_subjects_subject_id`, `subjects_has_students_students_student_id`);
ALTER TABLE `rollcall_db`.`students_status` ADD FOREIGN KEY (`subjects_has_students_subjects_subject_id` , `subjects_has_students_students_student_id`) REFERENCES `rollcall_db`.`students_subjects` (`subjects_subject_id` , `students_student_id`);
