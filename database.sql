CREATE DATABASE auth;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);
CREATE TABLE vocablist(
    vocab_id SERIAL PRIMARY KEY,
    eng VARCHAR(255) NOT NULL,
    kor VARCHAR(255) NOT NULL,
    sentence TEXT NOT NULL,
    isKnown BOOLEAN NOT NULL,
    whos_id uuid REFERENCES users (user_id) 
);
