-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS champions;

CREATE TABLE champions (
    id BIGINT GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    quote VARCHAR NOT NULL,
);