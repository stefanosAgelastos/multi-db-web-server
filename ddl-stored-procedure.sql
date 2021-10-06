--1--

DELIMITER $$
 CREATE PROCEDURE selectTeachers(IN id int)
 BEGIN 
	 SELECT fullname(first_name, last_name) AS "Teachers List"  FROM teachers 
     WHERE department_id = id; 
 END$$
DELIMITER ;

--2--

DELIMITER $$
CREATE PROCEDURE courseById(In id int)
 BEGIN 

 SELECT course_id, course_name  AS "Course Name by id "  FROM courses 
     WHERE course_id = id; 
     
     END $$
  
DELIMITER ;


--3--	 
--3--	 
DELIMITER $$
CREATE PROCEDURE subjectByCourseId(IN id int )
 BEGIN 

 SELECT  subject_id, subject_name As "Course's subjects are  " FROM subjects
     WHERE course_id = id; 
     
     END $$
  
DELIMITER ;