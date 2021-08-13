CREATE DATABASE auth;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4()
)