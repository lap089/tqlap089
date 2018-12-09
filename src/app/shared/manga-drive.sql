-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 20, 2018 at 10:55 PM
-- Server version: 10.1.23-MariaDB-9+deb9u1
-- PHP Version: 5.6.22-2+b3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manga-drive`
--
CREATE DATABASE IF NOT EXISTS `manga-drive` DEFAULT CHARACTER SET ascii COLLATE ascii_general_ci;
USE `manga-drive`;

-- --------------------------------------------------------

--
-- Table structure for table `manga`
--

CREATE TABLE IF NOT EXISTS `manga` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `source` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_source_UNIQUE` (`title`,`source`)
) ENGINE=InnoDB AUTO_INCREMENT=60281 DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
