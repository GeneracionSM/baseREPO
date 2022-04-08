-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2022 a las 13:43:57
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hackathon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emocion`
--

CREATE TABLE `emocion` (
  `idEmocion` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frase`
--

CREATE TABLE `frase` (
  `idFrase` int(11) NOT NULL,
  `frase` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `idPost` int(11) NOT NULL,
  `premium` tinyint(1) DEFAULT 0,
  `fechapost` datetime DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `idEmocion` int(11) DEFAULT NULL,
  `path_img` varchar(100) NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reaccion`
--

CREATE TABLE `reaccion` (
  `idPost` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idEmocion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registroemocion`
--

CREATE TABLE `registroemocion` (
  `idRegistroEmocion` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `idEmocion` int(11) DEFAULT NULL,
  `contexto` varchar(100) DEFAULT NULL,
  `data` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesion`
--

CREATE TABLE `sesion` (
  `idSesion` int(11) NOT NULL,
  `fecha_entrada` datetime DEFAULT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombre` char(30) NOT NULL,
  `apellido_1` char(30) NOT NULL,
  `apellido_2` char(30) DEFAULT NULL,
  `mail` varchar(50) NOT NULL,
  `password` char(30) NOT NULL,
  `path_pic` varchar(100) DEFAULT NULL,
  `fecha_nacim` date NOT NULL,
  `saldo` int(11) NOT NULL DEFAULT 20
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `emocion`
--
ALTER TABLE `emocion`
  ADD PRIMARY KEY (`idEmocion`);

--
-- Indices de la tabla `frase`
--
ALTER TABLE `frase`
  ADD PRIMARY KEY (`idFrase`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idPost`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEmocion` (`idEmocion`);

--
-- Indices de la tabla `reaccion`
--
ALTER TABLE `reaccion`
  ADD PRIMARY KEY (`idPost`,`idUsuario`,`idEmocion`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEmocion` (`idEmocion`);

--
-- Indices de la tabla `registroemocion`
--
ALTER TABLE `registroemocion`
  ADD PRIMARY KEY (`idRegistroEmocion`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEmocion` (`idEmocion`);

--
-- Indices de la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD PRIMARY KEY (`idSesion`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `emocion`
--
ALTER TABLE `emocion`
  MODIFY `idEmocion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `frase`
--
ALTER TABLE `frase`
  MODIFY `idFrase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registroemocion`
--
ALTER TABLE `registroemocion`
  MODIFY `idRegistroEmocion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesion`
--
ALTER TABLE `sesion`
  MODIFY `idSesion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`idEmocion`) REFERENCES `emocion` (`idEmocion`);

--
-- Filtros para la tabla `reaccion`
--
ALTER TABLE `reaccion`
  ADD CONSTRAINT `reaccion_ibfk_1` FOREIGN KEY (`idPost`) REFERENCES `post` (`idPost`),
  ADD CONSTRAINT `reaccion_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `reaccion_ibfk_3` FOREIGN KEY (`idEmocion`) REFERENCES `emocion` (`idEmocion`);

--
-- Filtros para la tabla `registroemocion`
--
ALTER TABLE `registroemocion`
  ADD CONSTRAINT `registroemocion_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `registroemocion_ibfk_2` FOREIGN KEY (`idEmocion`) REFERENCES `emocion` (`idEmocion`);

--
-- Filtros para la tabla `sesion`
--
ALTER TABLE `sesion`
  ADD CONSTRAINT `sesion_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
