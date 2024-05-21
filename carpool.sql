-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 21, 2024 at 08:54 AM
-- Server version: 8.2.0
-- PHP Version: 8.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carpool`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
CREATE TABLE IF NOT EXISTS `car` (
  `user_id` int NOT NULL,
  `car_id` int NOT NULL AUTO_INCREMENT,
  `car_name` varchar(200) NOT NULL,
  `chasis_number` varchar(200) NOT NULL,
  `seats_available` varchar(200) NOT NULL,
  `car_plate_number` varchar(200) NOT NULL,
  `from_destination` varchar(200) NOT NULL,
  `to_destination` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(200) NOT NULL,
  `ride_status` enum('on','off') NOT NULL DEFAULT 'on',
  PRIMARY KEY (`car_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`user_id`, `car_id`, `car_name`, `chasis_number`, `seats_available`, `car_plate_number`, `from_destination`, `to_destination`, `date`, `time`, `ride_status`) VALUES
(2, 1, 'Thar', 'ABC', '2', 'GJ01UV9090', 'prahladnagar', 'gandhinagar', '2024-05-23', '12:00', 'on'),
(3, 4, 'Thar', 'ABC', '2', 'GJ01UV9090', 'maninagar', 'bopal', '2024-05-22', '16:00', 'on'),
(4, 5, 'Thar', 'ABC', '2', 'GJ01UV9090', 'ahmedabad', 'bopal', '2024-05-22', '04:00', 'on');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `user_type` enum('admin','carpooler','passenger') NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `email`, `password`, `user_type`) VALUES
(1, 'admin@gmail.com', '$2b$10$b4jhlpla7LllvCRDY9/19.4.AycpZfu3RYv8Uo0DgO6tXhP7Zvyq.', 'admin'),
(2, 'dinkyjani@gmail.com', '$2b$10$6TXJAUwEcqjj9VTuDB.OLO97SLYRofMNC/TMVQVsvvTHUFMcRP1G.', 'carpooler'),
(3, 'dinky@gmail.com', '$2b$10$C4ho/dgSVW.q8px0URTd/.UbOP4eLCSxBUZKlP0S5i3cY49qTz/I6', 'carpooler'),
(4, 'keval@gmail.com', '$2b$10$Dxqy0Gs5pDv2UrVh/IYtDe3yqcCpjhC.77XnDw7XFdWW8SBTXvdNC', 'carpooler'),
(5, 'pass@gmail.com', '$2b$10$tMv7Py0QWdzQTZwWJrBTRe//MN4jTwhHuPtKUKmdXGchq7sIVirDO', 'passenger');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `user_id` int NOT NULL,
  `fname` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `license` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `aadhar` varchar(200) NOT NULL,
  `number` varchar(10) NOT NULL,
  `profile_id` int NOT NULL AUTO_INCREMENT,
  `profile_status` enum('approved','pending') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`profile_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`user_id`, `fname`, `license`, `aadhar`, `number`, `profile_id`, `profile_status`) VALUES
(2, 'dinky', 'abc1234', '1234', '8849530547', 3, 'approved'),
(3, 'dinky', 'bcdef', 'abc121', '8849530547', 5, 'approved'),
(4, 'keval', 'bcdef', 'abc121', '9456159653', 6, 'approved'),
(1, 'Yash', 'zdhfhdsd', 'sdaghsda', '384343', 8, 'pending'),
(5, 'keval', NULL, 'abc121', '9456159653', 13, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `request_name` enum('true','false') NOT NULL DEFAULT 'true',
  `car_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`request_id`),
  KEY `car_id` (`car_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `car_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `login` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `login` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `request_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `login` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
