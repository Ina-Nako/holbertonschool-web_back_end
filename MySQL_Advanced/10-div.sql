-- Safe divide
DELIMITER //

CREATE FUNCTION SafeDiv (a INT, b INT)
RETURN FLOAT DETERMINISTIC
BEGIN
   RETURN (IF(b=0, 0, a/b));
END //

DELIMITER;