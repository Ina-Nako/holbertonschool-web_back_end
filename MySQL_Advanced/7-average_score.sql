-- Create the stored procedure
DELIMITER $$

CREATE PROCEDURE ComputeAverageScoreForUser(IN user_id INT)
BEGIN
    UPDATE users
    SET
       average_score = (
        SELECT AVG(score) FROM correction
        WHERE correction.user_id = user_id
      )
    WHERE id = user_id
END $$

DELIMITER ;
