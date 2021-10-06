DROP VIEW  IF EXISTS students_course;

CREATE VIEW students_course
AS
SELECT 
	student_id AS Student_id, 
	fullname (first_name,
	last_name) AS Fullname,
    s.course_id AS Course_id ,
    course_name AS Course_name , 
    department_name AS Department_name ,
    c.department_id AS Department_id
	
FROM 
    students AS s INNER JOIN courses AS c, kea_departments AS k 
WHERE c.department_id = k.department_id
AND s.course_id = c.course_id;
