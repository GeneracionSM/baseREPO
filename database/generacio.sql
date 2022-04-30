-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2022 a las 13:31:05
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `generacio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emocion`
--

CREATE TABLE `emocion` (
  `idEmocion` int(11) NOT NULL,
  `nombreImagen` varchar(50) DEFAULT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `idEtiq` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `nombre_etiqueta` varchar(50) DEFAULT NULL,
  `idEtiqueta` int(11) NOT NULL,
  `idTem` int(11) DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedback`
--

CREATE TABLE `feedback` (
  `fechaFeed` date DEFAULT NULL,
  `idFeed` int(11) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL,
  `idEtiq` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `idMensaje` int(11) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `idPost` int(11) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `professional`
--

CREATE TABLE `professional` (
  `nombre` varchar(50) DEFAULT NULL,
  `apellido1` varchar(50) DEFAULT NULL,
  `apellido2` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nombreUsuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `fecha_entrada` datetime DEFAULT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `idPub` int(11) NOT NULL,
  `idMensaje` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `r_nombreusuario_tematica`
--

CREATE TABLE `r_nombreusuario_tematica` (
  `nombreUsuario` varchar(50) NOT NULL,
  `idTem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `idSesion` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL,
  `idEmocionOut` int(11) DEFAULT NULL,
  `idEmocionIn` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tematica`
--

CREATE TABLE `tematica` (
  `nombre_tematica` varchar(50) DEFAULT NULL,
  `idTem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre` varchar(50) DEFAULT NULL,
  `apellido1` varchar(50) DEFAULT NULL,
  `apellido2` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nombreUsuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `emocion`
--
ALTER TABLE `emocion`
  ADD PRIMARY KEY (`idEmocion`),
  ADD KEY `idEtiq` (`idEtiq`);

--
-- Indices de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD PRIMARY KEY (`idEtiqueta`),
  ADD KEY `idTem` (`idTem`),
  ADD KEY `idPost` (`idPost`);

--
-- Indices de la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`idFeed`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`idMensaje`),
  ADD KEY `nombreUsuario` (`nombreUsuario`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `nombreUsuario` (`nombreUsuario`);

--
-- Indices de la tabla `professional`
--
ALTER TABLE `professional`
  ADD PRIMARY KEY (`nombreUsuario`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`idPub`),
  ADD KEY `idMensaje` (`idMensaje`);

--
-- Indices de la tabla `r_nombreusuario_tematica`
--
ALTER TABLE `r_nombreusuario_tematica`
  ADD PRIMARY KEY (`nombreUsuario`,`idTem`),
  ADD KEY `idTem` (`idTem`);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD PRIMARY KEY (`idSesion`),
  ADD KEY `nombreUsuario` (`nombreUsuario`),
  ADD KEY `idEmocionOut` (`idEmocionOut`),
  ADD KEY `idEmocionIn` (`idEmocionIn`);

--
-- Indices de la tabla `tematica`
--
ALTER TABLE `tematica`
  ADD PRIMARY KEY (`idTem`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`nombreUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `emocion`
--
ALTER TABLE `emocion`
  MODIFY `idEmocion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `idEtiqueta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `feedback`
--
ALTER TABLE `feedback`
  MODIFY `idFeed` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `idMensaje` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `idPub` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesion`
--
ALTER TABLE `sesion`
  MODIFY `idSesion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tematica`
--
ALTER TABLE `tematica`
  MODIFY `idTem` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `emocion`
--
ALTER TABLE `emocion`
  ADD CONSTRAINT `emocion_ibfk_1` FOREIGN KEY (`idEtiq`) REFERENCES `etiqueta` (`idEtiqueta`);

--
-- Filtros para la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD CONSTRAINT `etiqueta_ibfk_1` FOREIGN KEY (`idTem`) REFERENCES `tematica` (`idTem`),
  ADD CONSTRAINT `etiqueta_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `post` (`idPost`);

--
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `mensaje_ibfk_1` FOREIGN KEY (`nombreUsuario`) REFERENCES `professional` (`nombreUsuario`);

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`nombreUsuario`) REFERENCES `usuario` (`nombreUsuario`);

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`idMensaje`) REFERENCES `mensaje` (`idMensaje`);

--
-- Filtros para la tabla `r_nombreusuario_tematica`
--
ALTER TABLE `r_nombreusuario_tematica`
  ADD CONSTRAINT `r_nombreusuario_tematica_ibfk_1` FOREIGN KEY (`nombreUsuario`) REFERENCES `usuario` (`nombreUsuario`),
  ADD CONSTRAINT `r_nombreusuario_tematica_ibfk_2` FOREIGN KEY (`idTem`) REFERENCES `tematica` (`idTem`);

--
-- Filtros para la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD CONSTRAINT `sesion_ibfk_1` FOREIGN KEY (`nombreUsuario`) REFERENCES `usuario` (`nombreUsuario`),
  ADD CONSTRAINT `sesion_ibfk_2` FOREIGN KEY (`idEmocionOut`) REFERENCES `emocion` (`idEmocion`),
  ADD CONSTRAINT `sesion_ibfk_3` FOREIGN KEY (`idEmocionIn`) REFERENCES `emocion` (`idEmocion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
