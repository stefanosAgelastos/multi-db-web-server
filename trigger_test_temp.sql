-- Checks if code is previously generated -- 
-- Needs new table for storing codes --

DELIMITER $$
CREATE TRIGGER verify_prev_code
    BEFORE UPDATE ON codes
    FOR EACH ROW
BEGIN
    IF (code IN (stashed_codes)) THEN 
    SIGNAL SQLSTATE '23000' SET 
      MYSQL_ERRNO = 526,
      MESSAGE_TEXT = 'Code has been used before. Please generate a new one';
    END IF;
END$$


-- Dummy table for storing older codes --

-- CREATE TABLE IF NOT EXISTS `rollcall_db`.`stashed_code` (
--  `stashed_code_id` INT NOT NULL AUTO_INCREMENT,
--  `code_id` INT NOT NULL,
--  `code` VARCHAR(64),
--  PRIMARY KEY (`stashed_code_id`),
--  CONSTRAINT `courses_ibfk_3`
--    FOREIGN KEY (`code_id`)
--    REFERENCES `rollcall_db`.`codes` (`code_id`));


--    INSERT INTO `rollcall_db`.`codes` (`code`) VALUES ('KASJDFLAKSGKALSJDKLAJSDLKASJDLAKSJDKLASDJLK');
