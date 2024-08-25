-- Create the stored procedure
CREATE PROCEDURE ComputeAverageScoreForUser(
    IN p_user_id INT
)
BEGIN
    DECLARE v_average_score FLOAT DEFAULT 0;

    -- Calculate the average score for the given user
    SELECT IFNULL(AVG(score), 0) INTO v_average_score
    FROM corrections
    WHERE user_id = p_user_id;

    -- Update the user's average score in the users table
    UPDATE users
    SET average_score = v_average_score
    WHERE id = p_user_id;
END;
