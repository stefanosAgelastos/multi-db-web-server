-- DELETE ALL CODES ONCE A DAY --
USE rollcall_db;

DROP EVENT IF EXISTS deleteCodesDaily;

CREATE EVENT deleteCodesDaily
ON SCHEDULE EVERY 1 DAY
        starts DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d 12:00:00')
DO DELETE FROM `rollcall_db`.`code`;