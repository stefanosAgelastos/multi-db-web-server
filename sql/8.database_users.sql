-- localhost is OK as long as application and db is on the same machine. 
-- password to-be-changed
CREATE USER IF NOT EXISTS 'db_user'@'%' IDENTIFIED BY 'password';
CREATE USER IF NOT EXISTS 'db_admin'@'%' IDENTIFIED BY 'password';


GRANT SELECT, INSERT, DELETE, UPDATE ON rollcall_db.* TO 'db_user'@'%';
FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON rollcall_db.* TO 'db_admin'@'%';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'db_user'@'%';
SHOW GRANTS FOR 'db_admin'@'%';