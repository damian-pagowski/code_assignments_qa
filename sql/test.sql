-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 03, 2021 at 07:10 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeDetails`
--

CREATE TABLE `EmployeeDetails` (
  `EmpId` varchar(50) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `ManagerId` int(11) NOT NULL,
  `DateOfJoining` date NOT NULL,
  `City` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `EmployeeDetails`
--

INSERT INTO `EmployeeDetails` (`EmpId`, `FullName`, `ManagerId`, `DateOfJoining`, `City`) VALUES
('121', 'John Snow', 321, '2014-01-30', 'Toronto'),
('321', 'Walter White', 986, '2015-01-30', 'California'),
('421', 'Kuldeep Rana', 876, '2016-10-27', 'New Dheli'),
('555', 'Damian', 0, '2021-04-01', 'Bangkok');

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeSalary`
--

CREATE TABLE `EmployeeSalary` (
  `EmpId` int(121) NOT NULL,
  `Project` varchar(2) NOT NULL,
  `Salary` int(11) NOT NULL,
  `Variable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `EmployeeSalary`
--

INSERT INTO `EmployeeSalary` (`EmpId`, `Project`, `Salary`, `Variable`) VALUES
(121, 'p1', 8000, 500),
(321, 'p2', 10000, 1000),
(421, 'p1', 12000, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;