USE rollcall_db;

DROP VIEW  IF EXISTS students_program;

CREATE VIEW students_program
AS
SELECT 
	student_id AS Student_id, 
	fullname (first_name,
	last_name) AS Fullname,
    s.program_id AS Program_id ,
    program_name AS Program_name , 
    department_name AS Department_name ,
    p.department_id AS Department_id
	
FROM 
    students AS s INNER JOIN programs AS p, kea_departments AS k 
WHERE p.department_id = k.department_id
AND s.program_id = p.program_id;
