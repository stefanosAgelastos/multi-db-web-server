USE rollcall_db;

-- SET DELIMITER FOR THE CREATING THE PROCEDURES --

DELIMITER $$

-- 1 --


 CREATE PROCEDURE selectTeachers(IN id int)
 BEGIN 
	 SELECT fullname(first_name, last_name) AS "Teacher List"  FROM teachers 
     WHERE department_id = id; 
 END $$

-- 2 --


CREATE PROCEDURE programNameById(In id int)
 BEGIN
 SELECT program_id, program_name  AS "Program Name by id "  FROM programs
     WHERE program_id = id;
     END $$  

-- 3 --	 
    

CREATE PROCEDURE program_subject(In id int)
 BEGIN
 SELECT  subject_id, subject_name As  "Program's subjects are  " FROM subjects
     WHERE program_id = id;
     END $$


-- RESET DELIMITER TO STANDARD --
DELIMITER ;