CREATE DATABASE orderOnline;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL UNIQUE,
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL UNIQUE,
  name VARCHAR NOT NULL,
  description VARCHAR,
  price MONEY NOT NULL,
  image_url VARCHAR,
  ingredients VARCHAR,
  category_id SERIAL,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
