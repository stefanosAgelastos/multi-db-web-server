INSERT INTO `rollcall_db`.`kea_departments` (`department_name`) VALUES ('Digital');
INSERT INTO `rollcall_db`.`kea_departments` (`department_name`) VALUES ('Tech');
INSERT INTO `rollcall_db`.`kea_departments` (`department_name`) VALUES ('Build');
INSERT INTO `rollcall_db`.`kea_departments` (`department_name`) VALUES ('Design');
 
 
INSERT INTO `rollcall_db`.`programs` (`program_name`, `department_id`) VALUES ('Software Developmant','1');
INSERT INTO `rollcall_db`.`programs` (`program_name`, `department_id`) VALUES ('Tech','2');
INSERT INTO `rollcall_db`.`programs` (`program_name`, `department_id`) VALUES ('Product Development and Integrative Technology','3');
INSERT INTO `rollcall_db`.`programs` (`program_name`, `department_id`) VALUES ('Design & business','4');
 
 
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Database for System Developers','1');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('System Integration','1');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Development of Large System','1');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Tests','1');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Web Development','2');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Interface Design','2' );
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Databases','2');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Development Environments','2');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Theoretical Product Development','3');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Disciplinary and Sustainable Product Development and Design','3');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Interdisciplinary Product Development and Design','3');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Value Creation','4');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Trend','4');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('User Understanding','4');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Creativity Innovation','4');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Interpreneurship','4');
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Process,Design,Experiments and Prototyping','4');
 
 
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Asger Batting','Clausen','ASBC@kea.dk','ASBC','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Tomas','Pesek','TOMP@kea.dk','TOMP','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Jarl','Tuxen','JART@kea.dk','JART','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Andrea','Corradini','ANDC@kea.dk','ANDC','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Anders','Latif','ANDL@kea.dk','ANDL','1');
 
 
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Ole','Sørensen','Ole1234@kea.dk','Ole1234','2');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Maria', 'Van','M1234@kea.dk','M1234','3');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Archana', 'Maurya','arch000@kea.dk','arch000','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Tariq', 'Zamani' ,'Tariq11@kea.dk', 'Tariq11','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Stefanos','Agelastos','Stef2222@kea.dk','Stef2222','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Anne','Sørensen','Anne1234@kea.dk','Anne1234','2');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Maya', 'Henson','Maya234@kea.dk','Maya234','3');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Archi', 'Peterson','archiP@kea.dk','archiP','4');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Tara', 'Khamani' ,'TaraK@kea.dk', 'TaraK','4');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Kenneth','Henson','kenneth11@kea.dk','kenneth11','4');


INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 1, 1);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 2, 1);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 3, 1);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 1, 2);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 2, 2);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21i', 3, 2);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 4, 3);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 5, 3);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 6, 3);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 4, 4);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 5, 4);
INSERT into `rollcall_db`.`students_subjects` (semester, student_id, subject_id) values ('SD21w', 6, 4);


INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 1, 1);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 2, 1);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 3, 1);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 1, 2);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 2, 2);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21i', 3, 2);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21w', 4, 3);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21w', 5, 3);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21w', 4, 4);
INSERT into `rollcall_db`.`teachers_subjects` (semester, teacher_id, subject_id) values ('SD21w', 5, 4);
