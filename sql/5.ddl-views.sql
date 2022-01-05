USE rollcall_db;

DROP VIEW  IF EXISTS students_programs_departments;

CREATE VIEW students_programs_departments
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



DROP VIEW  IF EXISTS teachers_semesters_subjects;

CREATE VIEW teachers_semesters_subjects
AS
SELECT
	teachers.teacher_id,
	subjects.subject_id,
	semester,
	fullname (first_name,
	last_name) AS Fullname,
	subject_name
FROM
	teachers
JOIN teachers_subjects ON
	teachers.teacher_id = teachers_subjects.teacher_id
JOIN subjects ON
	teachers_subjects.subject_id = subjects.subject_id;
