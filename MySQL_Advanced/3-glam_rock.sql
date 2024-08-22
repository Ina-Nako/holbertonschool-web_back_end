-- Make a table
-- If table exist, you should not fail
SELECT band_name, IFNULL(split, 2023) - formed lifespan
FROM metal_bands WHERE style LIKE "%Glam rock%" ORDER BY lifespan DESC;