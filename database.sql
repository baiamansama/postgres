CREATE DATABASE auth;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE vocab(
    vocab_id SERIAL PRIMARY KEY,
    english VARCHAR(255) NOT NULL,
    korean VARCHAR(255) NOT NULL,
    sentence TEXT NOT NULL,
    vocab_owner uuid REFERENCES users(user_id)
);

CREATE TABLE vocab_processed(
    vocab_id SERIAL PRIMARY KEY,
    english VARCHAR(255) NOT NULL,
    korean VARCHAR(255) NOT NULL,
    sentence TEXT NOT NULL,
    vocab_owner uuid REFERENCES users(user_id)
);


INSERT INTO vocab (english, korean, sentence, vocab_owner) VALUES ('spontane_eng3', 'spontane_kor3', 'sentence with spontane3', '706fc274-19ff-4101-b844-0601f29bf43e');
INSERT INTO vocab (english, korean, sentence, vocab_owner) VALUES ('spontane_eng2', 'spontane_kor2', 'sentence with spontane2');