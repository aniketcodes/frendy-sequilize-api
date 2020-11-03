-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 05:48 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frendy`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Patna', '2020-11-02 09:19:07', '2020-11-02 09:19:07'),
(3, 'Muzaffarpur', '2020-11-02 09:20:31', '2020-11-02 09:20:31'),
(4, 'Delhi', '2020-11-02 09:20:54', '2020-11-02 09:20:54'),
(5, 'Lucknow', '2020-11-02 09:21:01', '2020-11-02 09:21:01'),
(6, 'Kanpur', '2020-11-02 09:27:26', '2020-11-02 09:27:26');

-- --------------------------------------------------------

--
-- Table structure for table `citieswithdays`
--

CREATE TABLE `citieswithdays` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `days` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`days`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `citieswithdays`
--

INSERT INTO `citieswithdays` (`id`, `name`, `days`, `createdAt`, `updatedAt`) VALUES
(8, 'Ahmedabad', '[0,0,1,0,1,0,1]', '2020-11-03 02:36:19', '2020-11-03 02:36:19'),
(9, 'Gandhinagar', '[0,1,0,1,0,1,0]', '2020-11-03 02:36:33', '2020-11-03 02:36:33'),
(10, 'Dehgam', '[0,1,1,1,1,1,0]', '2020-11-03 02:36:51', '2020-11-03 02:36:51'),
(11, 'Kalol', '[0,1,0,0,0,1,0]', '2020-11-03 02:37:02', '2020-11-03 02:37:02'),
(12, 'Sanad', '[0,1,0,1,0,1,0]', '2020-11-03 02:37:17', '2020-11-03 02:37:17'),
(13, 'Vadodara', '[0,0,1,0,0,0,1]', '2020-11-03 02:37:26', '2020-11-03 02:37:26'),
(14, 'Mahemedabad', '[0,0,1,0,0,0,1]', '2020-11-03 02:37:40', '2020-11-03 02:37:40'),
(15, 'Nadiad', '[0,0,1,0,0,0,1]', '2020-11-03 02:37:51', '2020-11-03 02:37:51'),
(16, 'Anand', '[0,0,1,0,0,0,1]', '2020-11-03 02:38:01', '2020-11-03 02:38:01'),
(17, 'Palanpur', '[0,0,1,0,0,0,1]', '2020-11-03 02:38:13', '2020-11-03 02:38:13'),
(18, 'Mehsana', '[0,0,1,0,0,0,1]', '2020-11-03 02:38:23', '2020-11-03 02:38:23');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `orderDescription` varchar(255) DEFAULT NULL,
  `orderDate` varchar(255) DEFAULT NULL,
  `orderCity` varchar(255) DEFAULT NULL,
  `orderSlot` varchar(255) DEFAULT NULL,
  `orderDay` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `orderId`, `orderDescription`, `orderDate`, `orderCity`, `orderSlot`, `orderDay`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Demo Order', '2020-11-13', 'Muzaffarpur', 'before10', 'Saturday', '2020-11-02 10:53:42', '2020-11-02 10:53:42'),
(2, 3, 'Demo Order', '2020-11-28', 'Delhi', 'after10', 'Thursday', '2020-11-02 11:02:31', '2020-11-02 11:02:31'),
(3, 5, 'Demo Order', '2020-11-20', 'Delhi', 'after10', 'Sunday', '2020-11-02 11:12:26', '2020-11-02 11:12:26'),
(4, 45, 'Demo Order', '2020-11-28', 'Delhi', 'after10', 'Thursday', '2020-11-02 11:39:18', '2020-11-02 11:39:18');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `productId`, `userId`, `rating`, `title`, `review`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'user1', 5, 'Excellent Product', 'I would say that the product is value for money', '2020-10-30 03:22:44', '2020-10-30 03:22:44'),
(2, 2, 'user1', 5, 'Excellent Product', 'I would say that the product is value for money', '2020-10-30 03:23:28', '2020-10-30 03:23:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `citieswithdays`
--
ALTER TABLE `citieswithdays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `citieswithdays`
--
ALTER TABLE `citieswithdays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
