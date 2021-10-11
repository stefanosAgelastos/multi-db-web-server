CREATE OR REPLACE TRIGGER before_code_generate 
    BEFORE INSERT ON code
    FOR EACH ROW
 BEGIN
  IF( teacher_course.teacher_id != code.teacher_id )
  THEN
    RAISE_APPLICATION_ERROR( -20001, 
                             'Teacher does not match the course' );
  END IF;
END;