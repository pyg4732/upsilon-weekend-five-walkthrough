CREATE DATABASE gifs;

CREATE TABLE favorites (
    id serial PRIMARY KEY NOT NULL,
    url character varying(256),
    comment text
);
