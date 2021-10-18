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
INSERT INTO `rollcall_db`.`subjects` (`subject_name`,`program_id`) VALUES ('Interface Design',' 2' );
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
 
 
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Asger Batting','Clausen','ASBC','AsgerBC','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Tomas','Pesek','TOMP','TOM','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Jarl','Tuxen','JART','jarlT','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Andrea','Corradini','Andc','AndreaC','1');
INSERT INTO `rollcall_db`.`teachers` (`first_name`,`last_name`,`email`,`password`,`department_id`) VALUES ('Anders','Latif','Andl','nodeanders','1');
 
 
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Ole','Sørensen','Ole1234','Ole','2');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Maria', 'Van',' M1234','Mvan','3');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Archana', 'Maurya',' arch000','archM','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Tariq', 'Zamani' ,'Tariq11', 'TarZam','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Stefanos','Agelastos','Stef2222','Setf','1');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Anne','Sørensen','Anne1234','Ole','2');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Maya', 'Henson',' Maya234','MayaH','3');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Archi', 'Peterson',' archiP','12345','4');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Tara', 'Khamani' ,'TaraK', '123Tara','4');
INSERT INTO `rollcall_db`.`students` (`first_name`,`last_name`,`user_name`,`password`,`program_id`) VALUES ('Kenneth','Henson','kenneth11','kenhan','4');