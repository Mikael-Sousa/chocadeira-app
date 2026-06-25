-- Migration: create devices table
CREATE TABLE devices(
     device_id varchar(100) NOT NULL,
    incubation_started_at timestamp with time zone,
    expected_hatch_date timestamp with time zone,
    incubation_status varchar(20) ,
    PRIMARY KEY(device_id) 
);
