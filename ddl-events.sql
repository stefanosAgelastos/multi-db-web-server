-- DELETE ALL CODES ONCE A DAY --

DROP EVENT IF EXISTS deleteCodesDaily;

CREATE EVENT deleteCodesDaily
ON SCHEDULE EVERY 1 DAY
STARTS CURRENT_TIMESTAMP + INTERVAL 1 DAY
DO DELETE FROM `rollcall_db`.`code`;