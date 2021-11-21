-- -----------------------------------------------------
-- Table `rollcall_db`.`presence_audit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`presence_audit` (
`actor_id` INT NOT NULL,
`actor_role` ENUM('student', 'teacher', 'sql_event'),
`action` ENUM('create', 'register_presence', 'delete'),
`semester` VARCHAR(5) NOT NULL,
`subject_id` INT NOT NULL,
`date_time` DATETIME NOT NULL
);

-- -----------------------------------------------------
-- Trigger after insert on `rollcall_db`.`presence_key`
-- -----------------------------------------------------

CREATE TRIGGER `rollcall_db`.`teacher_created_presence_key` AFTER INSERT ON `rollcall_db`.`presence_key`
       FOR EACH ROW 
       INSERT INTO `rollcall_db`.`presence_audit`
       (`actor_id`,`actor_role`,`action`,`semester`,`subject_id`,`date_time`)
       VALUES
       (NEW.teacher_id,'teacher','create',NEW.semester,NEW.subject_id,NOW());

-- -----------------------------------------------------
-- Trigger after insert on `rollcall_db`.`students_presence`
-- -----------------------------------------------------

CREATE TRIGGER `rollcall_db`.`student_registered_presence` AFTER INSERT ON `rollcall_db`.`students_presence`
       FOR EACH ROW 
       INSERT INTO `rollcall_db`.`presence_audit`
       (`actor_id`,`actor_role`,`action`,`semester`,`subject_id`,`date_time`)
       VALUES
       (NEW.student_id,'student','register_presence',NEW.semester,NEW.subject_id,NOW());

-- -----------------------------------------------------
-- Trigger after delete on `rollcall_db`.`presence_key`
-- -----------------------------------------------------

CREATE TRIGGER `rollcall_db`.`sql_event_deleted_presence_key` AFTER DELETE ON `rollcall_db`.`presence_key`
       FOR EACH ROW 
       INSERT INTO `rollcall_db`.`presence_audit`
       (`actor_id`,`actor_role`,`action`,`semester`,`subject_id`,`date_time`)
       VALUES
       (0,'sql_event','delete',OLD.semester,OLD.subject_id,NOW());
