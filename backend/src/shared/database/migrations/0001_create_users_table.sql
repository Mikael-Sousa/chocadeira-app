-- Migration: create users table
CREATE TABLE users(
     id SERIAL NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() ,
    PRIMARY KEY(id) 
); 
CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);
