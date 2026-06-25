-- Migration: create user_notifications table
CREATE TABLE user_notifications(
     id SERIAL NOT NULL,
    user_id integer NOT NULL,
    sensor varchar(50) NOT NULL,
    status varchar(20) NOT NULL,
    "value" numeric,
    created_at timestamp with time zone NOT NULL DEFAULT now() ,
    PRIMARY KEY(id) ,
    CONSTRAINT notifications_user_id_fkey FOREIGN key(user_id) REFERENCES users(id) 
);
