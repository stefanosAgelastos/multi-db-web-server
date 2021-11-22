-- -----------------------------------------------------
-- Table `rollcall_db`.`presence_audit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rollcall_db`.`presence_audit` (
`user_id` INT,
`user_role` ENUM('teacher', 'sql_event'),
`action` ENUM('create', 'delete'),
`semester` VARCHAR(5) NOT NULL,
`subject_id` INT NOT NULL,
`passphrase` VARCHAR(25),
`date_time` DATETIME NOT NULL
);

-- -----------------------------------------------------
-- Trigger after insert on `rollcall_db`.`presence_key`
-- -----------------------------------------------------

CREATE TRIGGER `rollcall_db`.`teacher_created_presence_key` AFTER INSERT ON `rollcall_db`.`presence_key`
       FOR EACH ROW 
       INSERT INTO `rollcall_db`.`presence_audit`
       (`user_id`,`user_role`,`action`,`semester`,`subject_id`,`passphrase`,`date_time`)
       VALUES
       (NEW.teacher_id,'teacher','create',NEW.semester,NEW.subject_id,NEW.actual_presence_key,NOW());


-- -----------------------------------------------------
-- Trigger after delete on `rollcall_db`.`presence_key`
-- -----------------------------------------------------

CREATE TRIGGER `rollcall_db`.`sql_event_deleted_presence_key` AFTER DELETE ON `rollcall_db`.`presence_key`
       FOR EACH ROW 
       INSERT INTO `rollcall_db`.`presence_audit`
       (`user_id`,`user_role`,`action`,`semester`,`subject_id`,`passphrase`,`date_time`)
       VALUES
       (NULL,'sql_event','delete',OLD.semester,OLD.subject_id,OLD.actual_presence_key,NOW());
