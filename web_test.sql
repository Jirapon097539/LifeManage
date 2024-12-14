-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2024 at 12:58 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `buy` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `TotalBuy` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `date`, `buy`, `detail`, `TotalBuy`) VALUES
(1, '2024-12-14', '10', 'Item details', '1000.00');

-- --------------------------------------------------------

--
-- Table structure for table `graed`
--

CREATE TABLE `graed` (
  `id` int(11) NOT NULL,
  `stdCode` varchar(50) NOT NULL,
  `stdName` varchar(255) NOT NULL,
  `num1` decimal(5,2) DEFAULT 0.00,
  `num2` decimal(5,2) DEFAULT 0.00,
  `num3` decimal(5,2) DEFAULT 0.00,
  `num4` decimal(5,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `graed`
--

INSERT INTO `graed` (`id`, `stdCode`, `stdName`, `num1`, `num2`, `num3`, `num4`) VALUES
(1, '123456', 'John Doe', '85.00', '90.00', '88.00', '92.00');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `prdName` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `date`, `prdName`, `price`, `number`) VALUES
(1, '2024-12-14', 'Product Name', '200.00', 51);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `pinId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `prefix` varchar(10) DEFAULT NULL,
  `FullName` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `subdistrict` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `zipCode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`pinId`, `email`, `password`, `prefix`, `FullName`, `address`, `subdistrict`, `district`, `province`, `image`, `zipCode`) VALUES
(1, 'example@example.com', 'password123', 'Mr.', 'John Doe', '123 Main St', 'Subdistrict 1', 'District 1', 'Province 1', 'image1.jpg', '12345'),
(2147483647, 'natnoinotepopo@gmail.com', '111', 'นางสาว', 'asdf', 'aasdf', 'asdf', 'asdf', 'สุรินทร์', 'user-2.png', '32000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `graed`
--
ALTER TABLE `graed`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stdCode` (`stdCode`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`pinId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `graed`
--
ALTER TABLE `graed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
