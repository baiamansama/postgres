CREATE DATABASE auth;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    pw_reset_token TEXT,
    pw_reset_token_exp TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(user_id)
);

CREATE TABLE vocab(
    vocab_id SERIAL PRIMARY KEY,
    english VARCHAR(255) NOT NULL,
    korean VARCHAR(255) NOT NULL,
    sentence TEXT NOT NULL
);

CREATE TABLE vocab_vote(
    vocab_vote_id SERIAL PRIMARY KEY,
    isKnown BOOLEAN NOT NULL,
    vote_owner uuid REFERENCES users(user_id),
    vote_word INTEGER REFERENCES vocab(vocab_id)
);


INSERT INTO vocab (english, korean, sentence) VALUES ('spontane_eng3', 'spontane_kor3', 'sentence with spontane3');
INSERT INTO vocab (english, korean, sentence) VALUES ('spontane_eng2', 'spontane_kor2', 'sentence with spontane2');
INSERT INTO vocab (english, korean, sentence) VALUES ('spontane_eng1', 'spontane_kor1', 'sentence with spontane1');
INSERT INTO vocab (english, korean, sentence) VALUES ('spontane_eng5', 'spontane_kor5', 'sentence with spontane5');
INSERT INTO vocab (english, korean, sentence) VALUES ('spontane_eng4', 'spontane_kor4', 'sentence with spontane4');