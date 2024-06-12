create database magistertoken;

USE magistertoken;

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

CREATE TABLE publicacao(
idPub int auto_increment primary key,
fkUsuario int,
 titulo varchar(45),
 sistema char(3),
 historia varchar(10000),
 dataPub datetime default current_timestamp,
 constraint fkpubUsuario foreign key (fkUsuario)
 references usuario(idUsuario)
);

CREATE TABLE comentario(
idComent int auto_increment,
fkPub int, 
fkUsuario int,
constraint pkComentPubUsuario primary key(idComent, fkPub, fkUsuario),
comentario varchar(2000),
dataComent datetime default current_timestamp,
constraint fkcomentpub foreign key(fkPub)
references publicacao(idPub),
constraint fkcomentusuario foreign key(fkUsuario)
references usuario(idUsuario)
);

