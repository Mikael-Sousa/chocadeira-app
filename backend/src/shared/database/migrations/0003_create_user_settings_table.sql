-- Migration: create user_settings table
CREATE TABLE user_settings(
     user_id integer NOT NULL,
    default_theme boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now() ,
    PRIMARY KEY(user_id) ,
    CONSTRAINT fk_user FOREIGN key(user_id) REFERENCES users(id) 
);