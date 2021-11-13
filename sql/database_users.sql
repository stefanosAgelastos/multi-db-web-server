-- localhost is OK as long as application and db is on the same machine. 
-- password to-be-changed
CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'password';
CREATE USER 'db_admin'@'localhost' IDENTIFIED BY 'password';


GRANT SELECT, INSERT, DELETE, UPDATE ON rollcall_db.* TO 'db_user'@'localhost';
FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON rollcall_db.* TO 'db_admin'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'db_user'@'localhost';
SHOW GRANTS FOR 'db_admin'@'localhost';