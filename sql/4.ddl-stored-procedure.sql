USE rollcall_db;

-- 1 --

DELIMITER $$
 CREATE PROCEDURE selectTeachers(IN id int)
 BEGIN 
	 SELECT fullname(first_name, last_name) AS "Teacher List"  FROM teachers 
     WHERE department_id = id; 
 END$$
DELIMITER ;

-- 2 --

DELIMITER $$
CREATE PROCEDURE course_Stud(In id int)
 BEGIN 

 SELECT program_id, program_name  AS "Course Name by id "  FROM programs
     WHERE program_id = id;
     
     END $$
  
DELIMITER ;

-- 3 --	 
    
DELIMITER $$
CREATE PROCEDURE course_subject()
 BEGIN 

 SELECT  subject_id, subject_name As "Software Developmant subjects are  " FROM subjects
     WHERE program_id = "1";
     
     END $$
  
DELIMITER ;