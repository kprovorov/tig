CREATE TABLE IF NOT EXISTS users
(
    id    SERIAL PRIMARY KEY,
    name  TEXT NOT NULL,
    age   INT  NOT NULL,
    email TEXT
);
