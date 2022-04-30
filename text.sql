CREATE TABLE publicacion(
    fecha_entrada DATETIME,
    fecha_salida DATETIME,
    idPub INT AUTO_INCREMENT,
    idMensaje INT,
    PRIMARY KEY (idPub)
);

CREATE TABLE mensaje(
    titulo VARCHAR(50),
    descripcion TEXT,
    idMensaje INT AUTO_INCREMENT,
    nombreUsuario VARCHAR(50),
    PRIMARY KEY(idMensaje)
);

CREATE TABLE professional(
    nombre VARCHAR(50),
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50),
    correo VARCHAR(50),
    password VARCHAR(50),
    fecha_nacimiento DATE,
    nombreUsuario VARCHAR(50),
    PRIMARY KEY(nombreUsuario)
);

CREATE TABLE usuario(
    nombre VARCHAR(50),
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50),
    correo VARCHAR(50),
    password VARCHAR(50),
    fecha_nacimiento DATE,
    nombreUsuario VARCHAR(50),
    PRIMARY KEY(nombreUsuario)
);

CREATE TABLE tematica (
    nombre_tematica VARCHAR(50),
    idTem INT AUTO_INCREMENT,
    PRIMARY KEY(idTem)
);

CREATE TABLE etiqueta(
    nombre_etiqueta VARCHAR(50),
    idEtiqueta INT AUTO_INCREMENT,
    idTem INT,
    idPost INT,
    PRIMARY KEY(idEtiqueta)
);

CREATE TABLE post(
    titulo VARCHAR(50),
    descripcion TEXT,
    idPost INT AUTO_INCREMENT,
    nombreUsuario VARCHAR(50),
    PRIMARY KEY(idPost)
);

CREATE TABLE feedback(
    fechaFeed DATE,
    idFeed INT AUTO_INCREMENT,
    nombreUsuario VARCHAR(50),
    idEtiq INT,
    PRIMARY KEY(idFeed)
);

CREATE TABLE emocion(
    idEmocion INT AUTO_INCREMENT,
    nombreImagen VARCHAR(50),
    nombre VARCHAR(25),
    PRIMARY KEY(idEmocion)
);

CREATE TABLE sesion(
    idSesion INT AUTO_INCREMENT,
    time DATETIME,
    nombreUsuario VARCHAR(50),
    idEmocionOut INT,
    idEmocionIn INT,
    PRIMARY KEY(idSesion)
);

CREATE TABLE r_nombreUsuario_tematica(
    nombreUsuario VARCHAR(50),
    idTem INT,
    PRIMARY KEY(nombreUsuario, idTem)
);

CREATE TABLE r_Etiqueta_Emocion(
    idEtiqueta INT,
    idEmocion INT,
    PRIMARY KEY(idEtiqueta, idEmocion)
);

ALTER TABLE
    r_nombreUsuario_tematica
ADD
    FOREIGN KEY (nombreUsuario) REFERENCES usuario(nombreUsuario);

ALTER TABLE
    r_nombreUsuario_tematica
ADD
    FOREIGN KEY (idTem) REFERENCES tematica(idTem);

ALTER TABLE
    r_Etiqueta_Emocion
ADD
    FOREIGN KEY (idEtiqueta) REFERENCES Etiqueta(idEtiqueta);

ALTER TABLE
    r_Etiqueta_Emocion
ADD
    FOREIGN KEY (idEmocion) REFERENCES Emocion(idEmocion);

ALTER TABLE
    publicacion
ADD
    FOREIGN KEY (idMensaje) REFERENCES mensaje(idMensaje);

ALTER TABLE
    mensaje
ADD
    FOREIGN KEY (nombreUsuario) REFERENCES professional(nombreUsuario);

ALTER TABLE
    etiqueta
ADD
    FOREIGN KEY (idTem) REFERENCES tematica(idTem);

ALTER TABLE
    etiqueta
ADD
    FOREIGN KEY (idPost) REFERENCES post(idPost);

ALTER TABLE
    post
ADD
    FOREIGN KEY (nombreUsuario) REFERENCES usuario(nombreUsuario);

ALTER TABLE
    sesion
ADD
    FOREIGN KEY (nombreUsuario) REFERENCES usuario(nombreUsuario);

ALTER TABLE
    sesion
ADD
    FOREIGN KEY (idEmocionOut) REFERENCES emocion(idEmocion);

ALTER TABLE
    sesion
ADD
    FOREIGN KEY (idEmocionIn) REFERENCES emocion(idEmocion);