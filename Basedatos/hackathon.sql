-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2022 a las 16:34:56
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
  `idEmocion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `emocion`
--

INSERT INTO `emocion` (`nombre`, `imagen`) VALUES
('Content', './Emojis/content.svg'),
('Trist', './Emojis/trist.svg'),
('Sorprès', './Emojis/sorpres.svg'),
('Enfadat', './Emojis/enfadat.svg'),
('Nerviós', './Emojis/nervios.svg'),
('Enrabiat', './Emojis/enrabiat.svg'),
('Eufòric', './Emojis/euforic.svg'),
('Emocionat', './Emojis/emocionat.svg'),
('Melancòlic', './Emojis/melancolid.svg'),
('Il·lusionat', './Emojis/ilusionat.svg'),
;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frase`
--

CREATE TABLE `frase` (
  `idFrase` int(11) NOT NULL,
  `frase` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `frase`
--

INSERT INTO `frase` (`idFrase`, `frase`) VALUES
(1, 'No es que no sepas programar, es que te falta RAM');

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

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`idPost`, `premium`, `fechapost`, `idUsuario`, `idEmocion`, `path_img`, `descripcion`) VALUES
(1, 0, '2022-04-08 16:24:38', 1, 1, 'https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender', 'Logo github porque me inspira mucho'),
(2, 1, '2022-04-08 16:27:33', 1, 1, 'https://res.cloudinary.com/practicaldev/image/fetch/s--sWV8Y0kc--/c_imagga_scale,f_auto,fl_progressi', 'Este post es premium'),
(3, 0, '2022-04-08 16:29:38', 1, 1, 'https://logo.uib.cat/digitalAssets/338/338690_logo-uib-horizontal300.png', 'Logo uib');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reaccion`
--

CREATE TABLE `reaccion` (
  `idPost` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idEmocion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reaccion`
--

INSERT INTO `reaccion` (`idPost`, `idUsuario`, `idEmocion`) VALUES
(2, 1, 1);

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
  `username` char(30) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` char(30) NOT NULL,
  `admin` BOOLEAN NOT NULL DEFAULT FALSE,
  `path_pic` varchar(100) DEFAULT NULL,
  `fecha_nacim` date NOT NULL,
  `saldo` int(11) NOT NULL DEFAULT 20,
  `biografia` varchar(240) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `apellido_1`, `apellido_2`, `mail`, `password`, `path_pic`, `fecha_nacim`, `saldo`, `biografia`) VALUES
(1, 'Adefesio', 'Javier', 'Vazquez', 'adefesio.javier@gmail.com', 'passadefesio', NULL, '2013-04-09', 20, 'Esto es una pureba');

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
-- AUTO_INCREMENT de la tabla `frase`
--
ALTER TABLE `frase`
  MODIFY `idFrase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `idPost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
