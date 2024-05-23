-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 23, 2024 at 02:18 PM
-- Server version: 5.7.36
-- PHP Version: 8.1.0

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
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `car_name` varchar(200) NOT NULL,
  `chasis_number` varchar(200) NOT NULL,
  `seats_available` varchar(200) NOT NULL,
  `car_plate_number` varchar(200) NOT NULL,
  `from_destination` varchar(200) NOT NULL,
  `to_destination` varchar(200) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `ride_status` enum('on','off') NOT NULL DEFAULT 'on',
  `date` date NOT NULL,
  `time` varchar(200) NOT NULL,
  PRIMARY KEY (`car_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`user_id`, `car_id`, `car_name`, `chasis_number`, `seats_available`, `car_plate_number`, `from_destination`, `to_destination`, `price`, `ride_status`, `date`, `time`) VALUES
(2, 1, 'Thar', 'ABC', '2', 'GJ01UV9090', 'satellite', 'bopal', 150.00, 'on', '2024-05-24', '12:00'),
(3, 4, 'Thar', 'ABC', '2', 'GJ01UV9090', 'ahmedabad', 'bopal', 100.00, 'on', '2024-05-22', '10:00'),
(6, 5, 'XUV', 'abj ', '4', 'GJ01TY1234', 'satellite', 'bopal', 200.00, 'on', '2024-05-23', '10:00');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `user_type` enum('admin','carpooler','passenger') NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `email`, `password`, `user_type`) VALUES
(1, 'admin@gmail.com', '$2b$10$b4jhlpla7LllvCRDY9/19.4.AycpZfu3RYv8Uo0DgO6tXhP7Zvyq.', 'admin'),
(2, 'dinkyjani@gmail.com', '$2b$10$6TXJAUwEcqjj9VTuDB.OLO97SLYRofMNC/TMVQVsvvTHUFMcRP1G.', 'carpooler'),
(3, 'dinky@gmail.com', '$2b$10$C4ho/dgSVW.q8px0URTd/.UbOP4eLCSxBUZKlP0S5i3cY49qTz/I6', 'carpooler'),
(4, 'keval@gmail.com', '$2b$10$Dxqy0Gs5pDv2UrVh/IYtDe3yqcCpjhC.77XnDw7XFdWW8SBTXvdNC', 'carpooler'),
(5, 'pass@gmail.com', '$2b$10$tMv7Py0QWdzQTZwWJrBTRe//MN4jTwhHuPtKUKmdXGchq7sIVirDO', 'passenger'),
(6, 'd@gmail.com', '$2b$10$CMOXX44AC83pNzEwaDJVguuywm7ZwRtmrWZEOzKJXO9h3mHe0.NQ6', 'carpooler'),
(7, 'pass2@gmail.com', '$2b$10$zSbW6PMu7g3Zyl1xXHQogeRaN7VzlFOLKfjzFf/k3yeuapKColi7a', 'passenger');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `user_id` int(11) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `license` varchar(200) DEFAULT NULL,
  `aadhar` varchar(200) NOT NULL,
  `number` varchar(10) NOT NULL,
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_status` enum('approved','pending','rejected') NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`profile_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`user_id`, `fname`, `license`, `aadhar`, `number`, `profile_id`, `profile_status`) VALUES
(2, 'dinky', 'abc1234', '1234', '8849530547', 3, 'approved'),
(3, 'dinky', 'bcdef', 'abc121', '8849530547', 5, 'approved'),
(4, 'keval', 'bcdef', 'abc121', '9456159653', 6, 'pending'),
(1, 'Yash', 'zdhfhdsd', 'sdaghsda', '384343', 8, 'rejected'),
(5, 'keval', NULL, 'abc121', '9456159653', 13, 'pending'),
(6, 'd', 'abbbbff', 'abc121', '8849530547', 15, 'approved'),
(7, 'DJ', NULL, 'aaxxss', '8849530547', 16, 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_status` enum('requested','pending','rejected') NOT NULL DEFAULT 'requested',
  `car_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `request_accept` enum('approved','rejected') NOT NULL DEFAULT 'rejected',
  PRIMARY KEY (`request_id`),
  KEY `car_id` (`car_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `request_status`, `car_id`, `user_id`, `request_accept`) VALUES
(13, 'requested', 1, 5, 'rejected'),
(16, 'requested', 4, 5, 'approved'),
(19, 'requested', 1, 7, 'rejected'),
(23, 'requested', 4, 7, 'approved'),
(24, 'pending', 5, 7, 'rejected'),
(26, 'pending', 5, 5, 'rejected'),
(27, 'pending', 1, 5, 'rejected'),
(28, 'pending', 5, 5, 'rejected');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
