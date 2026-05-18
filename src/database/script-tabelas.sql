-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database eldenring;

use eldenring;

-- Tabela de usuários
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

-- Tabela de chefes
CREATE TABLE chefe (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO chefe (nome) VALUES 
('Margit'),
('Godrick'),
('Rennala'),
('Radahn'),
('Malenia'),
('Besta Elfica');

-- Tabela de resultados do quiz 
CREATE TABLE quiz_resultado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    chefe VARCHAR(50) NOT NULL,
    data_resposta DATETIME DEFAULT NOW(),
    CONSTRAINT fk_quiz_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- tabela N:N
CREATE TABLE usuario_chefe_favorito (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    fk_chefe INT NOT NULL,
    data_favoritado DATETIME DEFAULT NOW(),
    CONSTRAINT fk_favorito_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    CONSTRAINT fk_favorito_chefe FOREIGN KEY (fk_chefe) REFERENCES chefe(id)
);