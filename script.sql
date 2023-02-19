-- Active: 1667399386701@@127.0.0.1@3306@apae
CREATE DATABASE apicrud;
USE apicrud;

CREATE TABLE users(
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    login VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_enabled TINYINT(1) NOT NULL DEFAULT 1
);

INSER INTO users (name, login, password) VALUES ('Administrador','admin','admin');