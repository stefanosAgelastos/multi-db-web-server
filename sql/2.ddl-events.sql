-- DELETE ALL CODES ONCE A DAY --
USE rollcall_db;

DROP EVENT IF EXISTS deletePresenceKeyDaily;

CREATE EVENT deletePresenceKeyDaily
ON SCHEDULE EVERY 1 DAY
        starts DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d 14:15:00')
DO DELETE FROM `rollcall_db`.`presence_key`;