 DROP FUNCTION  IF EXISTS fullName;
 CREATE FUNCTION fullName (first_name varchar(20), last_name varchar(20))
 RETURNS varchar (44) deterministic
 RETURN CONCAT(first_name, ' ', last_name);
 