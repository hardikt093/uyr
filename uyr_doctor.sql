-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2022 at 03:56 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testq_uyr`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_action`
--

CREATE TABLE `admin_action` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `action` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action_model` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action_id` int(11) NOT NULL,
  `ip_address` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_action`
--

INSERT INTO `admin_action` (`id`, `admin_id`, `action`, `action_model`, `action_id`, `ip_address`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'updated', 'roles', 1, '223.179.147.19', '2022-07-21 16:17:14', '2022-07-21 16:17:14', '2022-07-21 12:17:14'),
(2, 1, 'updated', 'roles', 2, '223.179.147.19', '2022-07-21 16:17:23', '2022-07-21 16:17:23', '2022-07-21 12:17:23'),
(3, 1, 'updated', 'roles', 5, '223.179.147.19', '2022-07-21 16:17:33', '2022-07-21 16:17:33', '2022-07-21 12:17:33'),
(4, 72, 'updated', 'roles', 6, '103.157.207.138', '2022-07-22 17:25:29', '2022-07-22 17:25:29', '2022-07-22 13:25:29'),
(5, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-27 16:26:24', '2022-07-27 16:26:24', '2022-07-27 12:26:24'),
(6, 1, 'updated', 'roles', 1, '223.179.147.19', '2022-07-28 17:14:46', '2022-07-28 17:14:46', '2022-07-28 13:14:46'),
(7, 1, 'updated', 'roles', 1, '223.179.147.19', '2022-07-28 17:16:02', '2022-07-28 17:16:02', '2022-07-28 13:16:02'),
(8, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 16:25:35', '2022-07-29 16:25:35', '2022-07-29 12:25:35'),
(9, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 16:26:03', '2022-07-29 16:26:03', '2022-07-29 12:26:03'),
(10, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 16:26:50', '2022-07-29 16:26:50', '2022-07-29 12:26:50'),
(11, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 16:27:18', '2022-07-29 16:27:18', '2022-07-29 12:27:18'),
(12, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 16:33:38', '2022-07-29 16:33:38', '2022-07-29 12:33:38'),
(13, 1, 'updated', 'roles', 1, '103.157.231.189', '2022-07-29 17:42:11', '2022-07-29 17:42:11', '2022-07-29 13:42:11'),
(14, 1, 'updated', 'roles', 1, '103.157.207.248', '2022-08-01 18:55:33', '2022-08-01 18:55:33', '2022-08-01 14:55:33'),
(15, 1, 'updated', 'roles', 1, '103.157.207.248', '2022-08-01 19:00:36', '2022-08-01 19:00:36', '2022-08-01 15:00:36'),
(16, 1, 'updated', 'roles', 1, '103.157.207.248', '2022-08-02 10:37:41', '2022-08-02 10:37:41', '2022-08-02 06:37:41'),
(17, 1, 'updated', 'roles', 2, '103.157.207.241', '2022-08-12 21:12:32', '2022-08-12 21:12:32', '2022-08-12 17:12:32'),
(18, 1, 'updated', 'roles', 1, '117.99.183.51', '2022-08-25 23:31:30', '2022-08-25 23:31:30', '2022-08-25 14:01:30'),
(19, 1, 'updated', 'roles', 2, '117.99.183.51', '2022-08-25 23:31:49', '2022-08-25 23:31:49', '2022-08-25 14:01:49'),
(20, 1, 'updated', 'roles', 3, '223.177.92.216', '2022-09-26 23:49:45', '2022-09-26 23:49:45', '2022-09-26 14:19:45'),
(21, 1, 'updated', 'roles', 6, '1.186.197.67', '2022-10-12 21:55:57', '2022-10-12 21:55:57', '2022-10-12 12:25:57'),
(22, 1, 'updated', 'roles', 1, '1.186.196.135', '2022-12-03 03:25:41', '2022-12-03 03:25:41', '2022-12-02 16:55:41'),
(23, 1, 'updated', 'roles', 1, '103.157.231.187', '2022-12-07 22:54:39', '2022-12-07 22:54:39', '2022-12-07 12:24:39'),
(24, 1, 'updated', 'roles', 1, '103.157.231.187', '2022-12-07 23:34:35', '2022-12-07 23:34:35', '2022-12-07 13:04:35');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `doctor_suggest_id` int(11) NOT NULL,
  `mediator_doctor_id` int(11) NOT NULL,
  `appointment_date` datetime DEFAULT NULL,
  `appointment_time` time DEFAULT NULL,
  `total_fees` double(8,2) DEFAULT NULL,
  `status` enum('Pending','Accept','Reject','Completed') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Pending',
  `payment_status` enum('Completed','Pending','Failed','Initiate','In-Process') COLLATE utf8_unicode_ci DEFAULT 'Pending',
  `dr_status` enum('All','My Open Order','Close','Approved mediator') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'All',
  `cancelled_by` int(11) DEFAULT NULL,
  `cancellation_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `patient_id`, `doctor_id`, `doctor_suggest_id`, `mediator_doctor_id`, `appointment_date`, `appointment_time`, `total_fees`, `status`, `payment_status`, `dr_status`, `cancelled_by`, `cancellation_date`, `created_at`, `updated_at`) VALUES
(1, 18, 14, 1, 13, '2022-11-17 00:00:00', '04:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-17 21:17:43', '2022-11-17 22:32:43'),
(2, 9, 14, 2, 13, '2022-11-18 00:00:00', '07:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-17 21:48:32', '2022-11-17 22:36:08'),
(3, 22, 14, 5, 13, '2022-11-18 00:00:00', '02:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-17 21:55:02', '2022-11-17 22:39:37'),
(4, 18, 14, 6, 13, '2022-11-17 00:00:00', '04:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-17 22:01:14', '2022-11-17 22:54:01'),
(5, 22, 14, 8, 13, '2022-11-17 00:00:00', '01:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-17 22:06:42', '2022-11-17 22:19:55'),
(6, 22, 14, 9, 13, '2022-11-25 00:00:00', '07:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-25 02:44:19', '2022-11-25 02:50:28'),
(7, 8, 14, 11, 13, '2022-11-25 00:00:00', '06:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-25 22:49:31', '2022-11-25 22:52:33'),
(8, 23, 31, 13, 13, '2022-11-29 00:00:00', '11:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-27 08:42:59', '2022-11-27 08:52:14'),
(9, 24, 31, 15, 19, '2022-11-27 00:00:00', '13:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-27 09:00:13', '2022-11-27 09:17:00'),
(10, 23, 31, 16, 19, '2022-11-27 00:00:00', '12:30:00', 100.00, 'Pending', 'Pending', 'Approved mediator', NULL, NULL, '2022-11-27 09:01:47', '2022-12-05 23:03:22'),
(11, 8, 14, 17, 13, '2022-11-28 00:00:00', '06:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-29 02:53:50', '2022-11-29 03:12:32'),
(12, 8, 14, 18, 13, '2022-11-28 00:00:00', '06:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-29 03:26:55', '2022-12-09 07:47:20'),
(13, 26, 36, 21, 13, '2022-11-29 00:00:00', '08:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-29 08:31:10', '2022-11-29 08:39:47'),
(14, 8, 14, 22, 13, '2022-11-29 00:00:00', '02:30:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-11-29 21:45:49', '2022-11-29 22:38:10'),
(15, 8, 14, 23, 0, '2022-12-06 00:00:00', '08:00:00', 100.00, 'Pending', 'Pending', 'All', NULL, NULL, '2022-12-05 22:53:10', '2022-12-05 22:53:10'),
(16, 8, 14, 23, 0, '2022-12-06 00:00:00', '09:00:00', 100.00, 'Pending', 'Pending', 'All', NULL, NULL, '2022-12-05 23:00:36', '2022-12-05 23:00:36'),
(17, 8, 14, 23, 19, '2022-12-06 00:00:00', '09:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-12-05 23:01:01', '2022-12-05 23:05:37'),
(18, 27, 31, 24, 0, '2022-12-08 00:00:00', '09:30:00', 100.00, 'Pending', 'Pending', 'All', NULL, NULL, '2022-12-07 08:16:07', '2022-12-07 08:16:07'),
(19, 29, 31, 31, 19, '2022-12-10 00:00:00', '06:00:00', 100.00, 'Completed', 'Pending', 'Close', NULL, NULL, '2022-12-09 07:34:13', '2022-12-09 07:44:22');

-- --------------------------------------------------------

--
-- Table structure for table `booking_answers`
--

CREATE TABLE `booking_answers` (
  `id` bigint(11) NOT NULL,
  `question_id` bigint(11) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `booking_complaints`
--

CREATE TABLE `booking_complaints` (
  `id` bigint(11) NOT NULL,
  `booking_id` bigint(11) NOT NULL,
  `booking_question_id` bigint(11) NOT NULL,
  `booking_question_answer_id` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `booking_questions`
--

CREATE TABLE `booking_questions` (
  `id` bigint(11) NOT NULL,
  `type_id` bigint(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `id` int(11) NOT NULL,
  `firstName` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `message` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `age` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `resume` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`id`, `firstName`, `lastName`, `email`, `phone`, `message`, `age`, `gender`, `address`, `resume`, `status`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'Yogesh', 'GANGURDE', 'yogesh@uyr.COM', '09552605855', '', '29', 'Male', 'Sai Niwas Aaprtment', NULL, 1, 0, '2022-08-02 06:49:45', '2022-08-11 18:57:15'),
(2, 'Roshan', 'Jadhav', 'roshan@uyr.com', '4256631987', '', '26', 'Male', 'Mamta nagar,balewadi high street,Pune', NULL, 0, 1, '2022-08-02 09:07:13', '2022-08-02 13:08:15'),
(3, 'John', 'Smith', 'john1@gmail.com', '1234567892', '', '30', 'Male', 'Kondhwa Budruk, Pune, Maharashtra 411046, India', NULL, 2, 1, '2022-08-02 11:04:29', '2022-08-02 15:23:03'),
(4, 'Test', 'Doctor_Career', 'TEST@uyr.com', '495848575474', '', '24', 'Female', 'AT pune', NULL, 1, 0, '2022-08-02 11:07:01', '2022-08-02 15:07:33'),
(5, 'test', 'Career', 'testq@uyr.com', 'djfejfhrhjfh', '', '23', 'Female', 'pune', 'resume1659438742.docx', 2, 0, '2022-08-02 11:12:22', '2022-09-26 17:49:44'),
(6, 'Test ', 'User', 'Test@UYR.com', '1234569874', '', '40', 'Male', 'Pune', NULL, 0, 1, '2022-08-02 11:20:25', '2022-08-02 15:22:27'),
(7, 'Denial', 'Klein', 'denial@UYR.com', '45456fgrg11464', '', '32', 'Male', 'Pune', NULL, 0, 1, '2022-08-02 11:29:33', '2022-08-02 15:55:25'),
(8, 'Denial ', 'Klein', 'denial@uyr.com', 'dgewfyggfyh864', '', '39', 'Male', 'pune', NULL, 0, 1, '2022-08-02 11:56:16', '2022-08-02 15:57:24'),
(9, 'Denial', 'Klein', 'denial@uyr.com', '488541236895', '', '53', 'Male', 'pune', NULL, 0, 0, '2022-08-02 11:58:10', '2022-08-02 11:58:10'),
(10, 'User Doctor', 'test', 'userd@uyr.com', '4115255223', '', '54', 'Female', 'Pune', NULL, 0, 1, '2022-08-02 12:00:03', '2022-08-02 16:00:25'),
(11, 'UsreDoctor', 'Test', 'userd@uyr.com', '745206+3+', '', '51', 'Female', 'Pune', NULL, 0, 0, '2022-08-02 12:01:31', '2022-08-02 12:01:31'),
(12, 'testing', 'fileupload ', 'testing@uyr.com', '+919552605855', '', '33', 'Male', 'Naahik', 'resume1659441978.pdf', 0, 0, '2022-08-02 12:06:18', '2022-08-02 12:06:18'),
(13, 'ABCD', 'Test', 'abcd@uyr.com', '4115522622dfff', '', '51', 'Female', 'Pune', NULL, 0, 0, '2022-08-02 12:12:48', '2022-08-02 12:12:48'),
(14, 'XYZ', 'test', 'xyz@uyr.com', '4155263633', '', '42', 'Male', 'Pune', 'resume1659442513.docx', 0, 0, '2022-08-02 12:15:13', '2022-08-02 12:15:13'),
(15, 'Mr', 'Career', 'Career@uyr.com', '384-737-8485', '', '23', 'Female', 'pune', 'resume1659448895.docx', 0, 0, '2022-08-02 14:01:35', '2022-08-02 14:01:35');

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `id` int(11) NOT NULL,
  `bookingID` int(11) NOT NULL,
  `medicalHistory` text DEFAULT NULL,
  `noneof` varchar(255) DEFAULT NULL,
  `describeSituation` text DEFAULT NULL,
  `describeAnswers` text DEFAULT NULL,
  `pastHistory` text DEFAULT NULL,
  `medication` text DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `maritalStatus` varchar(255) DEFAULT NULL,
  `alcohol` varchar(255) DEFAULT NULL,
  `athleticActivities` varchar(255) DEFAULT NULL,
  `tobacco` varchar(255) DEFAULT NULL,
  `additionalInformation` text DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`id`, `bookingID`, `medicalHistory`, `noneof`, `describeSituation`, `describeAnswers`, `pastHistory`, `medication`, `occupation`, `maritalStatus`, `alcohol`, `athleticActivities`, `tobacco`, `additionalInformation`, `comment`, `created_at`, `updated_at`) VALUES
(1, 5, 'High Blood Pressure,Diabetes', '', '', '', '', '', '', 'Single', '', '', '', '', NULL, '2022-11-17 22:13:19', '2022-11-17 22:19:55'),
(2, 1, 'Paralysis,Diabetes', '', '', '', '', '', '', '', '', '', '', '', 'Checked', '2022-11-17 22:25:26', '2022-11-17 22:32:43'),
(3, 2, 'Hay Fever (Recurrent),Back Problems', '', '', '', '', '', '', '', '', '', '', '', 'Checked', '2022-11-17 22:35:48', '2022-11-17 22:36:08'),
(4, 3, 'Ear Trouble /Hearing Loss,Migraine Headaches,Hay Fever (Recurrent)', '', 'test', '', '', 'test', '', '', '', '', '', '', 'ok tested', '2022-11-17 22:38:45', '2022-11-17 22:39:37'),
(5, 4, 'Alcohol,Drug Abuse,Joint Disease/Injury,Anemia', '', '', '', '', '', '', '', '', '', '', '', 'test', '2022-11-17 22:53:04', '2022-11-17 22:54:01'),
(6, 6, 'Back Problems,Hay Fever (Recurrent)', '', 'Having fever', '', '', '', '', '', '', '', '', '', 'Ok', '2022-11-25 02:50:02', '2022-11-25 02:50:28'),
(7, 7, 'Pneumonia,Hay Fever (Recurrent)', '', 'Having High fever', '', '', '', '', '', '', '', '', '', 'Ok', '2022-11-25 22:52:00', '2022-11-25 22:52:33'),
(8, 8, 'Mumps,Disability/Handicapped,Migraine Headaches', '', 'gjzvz', 'xcxxz', 'ccxzxzc', 'cxcxzxz,czxz', 'farmer', 'Married', '5', '', '', '', NULL, '2022-11-27 08:51:08', '2022-11-27 08:52:14'),
(9, 9, 'Alcohol,Cancer,Eating Disorder,Anemia', '', 'very seroiuva', 'dkdkkd', 'waaddsafs', 'fffsa,dfdaasa,ggddd', 'teacher', 'Married', '7', 'no', '10', 'fdfddddzd', NULL, '2022-11-27 09:10:59', '2022-11-27 09:17:00'),
(10, 11, 'Back Problems,Hay Fever (Recurrent)', '', 'Having high fever', '', '', '', '', '', '', '', '', '', 'Consultation is fine', '2022-11-29 03:09:22', '2022-11-29 03:12:32'),
(11, 13, 'Mumps,Chicken Pox,Alcohol', '', 'dsffdgdd', 'xxzxzxzvxz', 'xzvxvcxvcx', 'ggdgd,gdgdgdg,ssds', 'dgddgd', 'Single', '', 'yes', '', 'cgfdfdgdgds', NULL, '2022-11-29 08:38:50', '2022-11-29 08:39:47'),
(12, 14, 'Back Problems,Pneumonia,Alcohol,Hepatitis/Jaundice', '', 'Pneumonia,\nBack Problems', '', '', '', '', '', '', '', '', '', 'OK', '2022-11-29 22:37:38', '2022-11-29 22:38:10'),
(13, 17, 'Rubella (3 Day Measles),Hepatitis/Jaundice,Convulsions/Seizures', '', 'Hepatitis/Jaundice', '', '', ',', '', '', '', '', '', '', 'Ok', '2022-12-05 23:04:40', '2022-12-05 23:05:37'),
(14, 19, 'Head Injury', '0', 'cggggfgfg', 'jbvnvbvnv', 'gfhfhfhfhf', 'tutrhg,iththfdbdv', 'teacher', 'Married', '5', '', '', 'vhdnxz,xz', NULL, '2022-12-09 07:42:05', '2022-12-09 07:44:22'),
(15, 12, 'Alcohol', '', 'zlksc', 'czvcxvxc', 'bcbcb', 'bbcbcx', 'cbcbcx', 'Single', '', '', '', 'cbb', 'cvjjchgcjv', '2022-12-09 07:46:43', '2022-12-09 07:47:20');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us_details`
--

CREATE TABLE `contact_us_details` (
  `id` bigint(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contactno` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `isactive` tinyint(4) NOT NULL,
  `isdeleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us_details`
--

INSERT INTO `contact_us_details` (`id`, `email`, `contactno`, `address`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'info@uyrapp.com', '1122334456', NULL, 0, 0, '2021-09-24 09:03:37', '2021-09-24 13:21:59'),
(5, 'support@uyr.com', '98756342512', 'Testing Address, London, United Kingdom', 1, 0, '2022-08-12 16:59:38', '2022-08-12 16:59:38');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us_enquiries`
--

CREATE TABLE `contact_us_enquiries` (
  `id` bigint(11) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `message` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `isactive` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us_enquiries`
--

INSERT INTO `contact_us_enquiries` (`id`, `firstName`, `lastName`, `email`, `phone`, `message`, `status`, `isactive`, `created_at`, `isdeleted`, `updated_at`) VALUES
(1, 'Yogesh', 'Gangurde', 'gangurde.yogesh47@gmail.com', '+919552605855', 'Test message Test message  Test message  Test message', 0, 0, '2022-08-02 02:47:39', 0, '2022-08-02 06:47:39'),
(2, 'Rashi', 'Patil', 'rashi@uyr.com', '1234567890', 'kolte patil building,karve nagar', 0, 0, '2022-08-02 06:24:19', 1, '2022-08-02 14:25:52'),
(3, 'Yogesh', 'GANGURDE', 'yogesh@uyr.COM', '095-526-0585', 'test', 0, 0, '2022-09-24 09:20:42', 0, '2022-09-24 13:20:42');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_address`
--

CREATE TABLE `doctor_address` (
  `id` int(11) NOT NULL,
  `doctor_information_id` int(11) NOT NULL,
  `full_address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `area` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `latitude` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `longitude` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `long_org` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `what3words` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `what3wordsjson` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip_code` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctor_address`
--

INSERT INTO `doctor_address` (`id`, `doctor_information_id`, `full_address`, `address`, `address2`, `area`, `city`, `country`, `state`, `latitude`, `longitude`, `long_org`, `what3words`, `what3wordsjson`, `zip_code`, `created_at`, `updated_at`) VALUES
(1, 12, '', 'Balewadi High St, Laxman Nagar, Baner, Pune, Maharashtra 411045, India', 'Balewadi High Street', 'Baner', 'Pune', 'India', 'Maharashtra', '18.570625', '73.7748603', '73.7748603', '', '\"\\\"\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\"\\\"\"', '411045', '2022-07-20 09:19:47', '2022-09-24 20:49:25'),
(2, 13, '', 'Karve Rd, Rahul Nagar, Kothrud, Pune, Maharashtra, India', 'Karve Road', 'Kothrud', 'Pune', 'India', 'Maharashtra', '18.4993405', '73.8137412', NULL, '', '\"\"', '', '2022-07-20 09:27:32', '2022-09-26 19:44:30'),
(3, 14, 'Katraj Chowk, Santosh Nagar, Ambegaon BK, Pune, Maharashtra', 'Katraj Chowk, Santosh Nagar, Ambegaon BK, Pune, Maharashtra 411046', 'Santosh Nagar', 'Ambegaon BK', 'Pune', 'India', 'Maharashtra', '18.448127', '73.8584891', '73.8584891', '', '\"\\\"\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\"\\\"\"', '411046', '2022-07-21 12:31:55', '2022-11-17 13:46:11'),
(4, 19, 'United Kingdom', 'United Kingdom', '', '', 'Leicester ', 'United Kingdom', 'United Kingdom', '55.378051', '-3.435973', NULL, '', '\"\"', '', '2022-08-02 14:27:45', '2022-08-02 14:27:45'),
(9, 29, '', 'Leicester, UK', '', '', 'Leicester', 'United Kingdom', 'England', '', '', '0', '', '\"\\\"\\\"\"', 'LE2 5BB', '2022-08-23 21:32:31', '2022-09-26 18:49:10'),
(10, 30, '', 'Leicester, UK', '', '', 'Leicester', 'United Kingdom', 'England', '', '', '0', '', '\"\\\"\\\"\"', 'LE2 5BB', '2022-08-24 19:27:18', '2022-09-24 20:37:04'),
(11, 31, 'Santa, Cameroon, Cameroon', 'Santa, Cameroon', 'Railway Station Road', '', 'Santa', 'Cameroon', 'Northwest', '5.7990203', '10.1619222', '10.1619222', '', '\"\\\"\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\"\\\"\"', '411001', '2022-08-25 15:08:34', '2022-12-07 03:10:27'),
(12, 15, 'Bamenda, Cameroon', 'Bamenda, Cameroon', '', '', 'Bamenda', 'Cameroon', 'Northwest', '5.9596793220951', '10.145602966565', '10.145602966565', '', '\"\\\"\\\"\"', 'cf239lz', '2022-09-19 00:31:00', '2022-11-16 00:02:28'),
(13, 32, 'Sus - Pashan Road, Sus, Pune, Maharashtra, India', 'Pashan - Sus Rd, Sus, Pune, Maharashtra 411021, India', 'Pashan - Sus Road', 'Sus', 'Pune', 'India', 'Maharashtra', '18.5492035', '73.7648718', '73.7648718', '', '\"\"', '411021', '2022-09-24 20:58:00', '2022-09-24 20:58:00'),
(14, 28, '', 'London, UK', '', '', 'London', 'United Kingdom', 'England', '51.5072178', '-0.1275862', '0.1275862', '', '\"\\\"\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\"\\\"\"', '', '2022-09-26 18:40:30', '2022-09-26 18:48:16'),
(15, 34, '', 'Leicester, UK', '', '', 'Leicester', 'United Kingdom', 'England', '', '', '0', '', '\"\"', 'LE2 5BB', '2022-09-26 19:53:01', '2022-09-26 19:53:01'),
(16, 36, 'Our lady of grace hospital, Asikuma, Ghana', 'Ekumfi street, Asikuma, Ghana', '', '', 'Asikuma', 'Ghana', 'Central Region', '5.5833443', '-0.9985435', '0.9985435', '', '\"\\\"\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"\\\\\\\"\\\"\"', '', '2022-11-17 13:39:05', '2022-11-29 03:27:07');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_booking_timeslot`
--

CREATE TABLE `doctor_booking_timeslot` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `day` varchar(100) DEFAULT NULL,
  `fromTime` varchar(100) DEFAULT NULL,
  `toTime` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor_booking_timeslot`
--

INSERT INTO `doctor_booking_timeslot` (`id`, `user_id`, `day`, `fromTime`, `toTime`, `created_at`, `updated_at`) VALUES
(1, 105, 'Sunday', '17:11', '23:11', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(2, 105, 'Monday', '10:00', '17:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(3, 105, 'Tuesday', '00:00', '00:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(4, 105, 'Wednesday', '00:00', '00:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(5, 105, 'Thursday', '00:00', '00:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(6, 105, 'Friday', '00:00', '00:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(7, 105, 'Saturday', '00:00', '00:00', '2022-08-27 00:11:36', '2022-08-29 19:40:28'),
(8, 71, 'Sunday', '09:00', '03:20', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(9, 71, 'Monday', '09:01', '22:00', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(10, 71, 'Tuesday', '09:00', '22:00', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(11, 71, 'Wednesday', '09:00', '22:00', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(12, 71, 'Thursday', '09:00', '22:00', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(13, 71, 'Friday', '09:00', '23:58', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(14, 71, 'Saturday', '09:00', '04:30', '2022-08-29 18:35:17', '2022-12-09 19:29:01'),
(15, 132, 'Sunday', '10:00', '15:30', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(16, 132, 'Monday', '12:00', '07:30', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(17, 132, 'Tuesday', '04:01', '12:00', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(18, 132, 'Wednesday', '04:00', '11:00', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(19, 132, 'Thursday', '06:00', '12:00', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(20, 132, 'Friday', '01:00', '10:00', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(21, 132, 'Saturday', '01:00', '07:00', '2022-09-23 02:08:11', '2022-11-16 04:59:16'),
(22, 138, 'Sunday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(23, 138, 'Monday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(24, 138, 'Tuesday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(25, 138, 'Wednesday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(26, 138, 'Thursday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(27, 138, 'Friday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(28, 138, 'Saturday', '00:00', '00:00', '2022-10-29 07:07:38', '2022-10-29 07:07:38'),
(29, 143, 'Sunday', '01:00', '08:09', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(30, 143, 'Monday', '01:10', '08:30', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(31, 143, 'Tuesday', '01:00', '08:00', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(32, 143, 'Wednesday', '01:00', '08:09', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(33, 143, 'Thursday', '01:01', '08:00', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(34, 143, 'Friday', '01:00', '08:01', '2022-11-17 18:42:19', '2022-11-17 18:42:50'),
(35, 143, 'Saturday', '01:00', '08:00', '2022-11-17 18:42:19', '2022-11-17 18:42:50');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_information`
--

CREATE TABLE `doctor_information` (
  `id` bigint(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `dr_type` tinyint(11) DEFAULT 0 COMMENT '0-Doctor, 1-Mediator Doctor',
  `type` tinyint(4) NOT NULL DEFAULT 0,
  `certificate_awarding_university` varchar(150) DEFAULT NULL,
  `speciality_diploma` varchar(150) DEFAULT NULL,
  `copy_of_registration` varchar(255) DEFAULT NULL,
  `medical_license_number` varchar(100) DEFAULT NULL,
  `date_of_registration` date DEFAULT NULL,
  `registration_no` varchar(100) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `fees_amount` double(8,2) DEFAULT NULL,
  `availability_time_from` varchar(200) DEFAULT NULL,
  `area_of_coverage` varchar(250) DEFAULT NULL,
  `current_clinic_hospital` varchar(200) DEFAULT NULL,
  `willing_to_serve_as` varchar(100) DEFAULT NULL,
  `equipment` varchar(250) DEFAULT NULL,
  `brief_summary` text DEFAULT NULL,
  `terms_and_conditions` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0-Pending, 1-Rejected,2-Approved',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor_information`
--

INSERT INTO `doctor_information` (`id`, `user_id`, `dr_type`, `type`, `certificate_awarding_university`, `speciality_diploma`, `copy_of_registration`, `medical_license_number`, `date_of_registration`, `registration_no`, `experience`, `fees_amount`, `availability_time_from`, `area_of_coverage`, `current_clinic_hospital`, `willing_to_serve_as`, `equipment`, `brief_summary`, `terms_and_conditions`, `status`, `created_at`, `updated_at`) VALUES
(1, 6, 0, 3, '', '', '', '1010', '2021-12-01', 'R101', '6', 700.00, '06:00 AM-07:00 PM', NULL, 'Uk', '2', 'Radiography', 'Example: “I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I\'m not comfortable with settling, and I\'m always looking for an opportunity to do better and achieve greatness', 'A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.', 0, '2021-12-20 08:43:14', '2022-05-20 11:44:04'),
(2, 7, 0, 4, '', '', '', '102', '2021-09-03', '102', '10', 1000.00, '06:00 AM-03:00 PM', NULL, 'n', '3', 'Radiography,Reflex hammer', 'One of the first questions you may be asked in a job interview is, “How would you describe yourself?” While you have several options when deciding how to answer this question, the key is to explain why your specific experiences and attributes make you the best fit for the role.', 'This article will get you started with creating your own custom Terms and Conditions agreement. We\'ve also put together a Sample Terms and Conditions Template that you can use to help write your own.', 0, '2021-12-20 08:45:58', '2022-02-10 18:23:25'),
(3, 8, 1, 1, '', '', '', 'M101', '2021-12-07', 'M101', '6', NULL, '10:00:00-12:00:00', NULL, 'UKJ', '', 'Radiography', 'A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.', 'A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.', 0, '2021-12-20 08:48:30', '2021-12-26 22:24:18'),
(4, 17, 0, 1, '', '', '', 'le567898', '2012-01-19', 'le456767', '10', 150.00, '06:00 AM-11:00 AM', NULL, 'Medall on', '1', '', 'NA', 'NA', 0, '2021-12-21 11:40:45', '2022-02-10 18:21:47'),
(5, 20, 0, 4, '', '', '', 'DR101010', '2022-01-11', '10101', '10', 300.00, '06:00 AM-07:00 PM', NULL, 'Clinic', '3', '', '', '', 0, '2022-02-10 18:06:29', '2022-05-20 11:46:00'),
(6, 21, 0, 3, '', '', '', '1010', '2021-12-01', 'R101', '6', NULL, '06:00 AM-07:00 PM', NULL, 'Uk', '2', 'Radiography', 'Example: “I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I\'m not comfortable with settling, and I\'m always looking for an opportunity to do better and achieve greatness', 'A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.', 0, '2022-03-01 16:59:21', '2022-03-15 10:46:50'),
(8, 34, 1, 4, '', '', '', '123456', '2022-01-19', 'bas123', '0', NULL, '06:00 AM-03:00 PM', NULL, 'Nahik', 'PUSH', 'Reflex hammer,Sphygmomanometer ', '', '', 2, '2022-03-12 12:58:14', '2022-05-28 15:38:48'),
(9, 44, 0, 4, '', '', '', '123456', '2012-12-01', '456123', '0', 1000.00, '', NULL, '', '3', '', '', '', 0, '2022-03-15 11:07:05', '2022-05-20 11:44:46'),
(11, 51, 0, 1, '', '', '', '1020ABC', '2022-05-18', '1020ABCD', '4', 500.00, '01:00 PM-07:00 PM', NULL, 'Appolo Nahik', '2', 'Reflex hammer,Sphygmomanomete', 'Testing', 'Testing', 0, '2022-05-28 15:35:36', '2022-05-28 15:35:36'),
(12, 61, 0, 1, '', '', '', '45678952', '2011-06-01', '123456', '10', 600.00, '06:00 AM-03:00 PM', '', 'City Hospital', '1', '', '', '', 0, '2022-07-20 13:19:47', '2022-09-25 00:49:25'),
(13, 62, 1, 4, '', '', '', 'xx1234yy', '2008-02-07', '236548789', '20', NULL, '06:00 AM-11:00 AM', NULL, '', '', '', '', '', 0, '2022-07-20 13:27:32', '2022-09-26 23:44:30'),
(14, 71, 0, 1, '', '', '', '142536', '2014-11-21', '1425936', '8', 100.00, '07:00 AM-12:00 PM', '', '', '1', '', '', '', 2, '2022-07-21 16:31:55', '2022-11-17 18:46:11'),
(15, 77, 0, 0, '', '', '', '6777', '2022-09-06', '58757', '1', 100.00, '', '', '', '8', '', '', '', 2, '2022-08-02 14:46:59', '2022-11-16 05:02:28'),
(16, 79, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-02 15:07:33', '2022-08-02 15:07:33'),
(17, 80, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-02 15:22:48', '2022-08-02 15:22:48'),
(18, 81, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-02 16:49:26', '2022-08-02 16:49:26'),
(19, 85, 1, 4, 'cirtificate_1659450465.png', 'specialtyfile_1659450465.png', 'registrationfile_1659450465.png', '5786865856867', '2021-08-11', '23456788999', '12', NULL, '06:00 AM-11:00 AM', NULL, '', '', '', '', '', 0, '2022-08-02 18:27:45', '2022-08-02 18:27:45'),
(21, 96, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-12 20:15:48', '2022-08-12 20:15:48'),
(27, 104, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-08-18 19:47:54', '2022-08-18 19:47:54'),
(28, 105, 0, 0, '', '', '', 'ghbfgvbgvvb v', '2022-09-19', 'rfg45565', '6', 100.00, '', '', '', '', '', '', '', 1, '2022-08-18 20:18:55', '2022-09-26 22:48:16'),
(29, 107, 0, 0, '', '', '', 'hyjytjje', '2021-06-15', 'tjtdxth', '5', 100.00, '', '', '566', '8', '9,11,15,17', '', '', 1, '2022-08-24 01:32:31', '2022-09-26 22:49:10'),
(30, 130, 0, 0, '', '', '', 'fgth', '2022-08-24', 'hjhsryry', '24', 100.00, '', '', '', '8', '', '', '', 0, '2022-08-24 23:27:18', '2022-09-25 00:37:04'),
(31, 132, 0, 1, '', '', '', '212234455', '2022-01-25', '122332333', '3435466', 100.00, '07:00 AM-12:00 PM', '', '', '7', '11,12,15,17,14,10,8,9', '', '', 0, '2022-08-25 19:08:34', '2022-12-07 08:10:27'),
(32, 135, 0, 1, '', '', '', '1223334', '2018-01-01', '1234345', '5', 100.00, '', '', '', '7', '', '', '', 0, '2022-09-25 00:58:00', '2022-09-25 00:58:00'),
(33, 136, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-09-26 23:29:17', '2022-09-26 23:29:17'),
(34, 137, 0, 0, '', '', '', 'grthvgh', '2022-02-01', '4565666', '10', 100.00, '', '', '', '8', '', '', '', 0, '2022-09-26 23:53:01', '2022-09-26 23:53:01'),
(35, 138, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2022-09-27 01:32:15', '2022-09-27 01:32:15'),
(36, 143, 0, 1, '', '', '', '12345678', '2013-01-01', '1234565678', '8', 100.00, '', '', 'Clinic', '7', '', '', '', 0, '2022-11-17 18:36:16', '2022-11-29 08:27:07');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_services`
--

CREATE TABLE `doctor_services` (
  `id` bigint(11) NOT NULL,
  `doctor_id` bigint(11) NOT NULL,
  `service_id` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_slots`
--

CREATE TABLE `doctor_slots` (
  `id` bigint(11) NOT NULL,
  `doctor_id` bigint(11) DEFAULT NULL,
  `avl_date` datetime DEFAULT NULL,
  `time_from` time NOT NULL,
  `time_to` time DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_suggest`
--

CREATE TABLE `doctor_suggest` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_specialist` int(11) NOT NULL,
  `date_of_suggest` date DEFAULT NULL,
  `to_time` time DEFAULT NULL,
  `from_time` time NOT NULL,
  `health_specialist` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `visit_type` int(11) NOT NULL COMMENT '0-Home Visit,1-Clinic Visit',
  `medical_recommendation` tinyint(4) NOT NULL COMMENT '1-Yes,2-No',
  `medical_report_attachment` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reason` text COLLATE utf8_unicode_ci NOT NULL,
  `medical_history` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `appointments_status` enum('Initiate','Pending','Failed','Completed') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Initiate' COMMENT '1-Initiate,2-Pending,3-Failed,4-Completed',
  `booking_type` enum('Suggest','FindMySelf') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `doctor_suggest`
--

INSERT INTO `doctor_suggest` (`id`, `patient_id`, `user_id`, `type_specialist`, `date_of_suggest`, `to_time`, `from_time`, `health_specialist`, `visit_type`, `medical_recommendation`, `medical_report_attachment`, `reason`, `medical_history`, `description`, `appointments_status`, `booking_type`, `created_at`, `updated_at`) VALUES
(1, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'test trere e ', '', '', 'Initiate', 'FindMySelf', '2022-11-17 21:17:35', '2022-11-17 21:17:35'),
(2, 9, 74, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', 'Back Problems,Thyroid Problems,High/Low Blood Pressure', '', 'Initiate', 'FindMySelf', '2022-11-17 21:48:02', '2022-11-17 21:48:02'),
(3, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', 'Fungal Infection,Diabetes', '', 'Initiate', 'FindMySelf', '2022-11-17 21:52:05', '2022-11-17 21:52:05'),
(4, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', 'High/Low Blood Pressure,Diabetes', '', 'Initiate', 'FindMySelf', '2022-11-17 21:52:30', '2022-11-17 21:52:30'),
(5, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', 'Fungal Infection,Diabetes,High/Low Blood Pressure', '', 'Initiate', 'FindMySelf', '2022-11-17 21:54:17', '2022-11-17 21:54:17'),
(6, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Test payment', '', '', 'Initiate', 'FindMySelf', '2022-11-17 22:00:36', '2022-11-17 22:00:36'),
(7, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Fungal Infection', 'Fungal Infection,Headaches', '', 'Initiate', 'FindMySelf', '2022-11-17 22:06:04', '2022-11-17 22:06:04'),
(8, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Test', 'Headaches,Fungal Infection', '', 'Initiate', 'FindMySelf', '2022-11-17 22:06:33', '2022-11-17 22:06:33'),
(9, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Having Fever\n', 'Headaches,Back Problems', '', 'Initiate', 'FindMySelf', '2022-11-25 02:44:03', '2022-11-25 02:44:03'),
(10, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Back Problem', 'Arthritis/Rheumatism,Back Problems', '', 'Initiate', 'FindMySelf', '2022-11-25 22:47:14', '2022-11-25 22:47:14'),
(11, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Back Problem', 'Back Problems,Eczema/Psoriasis,Headaches', '', 'Initiate', 'FindMySelf', '2022-11-25 22:49:20', '2022-11-25 22:49:20'),
(12, 23, 145, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'High blood pressure', 'Diabetes,Fungal Infection,Headaches', 'Heart Condition, and Headaches ', 'Initiate', 'FindMySelf', '2022-11-27 08:38:30', '2022-11-27 08:38:30'),
(13, 23, 145, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'stomach pain', '', 'Diabetes and fever', 'Initiate', 'FindMySelf', '2022-11-27 08:41:35', '2022-11-27 08:41:35'),
(14, 24, 146, 3, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 's the capital and largest city of Wales. It forms a principal area, officially known as the City and County of Cardiff, and the city is the eleventh-largest in the United Kin', 'Thyroid Problems,Epilepsy,Fungal Infection', 'Fever', 'Initiate', 'FindMySelf', '2022-11-27 08:57:14', '2022-11-27 08:57:14'),
(15, 24, 146, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 's the capital and largest city of Wales. It forms a principal area, officially known as the City and County of Cardiff, and the city is the eleventh-largest in the United Kin', 'Headaches,Fungal Infection,Epilepsy', 'fever', 'Initiate', 'FindMySelf', '2022-11-27 08:59:58', '2022-11-27 08:59:58'),
(16, 23, 145, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '020, I used the key industry links and opportunities presented to our course to kick start my career. What initially started as a 24-hour innovation challenge with an external company has now directly led to me working full-time at', 'Claustrophobia,Diabetes,Epilepsy', 'fever', 'Initiate', 'FindMySelf', '2022-11-27 09:01:36', '2022-11-27 09:01:36'),
(17, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Having Back problem and Fever', 'Back Problems,Headaches,Arthritis/Rheumatism', '', 'Initiate', 'FindMySelf', '2022-11-29 02:53:38', '2022-11-29 02:53:38'),
(18, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Arthritis/Rheumatism', 'Varicose Veins,Arthritis/Rheumatism,Back Problems', '', 'Initiate', 'FindMySelf', '2022-11-29 03:26:43', '2022-11-29 03:26:43'),
(19, 26, 149, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'My people are suffering from stomach pain', 'Headaches,Other,Diabetes', '', 'Initiate', 'FindMySelf', '2022-11-29 08:19:09', '2022-11-29 08:19:09'),
(20, 26, 149, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Sickness', 'Back Problems,Fungal Infection,Diabetes', '', 'Initiate', 'FindMySelf', '2022-11-29 08:24:09', '2022-11-29 08:24:09'),
(21, 26, 149, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'sickness', 'Back Problems,Diabetes,Heart Condition', 'dsgfdg', 'Initiate', 'FindMySelf', '2022-11-29 08:29:21', '2022-11-29 08:29:21'),
(22, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Fungal Infection, Eczema/Psoriasis', 'Eczema/Psoriasis,Epilepsy,Fungal Infection', '', 'Initiate', 'FindMySelf', '2022-11-29 21:45:38', '2022-11-29 21:45:38'),
(23, 8, 72, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Thyroid Problems', 'Thyroid Problems,Varicose Veins,Arthritis/Rheumatism', '', 'Initiate', 'FindMySelf', '2022-12-05 22:52:03', '2022-12-05 22:52:03'),
(24, 27, 151, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Pa has high fever yesterday', 'Other,Headaches,Back Problems', 'Not happy', 'Initiate', 'FindMySelf', '2022-12-07 08:13:50', '2022-12-07 08:13:50'),
(25, 22, 144, 3, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-08 20:11:19', '2022-12-08 20:11:19'),
(26, 22, 144, 3, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-08 20:41:21', '2022-12-08 20:41:21'),
(27, 22, 144, 3, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-08 20:51:20', '2022-12-08 20:51:20'),
(28, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-08 20:51:55', '2022-12-08 20:51:55'),
(29, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-08 20:54:32', '2022-12-08 20:54:32'),
(30, 29, 157, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'anye anye', 'Back Problems,Diabetes,Cancer', 'Back  pain', 'Initiate', 'FindMySelf', '2022-12-09 07:26:23', '2022-12-09 07:26:23'),
(31, 29, 157, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'Anye Anye', 'Varicose Veins,Thyroid Problems', 'jsfhajfas;fsa', 'Initiate', 'FindMySelf', '2022-12-09 07:31:10', '2022-12-09 07:31:10'),
(32, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 18:05:38', '2022-12-09 18:05:38'),
(33, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 18:06:01', '2022-12-09 18:06:01'),
(34, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 18:11:44', '2022-12-09 18:11:44'),
(35, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:10:57', '2022-12-09 19:10:57'),
(36, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:11:45', '2022-12-09 19:11:45'),
(37, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:12:32', '2022-12-09 19:12:32'),
(38, 22, 144, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:13:21', '2022-12-09 19:13:21'),
(39, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:13:49', '2022-12-09 19:13:49'),
(40, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:14:08', '2022-12-09 19:14:08'),
(41, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:15:19', '2022-12-09 19:15:19'),
(42, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:15:34', '2022-12-09 19:15:34'),
(43, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:16:00', '2022-12-09 19:16:00'),
(44, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:18:06', '2022-12-09 19:18:06'),
(45, 22, 144, 3, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'test.', 'Thyroid Problems,Varicose Veins', '', 'Initiate', 'FindMySelf', '2022-12-09 19:45:42', '2022-12-09 19:45:42'),
(46, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 19:45:58', '2022-12-09 19:45:58'),
(47, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', 'df', '', '', 'Initiate', 'FindMySelf', '2022-12-09 11:54:36', '2022-12-09 11:54:36'),
(48, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 13:13:42', '2022-12-09 13:13:42'),
(49, 18, 129, 1, NULL, '00:00:00', '00:00:00', '', 0, 1, '', '', '', '', 'Initiate', 'FindMySelf', '2022-12-09 08:53:48', '2022-12-09 08:53:48');

-- --------------------------------------------------------

--
-- Table structure for table `email_settings`
--

CREATE TABLE `email_settings` (
  `id` int(11) NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpHost` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpUser` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpPassword` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpPort` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpEncryption` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpDriver` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpSendmail` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpPretend` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpFromAddress` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smtpFromName` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `email_settings`
--

INSERT INTO `email_settings` (`id`, `type`, `smtpHost`, `smtpUser`, `smtpPassword`, `smtpPort`, `smtpEncryption`, `smtpDriver`, `smtpSendmail`, `smtpPretend`, `smtpFromAddress`, `smtpFromName`, `created_at`, `updated_at`) VALUES
(1, 'info', 'smtp.eu-west-1.amazonaws.com', 'AKIAXAS7RYFEN5MFQF7M', 'BPx3DeKg87l7P2rR9DJQJeyGFv8wKDDXAotHvIpZ79P7', '587', 'tls', '', '', '', 'yogesh@testqtech.com', 'UYR-DOCTORS', '2022-08-10 08:24:56', '2022-08-10 11:30:41');

-- --------------------------------------------------------

--
-- Table structure for table `favorite_doctor`
--

CREATE TABLE `favorite_doctor` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frequently_asked_questions`
--

CREATE TABLE `frequently_asked_questions` (
  `id` bigint(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `isdeleted` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `frequently_asked_questions`
--

INSERT INTO `frequently_asked_questions` (`id`, `question`, `answer`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'What are the cities and locations you provide home care service', 'We currently provide home care assistance only in **** and are actively partnering with providers outside **** to enable the service outside **** as well.', 1, '2021-09-24 11:06:34', '2022-07-28 13:07:44'),
(2, 'How/Where do i report if i am not happy with the care-taker ?', 'You can call our customer support number to report your problem. We always strive to provide the best service for all your needs. But, in case you are not satisfied with the caregiver assigned to you, we will provide you with a replacement care taker.', 0, '2021-09-27 07:40:02', '2022-07-27 13:21:08'),
(3, 'How do I make a payment?', 'You can pay through Credit / Debit Cards, Net Banking, Pay Wallets (or) through your Contact Doctor account balance', 0, '2021-09-27 14:59:18', '2022-07-27 13:21:26'),
(4, 'how are you', 'fine', 1, '2022-03-12 11:45:01', '2022-03-12 11:45:10'),
(5, 'How do I receive my invoice?', 'Invocie will be sent to the user\'s registered email-id. Alternatively, the user will also be able to download the invoice for all payments they have made from the transaction page.', 0, '2022-07-27 13:21:40', '2022-07-27 13:21:40'),
(6, 'How do I speak to a doctor over the phone?', 'You will be able to speak with the doctor only through a video consultation after booking an appointment with him. you cannot directly call and talk to a doctor here.', 0, '2022-07-27 13:21:55', '2022-07-27 13:21:55'),
(7, 'Define the common FAQ questions for websites.', 'First thing first, you need to sort out what explicit questions you need to reply to. Significantly, the effective, common questions are which appear in the pursuit bar, not rare questions. If not, you may wind up adding an excess of data to overpower customers instead of aiding them. So the real matter is how you ensure to track down the correct questions? \n\nThe advice is to see mails and phone call data, then make a rundown of the top questions that show up continually. Moreover, you can use the advantage of social media to post stories adding puzzles for everyone to let you know what they usually question about your company. Finally, you can refer to some competitor websites to see how they make FAQ questions and answers.', 0, '2022-07-27 15:36:02', '2022-07-27 15:36:02'),
(8, 'Pick a clear and succinct tone', 'FAQ questions and answers for websites aren’t a spot for academic language. It should be effortless to skim without an extreme amount of confusing language that could annoy your customers. To do so, you need to address the question plainly and cover the entire issue. It is ideal to ensure that the appropriate responses are applicable and specific about the realities that highlight your organization’s qualities. \n\nWe likewise suggest composing from your customer’s point of view, utilizing first-individual pronouns like me and mine. This action can assist clients to feel they are being heard. For example, “ Who will support me if I am not pleased with your products?”.', 0, '2022-07-27 15:36:19', '2022-07-27 15:36:19'),
(9, 'Best FAQ questions about the company.', 'You should create a question that provides general information, including the name of the company, the item of business, the warranty, and the location of your company. \n\nYou should also provide contact information to the client, email, or phone number. \n\nHere are some frequently asked questions examples:\n\nWhat are you selling? \nWhat does the guarantee cover? \nWhere can I find you? \nHow might I get in touch with you?', 0, '2022-07-27 15:36:52', '2022-07-27 15:36:52'),
(10, 'Best FAQ questions about shipping.', 'The essential information customers want to know about shipping is delivery times, where customers can track their orders. They also want to know about their return policy or whether they can choose a carrier for themselves.\n\nWhat time will the products be dispatched?\nWhere do your items come from?\nDo you have merchandise exchanges?', 0, '2022-07-27 15:37:41', '2022-07-27 15:37:41'),
(11, 'What\'s your problem?', 'Paining in leg', 1, '2022-08-02 10:27:57', '2022-08-02 10:28:03');

-- --------------------------------------------------------

--
-- Table structure for table `home_page_slider`
--

CREATE TABLE `home_page_slider` (
  `id` bigint(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `image_name` varchar(200) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `manage_website_aboutus`
--

CREATE TABLE `manage_website_aboutus` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `pageName` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `manage_website_aboutus`
--

INSERT INTO `manage_website_aboutus` (`id`, `title`, `description`, `image`, `pageName`, `created_at`, `updated_at`, `status`) VALUES
(1, 'UYR Doctor', '<h1><strong style=\"color: rgb(36, 36, 36);\">Vision:</strong></h1><p><span style=\"color: rgb(36, 36, 36);\">India boasts 750,000 doctors and 1.1 million nurses, practitioner density is about one-fourth of what it is in the U.S. and less than half that of China</span></p><p><span style=\"color: rgb(36, 36, 36);\">The majority of the country\'s estimated 63 million diabetics and 2.5 million cancer sufferers haven\'t been diagnosed yet, let alone treated.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Seventy percent of India\'s 12 million blind people could be cured by a simple surgery if it were available to them.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Build on the success of India\'s medical tourism boom-a $1 billion business that is growing by 30% a year.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Majority of the people delay their visit to a doctor due to their negligence, work stress, and timings that prevents in fixing an appointment with the doctor, travel, wait and the follow-ups involved in the process.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Geographic accessibility - Service(doctor) location and user(patient) location,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Financial accessibility - Cost of services and People\'s resources/ willingness to pay,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Service availability - Availability of Healthcare providers and demand for services.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Quality of care.</span></p><p><br></p><h1><strong style=\"color: rgb(36, 36, 36);\">Mission:</strong></h1><p><span style=\"color: rgb(36, 36, 36);\">India boasts 750,000 doctors and 1.1 million nurses, practitioner density is about one-fourth of what it is in the U.S. and less than half that of China</span></p><p><span style=\"color: rgb(36, 36, 36);\">The majority of the country\'s estimated 63 million diabetics and 2.5 million cancer sufferers haven\'t been diagnosed yet, let alone treated.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Seventy percent of India\'s 12 million blind people could be cured by a simple surgery if it were available to them.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Build on the success of India\'s medical tourism boom-a $1 billion business that is growing by 30% a year.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Majority of the people delay their visit to a doctor due to their negligence, work stress, and timings that prevents in fixing an appointment with the doctor, travel, wait and the follow-ups involved in the process.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Geographic accessibility - Service(doctor) location and user(patient) location,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Financial accessibility - Cost of services and People\'s resources/ willingness to pay,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Service availability - Availability of Healthcare providers and demand for services.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Quality of care.</span></p><p><br></p><h1><strong style=\"color: rgb(36, 36, 36);\">About us:</strong></h1><p><span style=\"color: rgb(36, 36, 36);\">India boasts 750,000 doctors and 1.1 million nurses, practitioner density is about one-fourth of what it is in the U.S. and less than half that of China</span></p><p><span style=\"color: rgb(36, 36, 36);\">The majority of the country\'s estimated 63 million diabetics and 2.5 million cancer sufferers haven\'t been diagnosed yet, let alone treated.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Seventy percent of India\'s 12 million blind people could be cured by a simple surgery if it were available to them.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Build on the success of India\'s medical tourism boom-a $1 billion business that is growing by 30% a year.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Majority of the people delay their visit to a doctor due to their negligence, work stress, and timings that prevents in fixing an appointment with the doctor, travel, wait and the follow-ups involved in the process.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Geographic accessibility - Service(doctor) location and user(patient) location,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Financial accessibility - Cost of services and People\'s resources/ willingness to pay,</span></p><p><span style=\"color: rgb(36, 36, 36);\">Service availability - Availability of Healthcare providers and demand for services.</span></p><p><span style=\"color: rgb(36, 36, 36);\">Quality of care.</span></p>', '', 'about-us', '2022-07-25 11:13:19', '2022-09-29 00:23:33', 1),
(2, 'Privacy Policy', '<h2><strong>INTRODUCTION</strong></h2><p><br></p><p>We at Wasai LLC respect the privacy of your personal information and, as such, make every effort to ensure your information is protected and remains private. As the owner and operator of loremipsum.io (the \"Website\") hereafter referred to in this Privacy Policy as \"Lorem Ipsum\", \"us\", \"our\" or \"we\", we have provided this Privacy Policy to explain how we collect, use, share and protect information about the users of our Website (hereafter referred to as “user”, “you” or \"your\"). For the purposes of this Agreement, any use of the terms \"Lorem Ipsum\", \"us\", \"our\" or \"we\" includes Wasai LLC, without limitation. We will not use or share your personal information with anyone except as described in this Privacy Policy.</p><p>This Privacy Policy will inform you about the types of personal data we collect, the purposes for which we use the data, the ways in which the data is handled and your rights with regard to your personal data. Furthermore, this Privacy Policy is intended to satisfy the obligation of transparency under the EU General Data Protection Regulation 2016/679 (\"GDPR\") and the laws implementing GDPR.</p><p>For the purpose of this Privacy Policy the Data Controller of personal data is Wasai LLC and our contact details are set out in the Contact section at the end of this Privacy Policy. Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p><p>For purposes of this Privacy Policy, \"Your Information\" or \"Personal Data\" means information about you, which may be of a confidential or sensitive nature and may include personally identifiable information (\"PII\") and/or financial information. PII means individually identifiable information that would allow us to determine the actual identity of a specific living person, while sensitive data may include information, comments, content and other information that you voluntarily provide.</p><p>Lorem Ipsum collects information about you when you use our Website to access our services, and other online products and services (collectively, the “Services”) and through other interactions and communications you have with us. The term Services includes, collectively, various applications, websites, widgets, email notifications and other mediums, or portions of such mediums, through which you have accessed this Privacy Policy.</p><p>We may change this Privacy Policy from time to time. If we decide to change this Privacy Policy, we will inform you by posting the revised Privacy Policy on the Site. Those changes will go into effect on the \"Last updated\" date shown at the end of this Privacy Policy. By continuing to use the Site or Services, you consent to the revised Privacy Policy. We encourage you to periodically review the Privacy Policy for the latest information on our privacy practices.</p><p>BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION, TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR INFORMATION (COLLECTIVELY, \"USE OF YOUR INFORMATION\") AS DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH OR CONSENT TO THIS PRIVACY POLICY YOU MAY NOT ACCESS OR USE OUR SERVICES.</p><h2><br></h2>', '', 'privacy-policy', '2022-07-25 11:13:19', '2022-08-12 21:03:10', 1),
(3, 'Terms & Conditions', '<h4>Definitions</h4><p>References to “we” or “us” in these Terms and conditions are to Verdict.</p><p>References to “you” in these Terms and conditions are to the users of this website.</p><p>References to “Partner Organisation” in these Terms and conditions are to organisations with whom Verdict has complied this website.</p><p>References to “the site” in these Terms and conditions are to this website and its contents.</p><h4>Terms and Conditions</h4><ol><li>The information on this Site has been included in good faith for general informational purposes only. The Site may contain information submitted by a third party including adverts. The information should not be relied upon for any specific purpose and no representation or warranty is given as to its accuracy or completeness.</li><li>Any opinions (express or implied) are those of the individual authors and not necessarily those of Verdict Media Limited or its partner organisations.</li><li>Except for any express warranties or undertakings given on the Site, we exclude all warranties (express or implied) in respect of the Site and the content of and your use of the Site.</li><li>We shall not be liable to you for any loss that you suffer (including, without limitation, damages for any consequential loss or loss of business opportunities or projects, or loss of profits) howsoever arising, whether in contract, tort or otherwise from your use or inability to use this Site, or any of its contents, or from any action or omission taken as a result of using this Site provided that nothing in these terms shall exclude or limit our liability for personal injury or death caused by our negligence.</li><li>We may provide links to other websites from time to time. These links are provided for your convenience. We do not endorse or take responsibility for the content of those websites, we are not responsible for the availability of them and will not be liable in any way for any loss or damage which you may suffer by your use or inability to use those websites.</li><li>If you decide to access linked websites you do so at your own risk. If you purchase any goods or services from a third party or third party website to which we provide a link your contract for the supply of those goods and services will be with that third party.</li><li>Reference to any product or service on the Site does not constitute an offer to sell or supply that product or service and does not mean that the product or service is available in all countries or that the name and description of any product in your country will be the same as that included on the Site.</li><li>We have taken every care in the preparation of the Site. However, as certain technical matters may be beyond our control, we cannot guarantee that you will have uninterrupted or error-free access to the Site at all times.</li><li>We make no warranty that the contents of the Site are free from infection by viruses or anything else which has contaminating or destructive properties and shall have no liability in respect thereof.</li><li>We reserve the right at any time, without liability for doing so, to modify or discontinue, temporarily or permanently, any of the content, functions or services we offer on the Site (or any part of them) with or without notice. This includes removing information transmitted by you to us.</li><li>You agree that the information you provide us with when you use the Site will be true and complete and that you will keep it true and complete.</li></ol><h4>Use of the Site</h4><p>You agree not to use the services we provide via the Site to:</p><ol><li>Transmit any information or do anything that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libellous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable;</li><li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affilation with a person or entity;</li><li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the services</li><li>Transmit any information that you do not have a right to transmit or which infringes another’s rights;</li><li>Transmit any unsolicited or unauthorised promotion (including without limitation “junk mail”, “spam”, “chain letters” or “pyramid schemes”);</li><li>Transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt, damage, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</li><li>Interfere with or disrupt the services or servers or networks connected to the services, or disobey any requirements, procedures, policies or regulations of networks connected to the services; or collect or store personal data about other users.</li></ol><p><br></p>', '', 'terms-condition', '2022-07-25 11:13:19', '2022-07-29 16:20:48', 1),
(4, 'About US1', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit <a href=\"http://127.0.0.1:8000/homepage\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(230, 0, 0);\">Click Here ,</a></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'file_1659095378.jpg', 'about-us', '2022-07-25 20:43:19', '2022-09-28 20:12:44', 1),
(5, 'Why work', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  <a href=\"http://67.211.210.169/register\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(230, 0, 0);\">Register here</a></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 'file_1659095378.jpg', 'Why-work', '2022-07-25 20:43:19', '2022-09-29 02:34:06', 1);

-- --------------------------------------------------------

--
-- Table structure for table `manage_website_associate_partners`
--

CREATE TABLE `manage_website_associate_partners` (
  `id` int(11) NOT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `manage_website_associate_partners`
--

INSERT INTO `manage_website_associate_partners` (`id`, `image`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'file_1658924837.jfif', 1, '2022-07-27 16:27:17', '2022-09-19 04:20:58'),
(2, 'file_1658925609.jpg', 0, '2022-07-27 16:40:09', '2022-07-27 16:40:09'),
(3, 'file_1658989767.jfif', 0, '2022-07-28 10:29:27', '2022-07-28 10:29:27'),
(4, 'file_1658989803.jfif', 0, '2022-07-28 10:30:03', '2022-07-28 10:30:03'),
(5, 'file_1658989884.jfif', 1, '2022-07-28 10:31:24', '2022-07-28 11:14:33'),
(6, 'file_1658993987.jfif', 1, '2022-07-28 11:39:47', '2022-07-28 11:43:54'),
(7, 'file_1659010741.jfif', 0, '2022-07-28 16:19:01', '2022-07-28 16:19:01'),
(8, 'file_1659444248.jfif', 0, '2022-08-02 16:44:08', '2022-08-02 16:44:08'),
(9, 'file_1659444267.webp', 0, '2022-08-02 16:44:27', '2022-08-02 16:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `manage_website_blogs`
--

CREATE TABLE `manage_website_blogs` (
  `id` bigint(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `author_name` varchar(250) DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manage_website_blogs`
--

INSERT INTO `manage_website_blogs` (`id`, `title`, `description`, `author_name`, `image_name`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'Senior Doctor', '<p class=\"ql-align-justify\">This service is provided at the patient location and is to make the access to quality medical care convenient for</p><ul><li class=\"ql-align-justify\">Elderly individuals with chronic illnesses that need frequent follow-up with a healthcare service provider</li><li class=\"ql-align-justify\">Disabled / Immobile patients who aren\'t able to visit the hospital / clinic</li><li class=\"ql-align-justify\">Busy senior management executives whose erratic work-schedules deter them from being able to consult a physician</li><li class=\"ql-align-justify\">Dependents who are in need of assistance</li></ul>', 'Anye', 'file_1658925085.jpg', 1, 0, '2022-07-27 12:31:25', '2022-07-27 19:26:43'),
(2, 'Doctor', '<p class=\"ql-align-justify\">Effective communication is the key in a doctor - patient relationship. There can be many barriers to this including patient\'s anxiety and fear, doctor\'s burden of work, fear of litigation, fear of physical or verbal abuse, and unrealistic patient expectations.The ultimate objective of any doctor-patient communication is to improve the patient\'s health and medical care and more importantly in the way the patient understands and sees his/her recovery.Cure and a credible relationship starts with an effective communication between the patient and the service provider that includes attentive listening and empathy.</p><p class=\"ql-align-justify\">Agasthya is one of our key solutions towards addressing this communication barrier. This is a baby bot companion that keeps learning from its interactions with the patient.</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">This baby bot can assist the patients to</p><p class=\"ql-align-justify\"><br></p><ul><li class=\"ql-align-justify\">Know about the medical services,availability and also locate the nearest care providers registered with us</li><li class=\"ql-align-justify\">Schedule appointments for consultations</li><li class=\"ql-align-justify\">Appointments &amp; Pill Reminders</li><li class=\"ql-align-justify\">Get medical reports / prescriptions</li><li class=\"ql-align-justify\">Personalized Health Tips based on previous illness history to stay prevented</li></ul><p class=\"ql-align-justify\"><br></p><p>Agasthya is one of our futuristic communication / service channel through which we would like to stay closer with the patients. We expect this bot to mature and provide more services along the line as our learning improves.</p>', 'Anye', 'file_1658935672.jfif', 1, 0, '2022-07-27 15:27:52', '2022-07-27 19:29:15'),
(3, 'Best general medical blogs', '<p>No matter how much you know about a particular medical field, as a health care professional, you always need to be thinking about what’s next. Thanks to advances in technology, new clinical studies, and ever-changing health care policy, there’s always more to know.</p><p><br></p><p>But there is a downside. Simply running a search for medical blogs will lead to a heap of results. And figuring out which sources are reputable can take a lot of time.</p><p><br></p><p>To help ease the process, we identified 75 of our favorite medical blogs everyone in the field can learn from. Whether you’re pondering medical school, have been a physician for years, or simply want to know how to make well-informed decisions about your health, there’s something on this list for everyone. Keep this list of medical blogs handy and the answers to your medical questions will always be just a few clicks away.</p><p><br></p><p>If you’re interested in a wide range of medical topics, these blogs are worth checking out. They’re also great for those who want to be more informed about health, but have difficulty figuring out where to start.</p><p><br></p><h3>1. Well</h3><p>Part of The New York Times,&nbsp;<a href=\"https://www.nytimes.com/section/well\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>Well</em></a>&nbsp;is a great resource for everything, from the latest research about a particular type of exercise to navigating romantic relationships.&nbsp;<a href=\"https://www.nytimes.com/column/ask-well\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>Ask Well</em></a>, a column that taps physicians and other experts to answer common health questions, is another highlight of the blog.</p><p><br></p><h3>2. KevinMD.com</h3><p>Internal medicine physician Dr. Kevin Pho founded this cult-favorite medical blog in 2004. The&nbsp;<a href=\"http://www.kevinmd.com/blog/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>KevinMD.com</em></a>&nbsp;contributor network has grown to thousands since then, featuring surgeons, nurses, medical school students and more. No topic is off-limits here, so consider it a one-stop shop for medical information.</p><p><br></p><h3>3. WebMD Doctors</h3><p>The well-known health website has quite a collection of blogs, but&nbsp;<a href=\"https://blogs.webmd.com/webmd-doctors/default.htm\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>WebMD Doctors</em></a>&nbsp;stands out for how relatable it is. Each post is penned by a physician, and the topics can be about parenting, heart medication, or how even health professionals struggle with healthy eating.</p><p><br></p><h3>4. Cedars-Sinai Blog</h3><p>Plenty of medical institutions have blogs, but&nbsp;<a href=\"https://blog.cedars-sinai.edu/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\">Cedars-Sinai’s</a>&nbsp;stands out for covering genuinely interesting topics. Instead of numerous posts about their faculty and facilities, expect to read about health topics relevant to just about everyone.</p><p><br></p><h3>5. Kaiser Health News</h3><p>If you find yourself constantly bookmarking health sections on news websites,&nbsp;<a href=\"https://khn.org/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>Kaiser Health News</em></a>&nbsp;is a must-follow. Knowing where to start can be overwhelming with so many topics to choose from, so using the KHN Morning Briefing is a nice way to see a snapshot of all the latest health happenings.</p><p><br></p><h3>6. Harvard Health Blog</h3><p><a href=\"https://www.health.harvard.edu/blog/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\">This blog</a>&nbsp;is part of Harvard Medical School’s family of publications and manages to answer questions most of us didn’t even think to ask. While topics are hard-hitting, don’t expect to find anything terribly obscure when scrolling through these posts.</p><p><br></p><h3>7. Everyday Health</h3><p>There’s a good chance&nbsp;<a href=\"https://www.everydayhealth.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>Everyday Health</em></a>&nbsp;is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for addressing the emotional challenges folks face when managing different conditions.</p><p><br></p><h3>8. Shots</h3><p>This&nbsp;<a href=\"http://www.npr.org/sections/health-shots/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\">health blog</a>&nbsp;from NPR takes a fairly broad look at the medical world, so there’s something for everyone. In addition to the typical news, there’s also some commentary about the intersection of health and pop culture, plus the occasional feel-good piece.</p><p><br></p><h3>9. Health Essentials</h3><p>Given Cleveland Clinic is widely regarded as one of the best hospitals in the country, it makes sense their&nbsp;<a href=\"https://health.clevelandclinic.org/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\"><em>Health Essentials</em></a>&nbsp;blog is top-notch. There’s a good balance of practical health information, safety tips and even healthy recipes.</p><p><br></p><h3>10. Dr. Mike Sevilla</h3><p>Family physician Dr. Mike Sevilla pens&nbsp;<a href=\"http://drmikesevilla.com/blog/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\">a blog</a>&nbsp;geared toward parents. Expect to see a lot of information regarding safety, commentary on trending topics, and a sprinkling of news video segments featuring Sevilla himself.</p><p><br></p><h3>11. To Your Health</h3><p>The Washington Post’s&nbsp;<a href=\"https://www.washingtonpost.com/news/to-your-health/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--link_color);\">health blog</a>&nbsp;takes a very news-focused approach, covering new studies, diseases impacting the country and world, and some stories with a bit of shock factor. It’s a great resource for following up on&nbsp;</p>', 'UYR', 'file_1658935973.jpg', 1, 0, '2022-07-27 15:32:53', '2022-07-27 19:32:53'),
(4, 'Know more about us, We are more than a hospital', '<p class=\"ql-align-justify\"><strong>Who we are?</strong></p><p class=\"ql-align-justify\">We are India’s largest omnichannel digital healthcare platform with the core belief that ‘Expertise is for Everyone’. We combine Apollo’s legacy of clinical excellence, affordable cost, and forward-looking research with cutting-edge technology to make the best quality healthcare easily accessible to every Indian, online.</p><p class=\"ql-align-justify\"><strong>What we do?</strong></p><p class=\"ql-align-justify\">With the launch of Apollo 24|7, the vision of our founder Dr. Prathap C. Reddy of removing mobility barriers from healthcare has become a reality.&nbsp;On a single online platform, you can avail an entire gamut of services, including online doctor consultation, online pharmacy and diagnostic tests at home. We also offer expert-curated solutions for COVID-care and chronic condition management, along with a digital vault where you can upload all your medical history.</p><ul><li class=\"ql-align-justify\"><strong>Online Doctor Consultations</strong></li></ul><p><br></p><p class=\"ql-align-justify\">With 6000+ Apollo doctors from every possible specialty on-board, Apollo 24|7 empowers consumers to consult with doctors in 15 minutes or less, from the comfort and safety of their homes. Online doctor consultation is done via video conferencing, telephonic conversations or online chats.</p><ul><li class=\"ql-align-justify\"><strong>Online Pharmacy</strong></li></ul><p><br></p><p class=\"ql-align-justify\">Armed with a robust network of 4000+ Apollo Pharmacies and delivery partners, Apollo 24|7 is one of the few online medical stores that can guarantee quality and authenticity of medicines, along with 2-hour delivery of full prescription in over 10,000 pin codes. With a comprehensive inventory of over 13500+ medicines and healthcare essentials including supplements, health devices, Ayurvedic products and more, Apollo 24|7 also assures the highest availability of healthcare products.</p><ul><li class=\"ql-align-justify\"><strong>Diagnostic Tests at Home</strong></li></ul><p><br></p><p class=\"ql-align-justify\">Apollo 24|7 brings the trust of Apollo Diagnostics right to the consumer’s doorstep, with home sample collection, same-day reports and affordable pricing on lab tests.</p><ul><li class=\"ql-align-justify\"><strong>CIRCLE - Apollo 24|7’s Premium Healthcare Program</strong></li></ul><p><br></p><p class=\"ql-align-justify\">CIRCLE is a privileged membership plan for those who put their health and wellbeing above all else. The programme promises priority access to Apollo’s best doctors, exclusive deals, personalized care and holistic wellness offerings especially curated by experts.</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">&nbsp;</p><p class=\"ql-align-justify\"><strong>About Apollo Hospitals</strong></p><p class=\"ql-align-justify\">Apollo Hospitals was established in 1983 by Dr. Prathap C Reddy, renowned as the architect of modern healthcare in India. As the nation’s first corporate hospital, Apollo Hospitals is acclaimed for pioneering the private healthcare revolution in the country. The group has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care &amp; Diagnostic Clinics and several retail health models. The Group also has Telemedicine facilities across several countries, Health Insurance Services, Global Projects Consultancy, Medical Colleges, Medvarsity for E-Learning, Colleges of Nursing and Management of Hospitals and a Research Foundation. Since its inception, Apollo Hospitals has been honoured by the trust of over 150 million individuals from 140 countries.</p><p><br></p>', 'UYR', 'file_1659444180.jfif', 1, 0, '2022-08-02 12:43:00', '2022-08-02 16:43:00');

-- --------------------------------------------------------

--
-- Table structure for table `manage_website_home_page_slider`
--

CREATE TABLE `manage_website_home_page_slider` (
  `id` int(11) NOT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `manage_website_home_page_slider`
--

INSERT INTO `manage_website_home_page_slider` (`id`, `image`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'file_1664383592.jpg', 0, '2022-09-29 02:16:32', '2022-09-29 02:16:32'),
(2, 'file_1664383599.jpg', 1, '2022-09-29 02:16:39', '2022-09-29 02:17:38'),
(3, 'file_1664383616.jpg', 1, '2022-09-29 02:16:56', '2022-09-29 02:17:42'),
(4, '', 1, '2022-09-29 02:17:07', '2022-09-29 02:17:20'),
(5, 'file_1664383648.jpg', 0, '2022-09-29 02:17:28', '2022-09-29 02:17:28'),
(6, 'file_1664383678.jpg', 1, '2022-09-29 02:17:58', '2022-09-29 02:31:44'),
(7, 'file_1664383702.jfif', 1, '2022-09-29 02:18:22', '2022-09-29 02:31:36'),
(8, '', 1, '2022-09-29 02:19:37', '2022-09-29 02:21:29'),
(9, 'file_1664383895.jpg', 0, '2022-09-29 02:21:35', '2022-09-29 02:21:35'),
(10, 'file_1664384515.jpg', 0, '2022-09-29 02:31:55', '2022-09-29 02:31:55'),
(11, 'file_1666992179.jpg', 0, '2022-10-29 06:52:59', '2022-10-29 06:52:59');

-- --------------------------------------------------------

--
-- Table structure for table `manage_website_testimonials`
--

CREATE TABLE `manage_website_testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `isdeleted` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `manage_website_testimonials`
--

INSERT INTO `manage_website_testimonials` (`id`, `name`, `description`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, '- MP (United Kingdom)', '<p><span style=\"color: rgb(4, 34, 99);\">“You saved my trip to San Francisco the other week! I felt an ear infection setting in during my flight from London. Your central location, efficiency and courtesy in treating me helped me make the most of a major conference for my industry. Dr Abramson even looked up the price of the antibiotic he prescribed so I wouldn’t be surprised at the pharmacy and printed off a coupon so I could save some money on it. He was awesome and then went the extra mile.”</span></p>', 0, '2022-07-28 18:47:43', '2022-07-28 18:47:43'),
(2, '– ME (San Francisco, CA)', '<p><span style=\"color: rgb(4, 34, 99);\">“To echo the other 5-star reviews, the doctor and his staff have been extremely helpful to me with a variety of my issues. Despite having a busy practice, I’m almost always able to schedule an appt. within a few days of my calling and receive a response to my email or phone questions often the same day. I’ve consulted many MDs in my life, and it’s rare I’ve found one as knowledgeable, accommodating, and concerned as Dr. Abramson.”</span></p>', 1, '2022-07-28 18:48:26', '2022-08-15 15:38:01'),
(3, 'test', 'Personal Information after we have requested it, you have the right to withdraw your consent at any time. To withdraw your consent please contact us at the email address in our Contact section below.</strong></li></ol><h2><strong>YOUR CALIFORNIA PRIVACY RIGHTS</strong></h2><ol><li><strong style=\"color: rgb(36, 36, 36);\">California Civil Code Section 1798.83 entitles California residents to request information concerning whether a business has disclosed Personal Information to any third parties for their direct marketing purposes. California residents may request and obtain from us once a year, free of charge, information about the personal information, if any, we disclosed to third parties for direct marketing purposes within the immediately preceding calendar year. If applicable, this information would include a list of the categories of personal information that was shared and the names and addresses of all third parties with which we shared information within the immediately preceding calendar year.</strong></li><li><strong>If you are a California resident and would like to make such a request, please submit your request in writing to:&nbsp;</strong><a href=\"mailto:legal@wasai.co\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\"><strong>legal@wasai.co</strong></a></li></ol><h2><strong>OUR INFORMATION RETENTION POLICY</strong></h2><ol><li>Unless you request that we delete certain information, we retain the information we collect for as long as purposes).</li></ol><p><br></p>', 1, '2022-08-12 21:07:37', '2022-08-15 15:37:57'),
(4, 'Test (TESTQ)', '<p><span style=\"color: rgb(68, 68, 68);\">Testimonials Patient Testimonials Our top doctors in downtown SF get amazing reviews because our patients achieve optimal results. We provide concierge medical care, mental health care, and treatment of addictions and complex conditions. Contact us for information or to schedule an appointment. “You saved my trip to San Francisco the other week!</span></p>', 0, '2022-08-15 15:39:41', '2022-08-15 15:41:30');

-- --------------------------------------------------------

--
-- Table structure for table `master_associates`
--

CREATE TABLE `master_associates` (
  `id` bigint(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `website_url` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_availability`
--

CREATE TABLE `master_availability` (
  `id` bigint(11) NOT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `isactive` tinyint(4) DEFAULT 1,
  `isdeleted` tinyint(4) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_availability`
--

INSERT INTO `master_availability` (`id`, `time_from`, `time_to`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, '13:00:00', '19:00:00', 1, 0, '2021-10-11 09:52:55', '2022-01-08 12:39:58'),
(2, '06:00:00', '19:00:00', 1, 0, '2021-10-11 09:55:18', '2022-01-19 15:01:47'),
(3, '06:00:00', '11:00:00', 1, 0, '2022-01-19 08:17:23', '2022-01-19 15:01:35'),
(4, '06:00:00', '15:00:00', 1, 0, '2022-01-19 08:19:35', '2022-01-19 15:01:21'),
(5, '09:00:00', '12:00:00', 1, 1, '2022-03-11 09:24:02', '2022-03-11 09:24:13'),
(6, '06:00:00', '07:00:00', 0, 1, '2022-03-12 11:43:51', '2022-03-12 11:44:00'),
(7, '06:00:00', '06:00:00', 1, 1, '2022-03-12 11:44:10', '2022-03-12 11:44:23'),
(8, '06:00:00', '06:00:00', 0, 1, '2022-03-14 09:27:22', '2022-03-14 09:27:31'),
(9, '07:00:00', '12:00:00', 1, 0, '2022-05-28 11:44:11', '2022-08-19 13:32:17'),
(10, '12:00:00', '02:00:00', 0, 1, '2022-08-19 13:34:07', '2022-08-19 13:34:24');

-- --------------------------------------------------------

--
-- Table structure for table `master_blogs`
--

CREATE TABLE `master_blogs` (
  `id` bigint(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_country`
--

CREATE TABLE `master_country` (
  `id` bigint(11) NOT NULL,
  `country_name` varchar(100) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_equipments`
--

CREATE TABLE `master_equipments` (
  `id` bigint(11) NOT NULL,
  `equipment_name` varchar(255) DEFAULT NULL,
  `isactive` tinyint(4) DEFAULT 1,
  `isdeleted` tinyint(4) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_equipments`
--

INSERT INTO `master_equipments` (`id`, `equipment_name`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'Equipment 1', 1, 1, '2021-09-25 06:58:39', '2022-08-15 08:35:28'),
(2, 'Equipment 2', 1, 1, '2021-09-27 07:44:19', '2022-08-15 08:35:31'),
(3, 'Equipment 3', 1, 1, '2021-09-27 14:51:54', '2022-08-15 08:35:35'),
(4, 'Equipment 4', 1, 1, '2021-09-27 15:00:02', '2022-08-15 08:35:38'),
(5, 'An Autoclave', 1, 1, '2021-12-27 14:56:37', '2022-08-15 08:34:56'),
(6, 'Equipment 2', 1, 1, '2022-03-11 09:19:13', '2022-03-11 09:20:32'),
(7, 'An Automated External Defibrillator', 1, 1, '2022-08-15 08:33:52', '2022-08-15 08:34:52'),
(8, 'A blood pressure monitor', 1, 0, '2022-08-15 08:34:02', '2022-08-15 08:34:02'),
(9, 'Thermometers', 1, 0, '2022-08-15 08:34:10', '2022-08-15 08:34:10'),
(10, 'Blood test kits', 1, 0, '2022-08-15 08:34:16', '2022-08-15 08:34:16'),
(11, 'A pulse oximeter', 1, 0, '2022-08-15 08:34:23', '2022-08-15 08:34:23'),
(12, 'Stethoscopes', 1, 0, '2022-08-15 08:34:34', '2022-08-15 08:34:34'),
(13, 'Ophthalmoscopes', 1, 0, '2022-08-15 08:34:40', '2022-08-15 08:34:40'),
(14, 'Otoscopes', 1, 0, '2022-08-15 08:34:48', '2022-08-15 08:34:48'),
(15, 'Colposcopes', 1, 0, '2022-08-15 08:35:09', '2022-08-15 08:35:09'),
(16, 'Eye charts', 1, 0, '2022-08-15 08:35:16', '2022-08-15 08:35:16'),
(17, 'A reflex hammer', 1, 0, '2022-08-15 08:35:23', '2022-08-15 08:35:23');

-- --------------------------------------------------------

--
-- Table structure for table `master_fees`
--

CREATE TABLE `master_fees` (
  `id` bigint(11) NOT NULL,
  `visitType` varchar(250) DEFAULT NULL,
  `betweenKm` varchar(250) DEFAULT NULL,
  `amount` varchar(250) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `isDeleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_fees`
--

INSERT INTO `master_fees` (`id`, `visitType`, `betweenKm`, `amount`, `status`, `isDeleted`, `created_at`, `updated_at`) VALUES
(1, '1', '2', '200', 1, 0, '2022-12-03 03:26:12', '2022-12-06 02:59:58'),
(2, '3', '', '500', 1, 0, '2022-12-06 02:59:26', '2022-12-06 02:59:47');

-- --------------------------------------------------------

--
-- Table structure for table `master_privacy_policy`
--

CREATE TABLE `master_privacy_policy` (
  `id` bigint(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_services`
--

CREATE TABLE `master_services` (
  `id` bigint(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_services`
--

INSERT INTO `master_services` (`id`, `service_name`, `description`, `image_name`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'General practitioner', NULL, NULL, 1, 1, '2021-10-05 07:13:17', '2022-08-12 20:29:04'),
(2, 'Physiotherapist', NULL, NULL, 1, 1, '2021-10-05 07:22:46', '2022-08-12 20:29:08'),
(3, 'Specialist', NULL, NULL, 1, 1, '2021-10-05 07:23:01', '2022-08-12 20:29:12'),
(4, 'Specialistfg', NULL, NULL, 1, 1, '2021-10-05 07:23:09', '2021-10-05 07:23:42'),
(5, 'angeoplasty', NULL, NULL, 0, 1, '2022-03-11 14:21:57', '2022-03-11 14:22:07'),
(6, 'Cardiologists', NULL, NULL, 1, 1, '2022-03-15 10:50:52', '2022-08-12 20:29:14'),
(7, 'Push (Doctor Home Visit)', NULL, NULL, 1, 0, '2022-08-12 20:27:31', '2022-08-12 20:28:05'),
(8, 'Pull ( Patient Visit to Doctor)', 'Patient will visit at doctors clinic', NULL, 1, 0, '2022-08-12 20:28:40', '2022-08-25 00:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `master_state`
--

CREATE TABLE `master_state` (
  `id` bigint(11) NOT NULL,
  `country_id` bigint(11) NOT NULL,
  `state_name` varchar(100) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_terms_and_conditions`
--

CREATE TABLE `master_terms_and_conditions` (
  `id` bigint(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_testimonials`
--

CREATE TABLE `master_testimonials` (
  `id` bigint(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `feedback` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `master_types`
--

CREATE TABLE `master_types` (
  `id` bigint(11) NOT NULL,
  `type_name` varchar(150) DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT 1,
  `isdeleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_types`
--

INSERT INTO `master_types` (`id`, `type_name`, `isactive`, `isdeleted`, `created_at`, `updated_at`) VALUES
(1, 'General practitioner', 1, 0, '2021-10-05 07:58:26', '2022-11-27 08:19:35'),
(3, 'Physiotherapist', 1, 0, '2021-10-05 07:59:17', '2021-11-29 05:44:32'),
(4, 'Specialist', 1, 0, '2021-10-05 07:59:30', '2022-11-27 08:19:22'),
(5, 'Preventive cardiologists', 1, 1, '2021-12-09 03:46:09', '2022-07-22 11:31:00'),
(6, 'abcd', 1, 1, '2022-03-11 14:22:36', '2022-03-11 14:22:45'),
(7, '12345', 1, 1, '2022-03-11 14:23:01', '2022-03-11 14:23:28');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) DEFAULT NULL,
  `full_address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `what3words` varchar(250) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address2` text DEFAULT NULL,
  `area` varchar(250) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `long_org` varchar(50) DEFAULT NULL,
  `what3wordsjson` text DEFAULT NULL,
  `symptoms` text DEFAULT NULL,
  `medical_history` text DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `blood_group` varchar(100) DEFAULT NULL,
  `nickname` varchar(250) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `user_id`, `full_address`, `what3words`, `address`, `address2`, `area`, `city`, `country`, `state`, `zip_code`, `longitude`, `latitude`, `long_org`, `what3wordsjson`, `symptoms`, `medical_history`, `date_of_birth`, `status`, `blood_group`, `nickname`, `created_at`, `updated_at`) VALUES
(1, 59, 'Shivajinagar, Narveer Tanaji Wadi, Shivajinagar, Pune, Maharashtra, India', '', 'Narveer Tanaji Wadi, Shivajinagar, Pune, Maharashtra 411005, India', '', 'Shivajinagar', 'Pune', 'India', 'Maharashtra', '411005', '73.8516629', '18.532217', '73.8516629', '\"\"', '', '', '1996-04-10 00:00:00', 0, 'A+', NULL, '2022-07-20 08:55:51', '2022-07-21 13:16:05'),
(2, 60, 'Karve Nagar, Pune, Maharashtra, India', '', 'Karve Nagar, Pune, Maharashtra 411052, India', '', 'Karve Nagar', 'Pune', 'India', 'Maharashtra', '411052', '73.821729', '18.4914883', '73.821729', '\"\"', '', '', '2001-04-07 00:00:00', 0, 'B+', NULL, '2022-07-20 09:00:02', '2022-07-20 15:39:31'),
(3, 66, 'Wakad, Pimpri-Chinchwad, Maharashtra, India', '', 'Wakad, Pimpri-Chinchwad, Maharashtra, India', '', 'Wakad', 'Pimpri-Chinchwad', 'India', 'Maharashtra', '', '73.7641245', '18.6010921', '73.7641245', '\"\"', 'High fever and vomiting.', 'No history', '1996-11-12 00:00:00', 0, 'O+', NULL, '2022-07-20 11:37:43', '2022-07-20 15:37:43'),
(4, 67, 'Balewadi High Street, Laxman Nagar, Baner, Pune, Maharashtra, India', '', 'Balewadi High St, Laxman Nagar, Baner, Pune, Maharashtra 411045, India', 'Balewadi High Street', 'Baner', 'Pune', 'India', 'Maharashtra', '411045', '73.7748603', '18.570625', '73.7748603', '\"\"', '', '', '2000-07-11 00:00:00', 0, 'AB+', NULL, '2022-07-20 11:41:21', '2022-07-20 15:41:21'),
(5, 68, 'Karve Nagar, Pune, Maharashtra, India', '', 'Karve Nagar, Pune, Maharashtra 411052, India', '', 'Karve Nagar', 'Pune', 'India', 'Maharashtra', '411052', '73.821729', '18.4914883', '73.821729', '\"\"', '', '', '1997-10-03 00:00:00', 0, 'O-', NULL, '2022-07-20 11:43:57', '2022-07-20 15:43:57'),
(6, 69, 'Worli Sea Face, Worli, Mumbai, Maharashtra, India', '', 'Worli Sea Face, Worli, Mumbai, Maharashtra 400030, India', '', 'Worli', 'Mumbai', 'India', 'Maharashtra', '400030', '72.8157283', '19.0091432', '72.8157283', '\"\"', '', '', '1992-06-24 00:00:00', 0, 'B+', NULL, '2022-07-20 11:46:44', '2022-07-20 15:46:44'),
(7, 70, 'Panchavati, Nashik, Maharashtra, India', '', 'Panchavati, Nashik, Maharashtra, India', '', 'Panchavati', 'Nashik', 'India', 'Maharashtra', '422003', '73.7918777', '20.0095493', '73.7918777', '\"\"', '', '', '1994-06-09 00:00:00', 0, 'O+', NULL, '2022-07-20 11:48:53', '2022-07-20 15:48:53'),
(8, 72, 'Ambegaon BK, Pune, Maharashtra, India', '', 'Ambegaon BK, Pune, Maharashtra, India', '', 'Ambegaon BK', 'Pune', 'India', 'Maharashtra', '', '73.8507279', '18.4458033', '73.8507279', '\"\"', '', '', '1999-12-27 00:00:00', 0, '', '', '2022-07-21 12:34:41', '2022-11-25 22:48:49'),
(9, 74, 'Sukhsagar Nagar, Kondhwa Budruk, Pune, Maharashtra, India', '', 'Sukhsagar Nagar, Kondhwa Budruk, Pune, Maharashtra 411046, India', '', 'Kondhwa Budruk', 'Pune', 'India', 'Maharashtra', '411046', '73.8701119', '18.4565105', '73.8701119', '\"\"', '', '', '2010-06-14 00:00:00', 0, 'A+', NULL, '2022-07-21 13:08:39', '2022-07-21 17:08:39'),
(10, 76, 'Bamenda, Cameroon', '', 'Bamenda, Cameroon', '', '', 'Bamenda', 'Cameroon', 'Northwest', '', '10.15586643936', '5.9594552342215', '10.15586643936', '\"\"', 'nbcmc', 'High blood pressure', '1962-06-01 00:00:00', 0, 'A+', 'Pa Muma', '2022-07-24 17:27:25', '2022-11-16 04:52:05'),
(11, 86, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, '2022-08-02 14:31:12', '2022-08-02 18:31:12'),
(13, 88, 'Ukraine', '', 'Ukraine', '', '', 'Ukraine', 'Ukraine', 'Ukraine', 'Ukraine', '31.16558', '48.379433', '31.16558', '\"\"', '', '', '2022-09-14 00:00:00', 0, 'A+', '22221', '2022-08-03 13:50:55', '2022-09-09 21:36:18'),
(14, 89, 'UK', '', 'United Kingdom', '', '', 'United Kingdom', 'United Kingdom', 'United Kingdom', 'United Kingdom', '-3.435973', '55.378051', '3.435973', '\"\"', '', '', '2022-08-04 00:00:00', 0, 'A+', NULL, '2022-08-03 13:51:49', '2022-08-03 17:51:49'),
(15, 90, 'United Kingdom', '', 'United Kingdom', '', '', 'United Kingdom', 'United Kingdom', 'United Kingdom', 'United Kingdom', '-3.435973', '55.378051', '3.435973', '\"\"', '', '', '2000-02-03 00:00:00', 0, 'A+', NULL, '2022-08-03 13:56:54', '2022-08-03 17:56:54'),
(16, 91, 'Bamako, Mali', '', 'Bamako, Mali', '', '', 'Bamako', 'Mali', 'Bamako Capital District', 'LE2 5bb', '-7.9503608186523', '12.667705273145', '7.9503608186523', '\"\"', '', '', '2005-02-08 00:00:00', 0, 'A+', '', '2022-08-03 13:57:46', '2022-10-03 04:53:57'),
(18, 129, 'Shivaji Nagar Bus Stand, Narveer Tanaji Wadi, Shivajinagar, Pune, Maharashtra, India', '', 'GVJ2+P4R, Narveer Tanaji Wadi, Shivajinagar, Pune, Maharashtra 411005, India', '', 'Shivajinagar', 'Pune', 'India', 'Maharashtra', '411005', '73.8502642', '18.5318522', '73.8502642', '\"\"', '', 'Allergy', '2022-09-27 00:00:00', 0, 'A+', 'Tinu', '2022-08-23 21:51:51', '2022-10-13 18:17:38'),
(21, 141, 'Mbouda, Cameroon', '', 'Mbouda, Cameroon', '', '', 'Mbouda', 'Cameroon', 'West', '', '10.2544044', '5.623505', '10.2544044', '\"\"', '', '', '1959-06-01 00:00:00', 0, 'A+', '', '2022-11-16 00:54:40', '2022-11-16 05:54:40'),
(22, 144, 'Katraj, Pune, Maharashtra, India', '', 'Katraj, Pune, Maharashtra, India', '', 'Katraj', 'Pune', 'India', 'Maharashtra', '', '73.865238', '18.4529322', '73.865238', '\"\"', '', '', '2010-05-10 00:00:00', 0, 'A+', '', '2022-11-17 16:54:06', '2022-11-17 21:54:06'),
(23, 145, 'Limbe, Cameroon', '', 'Limbe, Cameroon', '', '', 'Limbe', 'Cameroon', 'Southwest', '', '9.1740820874054', '4.0218395089568', '9.1740820874054', '\"\"', '', 'High blood pressure', '1959-06-01 00:00:00', 0, 'A+', 'OBI', '2022-11-27 03:37:16', '2022-11-27 08:37:16'),
(24, 146, 'Likomba Golf club, N3, Tiko, Cameroon', '', '38PQ+QMG, N3, Tiko, Cameroon', 'N3', '', 'Tiko', 'Cameroon', 'Southwest', '', '9.3392133', '4.0869483', '9.3392133', '\"\"', '', 'Fever', '1962-11-01 00:00:00', 0, 'A+', '', '2022-11-27 03:56:09', '2022-11-27 08:59:32'),
(27, 151, 'Azire, Bamenda, Cameroon', '', 'Azire, Bamenda, Cameroon', '', 'Mile 3', 'Bamenda', 'Cameroon', 'Northwest', '', '10.144685634007', '5.9516452788118', '10.144685634007', '\"\"', '', 'High Fever', '1980-01-06 00:00:00', 0, 'A+', '', '2022-12-07 02:59:09', '2022-12-07 07:59:09'),
(28, 152, 'Mancho Street, Bamenda, Cameroon', '', 'Mancho Street, Bamenda, Cameroon', 'Mancho Street', '', 'Bamenda', 'Cameroon', 'Northwest', '', '10.130933452301', '5.9553514236824', '10.130933452301', '\"\"', '', 'Fever', '1977-02-12 00:00:00', 0, 'A+', 'Mami Tse', '2022-12-07 03:04:09', '2022-12-07 08:04:09'),
(29, 157, 'Bamenda Main Market, Bamenda, Cameroon', '', 'X532+FF2, Bamenda, Cameroon', '', '', 'Bamenda', 'Cameroon', 'Northwest', '', '10.1510689', '5.9537524', '10.1510689', '\"\"', '', 'Fever', '1952-10-01 00:00:00', 0, 'A+', 'Daddy', '2022-12-09 02:19:56', '2022-12-09 07:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `patient_prescription`
--

CREATE TABLE `patient_prescription` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_prescription`
--

INSERT INTO `patient_prescription` (`id`, `doctor_id`, `patient_id`, `appointment_id`, `created_at`, `updated_at`) VALUES
(1, 14, 9, 2, '2022-07-21 13:28:06', '2022-07-21 13:28:06'),
(2, 14, 9, 5, '2022-08-05 08:00:12', '2022-08-05 08:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `patient_prescription_details`
--

CREATE TABLE `patient_prescription_details` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `days` int(10) NOT NULL,
  `qty` int(11) NOT NULL,
  `morning` bit(2) NOT NULL,
  `afternoon` bit(2) NOT NULL,
  `evening` bit(2) NOT NULL,
  `night` bit(2) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_prescription_details`
--

INSERT INTO `patient_prescription_details` (`id`, `prescription_id`, `title`, `days`, `qty`, `morning`, `afternoon`, `evening`, `night`, `created_at`, `updated_at`) VALUES
(1, 1, 'Augmentin 625 Duo Tablet', 5, 10, b'01', b'00', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(2, 1, 'Ascoril LS Syrup', 15, 1, b'01', b'01', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(3, 1, 'Ascoril LS Syrup', 30, 1, b'01', b'00', b'01', b'00', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(4, 1, 'Avil 25 Tablet', 30, 90, b'01', b'01', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(5, 1, 'Amoxyclav 625 Tablet', 15, 15, b'01', b'00', b'00', b'00', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(6, 1, 'Azithral 500 Tablet', 15, 30, b'01', b'00', b'01', b'00', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(7, 1, 'Asthakind-DX Syrup Sugar Free', 30, 2, b'01', b'00', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(8, 1, 'Metformin', 30, 90, b'01', b'01', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(9, 1, 'Amoxicillin', 20, 40, b'00', b'01', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(10, 1, 'Azithromycin', 5, 10, b'01', b'00', b'00', b'01', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(11, 1, 'Acivir 400 DT Tablet', 10, 20, b'01', b'00', b'01', b'00', '2021-12-31 07:13:54', '2021-12-31 07:13:54'),
(12, 2, 'Amodep AT Tablet', 7, 21, b'01', b'01', b'00', b'01', '2021-12-31 07:22:33', '2021-12-31 07:22:33'),
(13, 2, 'Azikem 500mg Tablet', 18, 18, b'00', b'00', b'00', b'01', '2021-12-31 07:22:33', '2021-12-31 07:22:33'),
(14, 2, 'Adrenaline Tartrate Injection', 10, 20, b'01', b'00', b'01', b'00', '2021-12-31 07:22:33', '2021-12-31 07:22:33'),
(15, 3, '1', 122, 22, b'01', b'01', b'01', b'01', '2022-04-19 05:53:39', '2022-04-19 05:53:39'),
(16, 3, 'teb', 44, 44, b'01', b'00', b'00', b'00', '2022-04-19 05:53:39', '2022-04-19 05:53:39'),
(17, 4, 'test', 22, 22, b'01', b'01', b'00', b'00', '2022-04-19 05:54:11', '2022-04-19 05:54:11'),
(18, 4, '4444ff', 55, 55, b'01', b'00', b'00', b'00', '2022-04-19 05:54:11', '2022-04-19 05:54:11'),
(19, 5, 'BP', 15, 30, b'01', b'01', b'00', b'00', '2022-05-28 12:10:12', '2022-05-28 12:10:12'),
(20, 1, 'Dolo 600', 1, 2, b'01', b'00', b'00', b'01', '2022-07-21 13:28:06', '2022-07-21 13:28:06'),
(21, 1, 'abc', 2, 4, b'01', b'00', b'00', b'01', '2022-07-21 13:28:06', '2022-07-21 13:28:06'),
(22, 2, 'mhn', 3, 3, b'00', b'01', b'00', b'00', '2022-08-05 08:00:12', '2022-08-05 08:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `patient_reports`
--

CREATE TABLE `patient_reports` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `attach_report` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Active','In-Active') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Active',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_logs`
--

CREATE TABLE `payment_logs` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `trx_no` varchar(255) NOT NULL,
  `trx_image_name` varchar(255) NOT NULL,
  `trx_image_path` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment_orders`
--

CREATE TABLE `payment_orders` (
  `paymentID` int(11) NOT NULL,
  `doctor_informationID` int(11) NOT NULL,
  `patientID` int(11) NOT NULL,
  `bookingID` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `appointment_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `appointment_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fees_amount` double(8,2) DEFAULT NULL,
  `payment_status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paypal_status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` double(8,2) DEFAULT NULL,
  `paypal_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `payment_mode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `payment_description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `transaction_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `jsonData` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_orders`
--

INSERT INTO `payment_orders` (`paymentID`, `doctor_informationID`, `patientID`, `bookingID`, `fname`, `lname`, `phone`, `email`, `appointment_date`, `appointment_time`, `fees_amount`, `payment_status`, `paypal_status`, `amount`, `paypal_token`, `payment_mode`, `payment_date`, `payment_description`, `transaction_id`, `created_at`, `jsonData`, `updated_at`) VALUES
(1, 14, 18, '1', 'Yash', 'D', '1234567890', 'yash@uyr.com', '2022-11-17', '4:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-17', NULL, '1SR46265B6965843N', '2022-11-17 16:18:10', '{\"id\":\"1SR46265B6965843N\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"14737684\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"0Y228989X8806860R\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0Y228989X8806860R\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0Y228989X8806860R\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/1SR46265B6965843N\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-17T10:48:39Z\",\"update_time\":\"2022-11-17T10:48:39Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/1SR46265B6965843N\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-17 21:18:39'),
(2, 14, 9, '2', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-11-18', '7:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-17', NULL, '2PY360957U5985134', '2022-11-17 16:48:57', '{\"id\":\"2PY360957U5985134\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"40350866\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"31B59677V5398373G\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/31B59677V5398373G\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/31B59677V5398373G\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/2PY360957U5985134\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-17T11:19:22Z\",\"update_time\":\"2022-11-17T11:19:22Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/2PY360957U5985134\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-17 21:49:23'),
(3, 14, 22, '3', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-11-18', '2:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-17', NULL, '26836604B15903152', '2022-11-17 16:55:26', '{\"id\":\"26836604B15903152\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"61427391\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"96X68340XH454314K\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/96X68340XH454314K\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/96X68340XH454314K\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/26836604B15903152\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-17T11:25:34Z\",\"update_time\":\"2022-11-17T11:25:34Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/26836604B15903152\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-17 21:55:35'),
(4, 14, 18, '4', 'Rahul', 'G', '9876543210', 'rahul@uyr.com', '2022-11-17', '4:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-17', NULL, '1DR92555U7060234W', '2022-11-17 17:04:49', '{\"id\":\"1DR92555U7060234W\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"24956979\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"0H499485K7647111X\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0H499485K7647111X\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0H499485K7647111X\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/1DR92555U7060234W\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-17T11:34:58Z\",\"update_time\":\"2022-11-17T11:34:58Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/1DR92555U7060234W\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-17 22:04:58'),
(5, 14, 22, '5', 'Patient', 'Test', '1234567898', 'patient@uyr.com', '2022-11-17', '1:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-17', NULL, '58C78462PC9099015', '2022-11-17 17:07:13', '{\"id\":\"58C78462PC9099015\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"39522073\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"5DJ83749TD194202L\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/5DJ83749TD194202L\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/5DJ83749TD194202L\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/58C78462PC9099015\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-17T11:37:21Z\",\"update_time\":\"2022-11-17T11:37:21Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/58C78462PC9099015\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-17 22:07:22'),
(6, 14, 22, '6', 'Soham', 'Test', '1233445544', 'soham@gmail.com', '2022-11-25', '7:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-24', NULL, '7EB10077JW9250453', '2022-11-24 21:44:46', '{\"id\":\"7EB10077JW9250453\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"57101504\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"28M97089CG3513846\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/28M97089CG3513846\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/28M97089CG3513846\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/7EB10077JW9250453\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-24T16:15:19Z\",\"update_time\":\"2022-11-24T16:15:19Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/7EB10077JW9250453\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-25 02:45:19'),
(7, 14, 8, '7', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-11-25', '6:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-25', NULL, '4BV55028K3405030G', '2022-11-25 17:50:00', '{\"id\":\"4BV55028K3405030G\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"83071348\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"0WH63781NF980150C\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0WH63781NF980150C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0WH63781NF980150C\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4BV55028K3405030G\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-25T12:20:32Z\",\"update_time\":\"2022-11-25T12:20:32Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4BV55028K3405030G\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-25 22:50:32'),
(8, 31, 23, '8', 'Anye', 'Yedgar', '735373536', 'anyeyd@gmail.com', '2022-11-29', '11:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-27', NULL, '9X397543UR0360343', '2022-11-27 03:43:23', '{\"id\":\"9X397543UR0360343\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"72087551\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"2YM957332L399451C\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/2YM957332L399451C\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/2YM957332L399451C\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/9X397543UR0360343\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-26T22:14:18Z\",\"update_time\":\"2022-11-26T22:14:18Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/9X397543UR0360343\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-27 08:44:19'),
(9, 31, 24, '9', 'Anye', 'Yedgar', '553354', 'anyeyd@gmail.com', '2022-11-27', '1:30 PM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-27', NULL, '36533289VH0544625', '2022-11-27 04:00:27', '{\"id\":\"36533289VH0544625\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"64820444\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"9TP372291X353533S\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/9TP372291X353533S\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/9TP372291X353533S\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/36533289VH0544625\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-26T22:30:38Z\",\"update_time\":\"2022-11-26T22:30:38Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/36533289VH0544625\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-27 09:00:38'),
(10, 31, 23, '10', 'Anye', 'Yedgar', '735373536', 'anyeyd@gmail.com', '2022-11-27', '12:30 PM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-27', NULL, '55J49031VG630901H', '2022-11-27 04:02:00', '{\"id\":\"55J49031VG630901H\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"97988009\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"2T49792091487381S\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/2T49792091487381S\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/2T49792091487381S\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/55J49031VG630901H\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-26T22:32:08Z\",\"update_time\":\"2022-11-26T22:32:08Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/55J49031VG630901H\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-27 09:02:08'),
(11, 14, 8, '11', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-11-28', '6:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-28', NULL, '0W500067N1027332H', '2022-11-28 21:54:19', '{\"id\":\"0W500067N1027332H\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"39276014\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"3EG004669U3074918\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/3EG004669U3074918\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/3EG004669U3074918\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/0W500067N1027332H\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-28T16:24:56Z\",\"update_time\":\"2022-11-28T16:24:56Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/0W500067N1027332H\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-29 02:54:57'),
(12, 14, 8, '12', 'soham', 'Test', '1234567899', 'soham@gmail.com', '2022-11-28', '6:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-28', NULL, '69G21241U5116754L', '2022-11-28 22:27:33', '{\"id\":\"69G21241U5116754L\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"46661482\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"7UL53172CH537052J\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/7UL53172CH537052J\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/7UL53172CH537052J\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/69G21241U5116754L\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-28T16:58:13Z\",\"update_time\":\"2022-11-28T16:58:13Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/69G21241U5116754L\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-29 03:28:13'),
(13, 36, 26, '13', 'bridget', 'NA', '24434335', 'anyeyd@gmail.com', '2022-11-29', '8:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-29', NULL, '8VF88978LE300223E', '2022-11-29 03:32:00', '{\"id\":\"8VF88978LE300223E\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"92047529\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"1CV17153290233810\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/1CV17153290233810\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/1CV17153290233810\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/8VF88978LE300223E\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-28T22:03:49Z\",\"update_time\":\"2022-11-28T22:03:49Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/8VF88978LE300223E\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-29 08:33:50'),
(14, 14, 8, '14', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-11-29', '2:30 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-11-29', NULL, '4W031337KF672893V', '2022-11-29 16:46:16', '{\"id\":\"4W031337KF672893V\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"78972947\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"21J25746TF6913028\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/21J25746TF6913028\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/21J25746TF6913028\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4W031337KF672893V\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-11-29T12:04:59Z\",\"update_time\":\"2022-11-29T12:04:59Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4W031337KF672893V\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-11-29 22:34:59'),
(15, 14, 8, '17', 'Soham', 'Test', '1234567890', 'soham@gmail.com', '2022-12-06', '9:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-12-05', NULL, '4WJ68767S8017391Y', '2022-12-05 18:01:55', '{\"id\":\"4WJ68767S8017391Y\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"93641640\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"5E052689EW4847623\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/5E052689EW4847623\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/5E052689EW4847623\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4WJ68767S8017391Y\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-12-05T12:32:24Z\",\"update_time\":\"2022-12-05T12:32:24Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4WJ68767S8017391Y\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-12-05 23:02:24'),
(16, 31, 27, '18', 'walters', 'Muma', '2132425232524', 'Wmuma@gmail.com', '2022-12-08', '9:30 AM', 100.00, 'CREATED', NULL, 1.00, '1', '1', '2022-12-07', NULL, '0E267740LP462413N', '2022-12-07 03:18:08', '{\"id\":\"0E267740LP462413N\",\"status\":\"CREATED\",\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/0E267740LP462413N\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/www.sandbox.paypal.com\\/checkoutnow?token=0E267740LP462413N\",\"rel\":\"approve\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/0E267740LP462413N\",\"rel\":\"update\",\"method\":\"PATCH\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/0E267740LP462413N\\/capture\",\"rel\":\"capture\",\"method\":\"POST\"}]}', '2022-12-07 08:18:08'),
(17, 31, 29, '19', 'Anye', 'Yedgar', '35325555', 'anye@gmail.com', '2022-12-10', '6:00 AM', 100.00, 'CREATED', 'COMPLETED', 1.00, '1', '1', '2022-12-09', NULL, '4LX34797M3590220G', '2022-12-09 02:35:59', '{\"id\":\"4LX34797M3590220G\",\"status\":\"COMPLETED\",\"payment_source\":{\"paypal\":{\"email_address\":\"sb-onntm20564105@personal.example.com\",\"account_id\":\"T876PUREM48DJ\",\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"address\":{\"country_code\":\"NL\"}}},\"purchase_units\":[{\"reference_id\":\"14017874\",\"shipping\":{\"name\":{\"full_name\":\"John Doe\"},\"address\":{\"address_line_1\":\"25513540 River N343 W\",\"admin_area_2\":\"Den Haag\",\"admin_area_1\":\"2585\",\"postal_code\":\"1015 CS\",\"country_code\":\"NL\"}},\"payments\":{\"captures\":[{\"id\":\"0J921425RU100825A\",\"status\":\"PENDING\",\"status_details\":{\"reason\":\"UNILATERAL\"},\"amount\":{\"currency_code\":\"USD\",\"value\":\"1.00\"},\"final_capture\":true,\"seller_protection\":{\"status\":\"NOT_ELIGIBLE\"},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0J921425RU100825A\",\"rel\":\"self\",\"method\":\"GET\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/payments\\/captures\\/0J921425RU100825A\\/refund\",\"rel\":\"refund\",\"method\":\"POST\"},{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4LX34797M3590220G\",\"rel\":\"up\",\"method\":\"GET\"}],\"create_time\":\"2022-12-08T21:06:28Z\",\"update_time\":\"2022-12-08T21:06:28Z\"}]}}],\"payer\":{\"name\":{\"given_name\":\"John\",\"surname\":\"Doe\"},\"email_address\":\"sb-onntm20564105@personal.example.com\",\"payer_id\":\"T876PUREM48DJ\",\"address\":{\"country_code\":\"NL\"}},\"links\":[{\"href\":\"https:\\/\\/api.sandbox.paypal.com\\/v2\\/checkout\\/orders\\/4LX34797M3590220G\",\"rel\":\"self\",\"method\":\"GET\"}]}', '2022-12-09 07:36:28');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `href` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `is_menu` tinyint(4) NOT NULL DEFAULT 1,
  `icon` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `slug`, `href`, `check_slug`, `parent_id`, `is_menu`, `icon`, `order`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dashboard', 'Dashboard', 'dashboard', 'dashboard', 0, 1, 'cil-aperture', 1, 1, '2021-05-24 12:48:21', '2021-12-20 05:43:48'),
(2, 'Roles', 'Roles', 'roles', 'roles', 0, 1, 'cil-list-rich', 2, 0, '2021-05-24 12:48:21', '2022-08-02 06:13:53'),
(4, 'Users', 'Users', 'users', 'users', 0, 1, NULL, 7, 1, '2021-05-26 15:46:14', '2021-12-21 05:10:21'),
(5, 'Sales', 'Sales', 'sales', 'sales', 0, 1, NULL, 4, 1, '2021-05-26 15:46:23', '2021-12-20 05:43:33'),
(8, 'Doctor', 'Doctor', 'doctor', 'doctor', 0, 1, NULL, 5, 1, '2021-05-27 06:43:37', '2021-12-20 05:43:30'),
(10, 'Mediator', 'Mediator', 'mediator', 'mediator', 0, 1, NULL, 6, 1, '2021-05-26 15:46:40', '2021-12-20 05:43:26'),
(13, 'Masters', 'Masters', 'equipments', 'Masters', 0, 1, 'cil-user', 8, 1, '2021-05-28 05:34:19', '2022-01-05 10:18:03'),
(14, 'Equipments', 'Equipments', 'equipments', 'Equipments', 13, 1, 'cil-user', 8, 1, '2021-05-28 05:34:27', '2022-01-05 10:18:13'),
(21, 'Services', 'Services', 'services', 'Services', 13, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2022-01-07 17:52:05'),
(22, 'Types', 'Types', 'types', 'Types', 13, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2022-01-07 17:52:15'),
(23, 'Admin', 'Admin', 'admin', 'admin', 0, 1, NULL, 3, 1, '2021-05-27 06:43:37', '2021-12-20 05:43:13'),
(24, 'Payout', 'Payout', 'doctor-payout', 'doctor-payout', 0, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2022-12-07 12:30:24'),
(25, 'Manage Booking', 'Manage Booking', 'manage_booking', 'manage_booking', 0, 1, NULL, 9, 1, '2021-05-27 06:43:37', '2021-12-20 05:43:06'),
(26, 'Manage Website', 'Manage Website', 'manage-website-contactUs', 'manage-website-contactUs', 0, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-27 12:35:24'),
(27, 'Contact Us', 'ContactUs', 'manage-website-contactUs', 'manage-website-contactUs', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-27 12:35:19'),
(28, 'FAQs', 'FAQs', 'faq', 'faq_list', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-01-29 07:14:35'),
(29, 'About Us', 'About-US', 'manage-website-aboutus', 'manage-website-aboutus', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-25 13:44:11'),
(30, 'Articles/ Blogs', 'Articles-Blogs', 'manage-website-blog', 'manage-website-blog', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-29 12:56:04'),
(31, 'Footer', 'Footer', '', 'Footer ', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2021-12-03 10:46:54'),
(32, 'Side Menu', 'Side Menu', '', 'Side Menu', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2021-12-20 05:42:50'),
(33, 'Privacy & policy', 'Privacy & policy', 'manage-website-privacy-policy', 'manage-website-privacy-policy', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-29 12:07:38'),
(34, 'Terms and Conditions', 'Terms and Conditions', 'manage-website-terms-condition', 'manage-website-terms-condition', 26, 1, NULL, 10, 1, '2021-05-27 06:43:37', '2022-07-29 12:08:06'),
(35, 'Careers', 'Careers', 'careers-list', 'careers-list', 0, 1, NULL, 7, 1, '2021-05-27 06:43:37', '2022-08-01 14:54:41'),
(36, 'Mediator Dr. Payout', 'Mediator Dr. Payout', 'mediator-doctor-payout', 'mediator-doctor-payout', 24, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2022-12-07 12:45:35'),
(37, 'Sales. Payout', 'Sales. Payout', 'd_payout', 'd_payout', 24, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-20 05:43:00'),
(38, 'Dr. Payout', 'Dr. Payout', 'doctor-payout', 'doctor-payout', 24, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2022-12-07 12:30:08'),
(39, 'Booking', 'Booking', 'searchDoctor', 'searchDoctor', 0, 1, NULL, 8, 0, '2021-05-27 06:43:37', '2021-12-11 10:06:07'),
(40, 'Search Doctor', 'Search Doctor', 'searchDoctor', 'searchDoctor', 39, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-07 08:52:17'),
(41, 'Suggest Doctor', 'Suggest Doctor', 'suggest_doctor', 'suggest_doctor', 39, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-03 10:58:40'),
(42, 'Patient List', 'Patient List', 'patient', 'patient', 0, 1, NULL, 6, 1, '2021-05-27 06:43:37', '2022-08-03 09:44:42'),
(43, 'My Appointment', 'My Appointment', '', 'appointment_list', 0, 1, NULL, 8, 0, '2021-05-27 06:43:37', '2021-12-20 05:41:41'),
(44, 'Favorite', 'Favorite', 'favorite', 'favorite', 0, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-03 10:58:40'),
(45, 'Requested Appointments', 'Requested Appointments', 'requestAppointments', 'requestAppointments', 0, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-03 10:58:40'),
(46, 'Patient Appointment', 'Appointment', 'patient_appointment', 'patient/appointment', 0, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-20 05:42:07'),
(47, 'Doctor Appointment', 'Appointment', 'doctor_appointment', 'doctor/appointment', 0, 1, NULL, 8, 1, '2021-05-27 06:43:37', '2021-12-20 05:42:13'),
(48, 'Booking', 'Booking', 'patientBooking', 'patient/patientBooking', 0, 1, NULL, 7, 1, '2021-05-27 16:13:37', '2022-08-03 09:47:32'),
(50, 'Availability', 'Availability', 'availability', 'Availability', 13, 1, 'cil-user', 7, 1, '2021-05-28 15:04:27', '2022-01-04 23:57:17'),
(51, 'Orders', 'orders', 'orders', 'orders', 0, 1, NULL, 8, 1, '2021-05-27 16:13:37', '2021-12-20 16:13:00'),
(52, 'Homepage', 'Homepage', 'manage-website-homepage', 'manage-website-homepage', 26, 1, NULL, 10, 1, '2021-05-27 16:13:37', '2022-07-25 23:15:47'),
(54, 'Social links', 'Social links', 'manage-website-social-links', 'manage-website-social-links', 26, 1, NULL, 10, 1, '2021-05-27 16:13:37', '2022-07-29 20:51:05'),
(55, 'Enquiry', 'Enquiry', 'enquiry-list', 'enquiry-list', 0, 1, NULL, 7, 1, '2021-05-27 06:43:37', '2022-08-01 14:54:41'),
(56, 'Fees', 'Fees', 'fees', 'Fees', 13, 1, NULL, 8, 1, '2021-05-27 16:13:37', '2022-01-08 04:22:05');

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(4, 1),
(5, 1),
(8, 1),
(10, 1),
(13, 1),
(14, 1),
(21, 1),
(22, 1),
(23, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(33, 1),
(34, 1),
(1, 2),
(2, 2),
(4, 2),
(5, 2),
(8, 2),
(10, 2),
(13, 2),
(14, 2),
(21, 2),
(22, 2),
(26, 2),
(27, 2),
(28, 2),
(29, 2),
(30, 2),
(31, 2),
(32, 2),
(33, 2),
(34, 2),
(35, 2),
(1, 3),
(8, 3),
(1, 4),
(47, 4),
(1, 5),
(1, 6),
(46, 6),
(42, 6),
(1, 7),
(2, 7),
(4, 7),
(5, 7),
(8, 7),
(10, 7),
(13, 7),
(14, 7),
(21, 7),
(22, 7),
(26, 7),
(27, 7),
(28, 7),
(29, 7),
(30, 7),
(31, 7),
(32, 7),
(33, 7),
(34, 7),
(35, 7),
(23, 7),
(25, 7),
(48, 6),
(51, 5),
(46, 2),
(52, 1),
(46, 1),
(26, 1),
(35, 1),
(54, 1),
(55, 1),
(52, 2),
(54, 2),
(44, 6),
(56, 1),
(24, 1),
(38, 1),
(36, 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `title`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 1, '2021-09-24 07:01:51', '2021-11-08 03:17:35'),
(2, 'Admin', 1, '2021-09-24 07:02:51', '2021-11-08 03:17:41'),
(3, 'Sales Manager', 1, '2021-09-24 07:03:30', '2021-11-08 03:17:00'),
(4, 'Doctor', 1, '2021-09-24 07:03:59', '2021-09-24 07:03:59'),
(5, 'Mediator Doctor', 1, '2021-09-24 07:01:51', '2021-11-08 03:17:26'),
(6, 'Users / Patient', 1, '2021-09-24 07:01:51', '2021-12-20 13:38:38');

-- --------------------------------------------------------

--
-- Table structure for table `role_admin`
--

CREATE TABLE `role_admin` (
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_admin`
--

INSERT INTO `role_admin` (`role_id`, `user_id`) VALUES
(2, 2),
(3, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(5, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 14),
(2, 15),
(3, 16),
(4, 17),
(6, 18),
(4, 19),
(4, 20),
(4, 21),
(6, 22),
(4, 23),
(6, 24),
(3, 30),
(3, 31),
(5, 34),
(3, 35),
(3, 36),
(4, 37),
(3, 39),
(6, 40),
(6, 41),
(6, 42),
(6, 43),
(4, 44),
(4, 45),
(6, 46),
(6, 47),
(6, 48),
(6, 49),
(2, 50),
(4, 51),
(6, 54),
(6, 55),
(6, 56),
(6, 57),
(6, 58),
(6, 59),
(6, 60),
(4, 61),
(5, 62),
(2, 63),
(6, 64),
(3, 65),
(6, 66),
(6, 67),
(6, 68),
(6, 69),
(6, 70),
(4, 71),
(6, 72),
(6, 73),
(6, 74),
(6, 75),
(6, 76),
(4, 77),
(2, 78),
(4, 79),
(4, 80),
(4, 81),
(6, 82),
(2, 83),
(3, 84),
(5, 85),
(6, 86),
(6, 87),
(6, 88),
(6, 89),
(6, 90),
(6, 91),
(4, 95),
(4, 96),
(4, 97),
(4, 98),
(4, 99),
(6, 100),
(6, 101),
(4, 102),
(4, 103),
(4, 104),
(4, 105),
(3, 106),
(4, 107),
(5, 108),
(5, 109),
(5, 110),
(5, 111),
(5, 112),
(5, 113),
(5, 114),
(5, 115),
(5, 116),
(5, 117),
(5, 118),
(5, 119),
(5, 120),
(5, 121),
(5, 122),
(5, 123),
(5, 124),
(5, 125),
(5, 126),
(5, 127),
(5, 128),
(6, 129),
(4, 130),
(6, 131),
(4, 132),
(6, 133),
(3, 134),
(4, 135),
(4, 136),
(4, 137),
(4, 138),
(6, 139),
(6, 140),
(6, 141),
(6, 142),
(4, 143),
(6, 144),
(6, 145),
(6, 146),
(6, 147),
(6, 148),
(6, 149),
(6, 150),
(6, 151),
(6, 152),
(6, 153),
(6, 154),
(6, 155),
(6, 156),
(6, 157),
(6, 158);

-- --------------------------------------------------------

--
-- Table structure for table `sales_address`
--

CREATE TABLE `sales_address` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) DEFAULT NULL,
  `full_address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address2` text DEFAULT NULL,
  `area` varchar(250) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `long_org` varchar(50) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sales_address`
--

INSERT INTO `sales_address` (`id`, `user_id`, `full_address`, `address`, `address2`, `area`, `city`, `country`, `state`, `zip_code`, `longitude`, `latitude`, `long_org`, `created_at`, `updated_at`) VALUES
(1, 106, '', 'Nashik Road, Nashik, Maharashtra, India', '', 'Nashik Road', 'Nashik', 'India', 'Maharashtra', '422001', '', '', '', '2022-09-27 18:23:20', '2022-09-27 13:15:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `first_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(20) NOT NULL DEFAULT 0,
  `gender` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0-Male,1-Female',
  `role_type` int(11) DEFAULT NULL,
  `profile_photo` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pass_word` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0-Active,1-In-Active',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `isblocked` tinyint(1) NOT NULL DEFAULT 1,
  `resetPasswordKey` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `verifyEmailSend` int(11) NOT NULL DEFAULT 0,
  `otp` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `otpExpiredAt` datetime DEFAULT NULL,
  `otpToken` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `otpVerified` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `parent_id`, `first_name`, `last_name`, `user_name`, `email`, `phone_number`, `age`, `gender`, `role_type`, `profile_photo`, `pass_word`, `password`, `status`, `is_deleted`, `isblocked`, `resetPasswordKey`, `verifyEmailSend`, `otp`, `otpExpiredAt`, `otpToken`, `otpVerified`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 'Super', 'Admin', 'superadmin', 'superadmin@uyr.com', '0123654789', 65, 0, 1, NULL, '123456', '$2y$10$hFd98zWmkSeYEN/4P3lU9uc9QoMeeCerQE0Tc1M1HAFKknJXDOhsS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2021-12-20 13:41:37', '2022-08-12 15:42:17', NULL),
(59, 0, 'Raphin', 'Author', 'Raphin_98', 'Raphin98@gmail.com', '123-456-7890', 25, 0, 6, '', 'Raphin@1234', '$2y$10$JeaXxhYBNkJgTN5W8JQPp.lx2OmaHKGq9kWBvhxK4zySBnl6zRmp.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 12:55:51', '2022-07-21 13:16:05', NULL),
(60, 0, 'Martin', 'cooper', 'Martin_123', 'martin123@gmail.com', '234-567-8901', 21, 0, 6, '', 'Martin@1234', '$2y$10$PwwLukT4j9XX7a8ktZEv4u.vSRscbmU2YAc3PLERVz6.g.3wp/pLa', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 13:00:02', '2022-07-20 15:39:31', NULL),
(61, 1, 'Mr.Rahul', 'Kadam', 'Rahul_123', 'rahul47@uyr.com', '345-678-9012', 28, 0, 4, NULL, 'Rahul@1234', '$2y$10$Dr/Lb9muXVjjD8shwUBWxuGRM6k9zhyjO5FE/vbWyUlvhjKqZzVxC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 13:19:47', '2022-09-25 00:49:25', NULL),
(62, 1, 'Mohan', 'Sharma', 'Mohan_123', 'mohan22@uyr.com', '456-789-0123', 35, 0, 5, NULL, '123456', '$2y$10$u5EmEr6.fKhIkmeiUvfP/OsP6QwSMyTxNDkTY4RI8Y1jRnT/XXuYe', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 13:27:32', '2022-09-26 23:44:30', NULL),
(63, 0, 'John', 'Robin', 'John_33', 'john33@uyr.com', '567-891-2340', 0, 0, 2, 'profile1658314016.png', 'John@1234', '$2y$10$kXScC12rZs/OW0BNKC/kwenQZ4ylgYuNOUdKTdjXCzB8p4Cb4g9Yq', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 14:08:09', '2022-09-26 22:32:02', NULL),
(64, 0, 'Tejal', 'Nikam', 'tejal', 'tejal@gmail.com', '9865768910', 0, 0, 6, NULL, '1234567', '$2y$10$cTy.pVsxKVVTcj2TXY1OFetbMOy46/q6giR09Vbxl13HeJDRoMTQy', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 14:12:19', '2022-07-20 14:12:19', NULL),
(65, 0, 'Avinash', 'Korde', 'Avi_123', 'Avi123@gmail.com', '123-456-7890', 0, 0, 3, NULL, 'Avi@1234', '$2y$10$OuIqnYY8cSI6EUwBuGwsFeef4PWkKM3U1.odC6P7sIJUGnX4UITWu', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 14:16:08', '2022-09-19 04:28:13', NULL),
(66, 60, 'Vijay', 'Verma', 'Martin_123', 'vijay123@gmail.com', '1234567891', 26, 0, 6, '', 'Vijay@1234', '$2y$10$20iX3wDVxHqyNyDV/K8kLeruFeeQXhPbo1JTEjI8/wuYDIj7Shzlm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 15:37:43', '2022-07-20 15:37:43', NULL),
(67, 60, 'Tina', 'Cooper', 'Martin_123', 'Tina12@gmail.com', '1234567656', 22, 1, 6, '', 'Tina@1234', '$2y$10$rRIfpiR5LSjf4QtNnhJLsekiH3BLggOpqOpKlRMBwukcEAbq1PtWK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 15:41:21', '2022-07-20 15:41:21', NULL),
(68, 60, 'Riya', 'Verma', 'Martin_123', 'Riya12@gmail.com', '4566523812', 24, 1, 6, '', 'Riya@1234', '$2y$10$YSHCGYQRpx9cd4uM0uQCAeXa4VkD/GOSgFJtX0mrjsAy5nbtBwPE2', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 15:43:57', '2022-07-20 15:43:57', NULL),
(69, 60, 'Jay', 'Gupta', 'Martin_123', 'jay12@gmail.com', '123456786', 30, 0, 6, '', 'Jay@1234', '$2y$10$tkEZiz9TulNLiwj3qGcExeo7QzbUnd68/iil2UeWumz0QkhUUE27C', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 15:46:44', '2022-07-20 15:46:44', NULL),
(70, 60, 'Ankita', 'Sharma', 'Martin_123', 'Ankita12@gmail.com', '1234567891', 28, 1, 6, '', 'Ankita@1234', '$2y$10$iYTLnTNo0OQJx3ik5Q0yYOqZjfeO2AFR.jZZNvey88zAh2q1rqjQS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-20 15:48:53', '2022-07-20 15:48:53', NULL),
(71, 1, 'Sneha', 'Bhate', 'Sneha', 'sneha1@uyr.com', '713-567-896', 32, 1, 4, 'profile1658420843.jpg', '123456', '$2y$10$hFd98zWmkSeYEN/4P3lU9uc9QoMeeCerQE0Tc1M1HAFKknJXDOhsS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-21 16:31:55', '2022-11-17 08:39:26', NULL),
(72, 0, 'Soham', 'Warma', 'Soham', 'soham1@gmail.com', '892-222-2222', 0, 0, 6, '', '1234567', '$2y$10$rL4j8Vr9ijvqV4P4Pn9cRuig7PsYkvnPY70S9nBdKp4LmBO3DuZym', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-21 16:34:41', '2022-11-25 22:48:49', NULL),
(73, 0, 'Vishal', 'Jadhao', 'Vishal', 'vishal123@gmail.com', '9123456456', 0, 0, 6, NULL, '123456', '$2y$10$jYrLRm.xxhmNZUQR9tr8P.ou.WwAKt3c.HsFbEzDUlAZUVQDkE4nO', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-21 16:48:22', '2022-07-21 16:50:43', NULL),
(74, 72, 'Kalyani', 'Rathod', 'Soham', 'kalyani123@gmail.com', '9123456789', 12, 1, 6, '', '123456', '$2y$10$pKJan7DiV84CQqtRUcEO8eMvHfwRsJoOieFYEDSgLu6LwDt8N6lRe', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-21 17:08:39', '2022-07-21 17:08:39', NULL),
(75, 0, 'Anye1', 'Dennis1', 'Dennis1', 'anye@gmail.com', '0987654321', 0, 0, 6, NULL, '123456', '$2y$10$51HH/OAQ4fGXO/SWFSOKz.4bAWGd1dv7ezZbwWItJ4YIG4Rs.beKm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-24 20:50:13', '2022-07-24 20:50:13', NULL),
(76, 75, 'Uncle John', 'Muma', 'Dennis1', 'mjohn@gmail.com', '0987654321', 0, 0, 6, '', '123456', '$2y$10$M6lUFThm4nVvaO.t1kx8Au0jX2MnWO4Ho7EkeSUJgt4AaWv0gb3Wy', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-07-24 21:27:25', '2022-11-16 04:52:05', NULL),
(77, 0, 'Anye', 'Yedgar', 'Vikas29', 'anyeyd@gmail.com', '237-546-5372', 42, 0, 4, NULL, '123456', '$2y$10$HTTCodWOyew2zmiPZO4R5e14VgnHDU6Wx92RWl1eJsSSPnNd.9QrS', 2, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 14:46:59', '2022-11-16 05:02:28', NULL),
(78, 0, 'Admin', 'UYR', 'Admin_123', 'Admin@uyr.com', '569-874-1230', 0, 0, 2, NULL, '123456', '$2y$10$e8Z/B2.zICy/JoKVkikw5e6XPEwlhglz7HPztIlL119e6ArwPRmeS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 14:55:48', '2022-08-02 14:55:48', NULL),
(79, 0, 'Test', 'Doctor_Career', '', 'TEST@uyr.com', '495848575474', 24, 0, 4, NULL, 'TEST@uyr.com', '$2y$10$xSHlRdTsVYsXEdtJ4eXs4ey7fvureMR1K/o6ysPb7ZaLs.zxh7Bcq', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 15:07:33', '2022-08-02 15:07:33', NULL),
(80, 0, 'John', 'Smith', '', 'john1@gmail.com', '1234567892', 30, 0, 4, NULL, 'john1@gmail.com', '$2y$10$dgMCrmxq4KB0qtM3x6jDa.GKu0YwBBGMt.s0xgELiWzCRMVnWuru2', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 15:22:48', '2022-08-02 15:22:48', NULL),
(81, 0, 'abcdef', 'Test', 'abcdef', 'abcdef@uyr.com', '4114878522', 0, 0, 4, NULL, '123456', '$2y$10$j9e2BDpxzVVVmK/cFqmnReo7ahVHA0wvCi837G.ylmYMI36Fgn0wG', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 16:49:26', '2022-08-02 16:49:26', NULL),
(82, 0, 'user1', 'Test', 'user1', 'user@uyr.com', '1234567892', 0, 0, 6, NULL, '123456', '$2y$10$uL7/pZbD2abxR0Aam9pWhehdWJ/uVlL9CcrM8/zIllkft3xT9KS5K', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 16:51:46', '2022-08-02 16:51:46', NULL),
(83, 0, 'Mr.', 'Admin', 'UYR_Admin', 'UYR_Admin@uyr.com', '123-456-7890', 0, 0, 2, NULL, '123456', '$2y$10$3YzPg.fOFUG2danJ/b/e/ewkb3bu16FU1I3QSFKTAIL7FxW7y2D8C', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 17:12:45', '2022-09-26 22:45:50', NULL),
(84, 0, 'Mr', 'Sales', 'UYR_Sales', 'Uyr_Sales@uyr.com', '123-456-7890', 0, 0, 3, NULL, '123456', '$2y$10$U39OP5R5OoEAIV2zg.o2vOX/ZZRua8jaoXUWyQfchv7i0Va2NGGvG', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 17:13:40', '2022-08-02 17:13:40', NULL),
(85, 1, 'Mr', 'Mediator', 'Mediator', 'Mediator@uyr.com', '675-448-7584', 24, 1, 5, NULL, '123456', '$2y$10$xqLAWa9J2Z99dXRlngPlFej1IGz5pGbipePnBZDm89b4w/o4fpB5m', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 18:27:45', '2022-08-02 18:27:45', NULL),
(86, 0, 'Mr', 'User', 'User', 'Mruser@uyr.com', '455-767-5276', 0, 0, 6, NULL, '123456', '$2y$10$n4sPXJWVa7NmVuej81YRnuHDt5YA1uj4JL.ix3OZplstCZNhDBS3e', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-02 18:31:12', '2022-08-02 18:32:00', NULL),
(87, 82, 'Mr', 'John', 'user1', 'John@Gmail.com', '38485747576575', 0, 0, 6, '', '', '$2y$10$9JBvM3IVsvDE2mdWSE1wa.jRHVPs2c33azOIFGA4GqOjGmxpMP9pC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-03 17:49:52', '2022-10-29 06:56:53', '2022-10-29 06:56:53'),
(88, 82, 'Mrs1', 'Jonas1', 'user1', 'Jonas1', '112-221-1112', 0, 1, 6, '', '', '$2y$10$IJbqs9HtNw8/qlU4vK.RmOl3.ZXnO2J6U8BEFxVgiDnzJtOGX75lS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-03 17:50:55', '2022-09-09 21:36:18', NULL),
(89, 82, 'Miss', 'Lovely', 'user1', 'Lovely@gmail.com', '547257dbnfsdfbbh', 0, 1, 6, '', '', '$2y$10$X5tVfCthv81hXJnZpkW9UuvFGXrClU2MqAA4Aqeg2UUJowh.S7MeS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-03 17:51:49', '2022-08-03 17:51:49', NULL),
(90, 82, 'Miss', 'Taxi', 'user1', 'taxi@gmail.com', 'fgh75r45818745', 0, 1, 6, '', '', '$2y$10$DOF8cVaogGcStdqdcywY1.eWmxwZWZkkWv6MsbAUuTmjGGku6Fk4K', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-03 17:56:54', '2022-08-03 17:56:54', NULL),
(91, 82, 'Miss', 'Avni', 'user1', 'avi@gmail.com', 'fjghretg3475', 0, 1, 6, '', '', '$2y$10$Y4f9xBSy0j7aGbdLP4kn8.NPtS/kYpaOuLiG9wGHQAuCXb2e7Vr7G', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-03 17:57:46', '2022-10-03 04:53:57', NULL),
(94, 0, 'Sagar', 'Testq', '', 'sagar@testqtech.com', '8275273459', 0, 0, 6, NULL, '123456', '$2y$10$23Z0wDjHwRB.wAPpSoq0Mu5kt5/Zw8ZuSwU4QSGwnZtH9xREZVg7m', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-11 18:31:36', '2022-09-26 22:37:32', NULL),
(95, 0, 'Yogesh', 'GANGURDE', '', 'yogesh@uyr.COM', '095-526-0585', 29, 0, 4, NULL, 'yogesh@uyr.COM', '$2y$10$v8gpaH1bQtjUcBDx5yWr/eypAaD3TRF356ZOAybyaUllqAiNr7za6', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-11 18:57:15', '2022-08-17 10:16:39', '2022-08-17 10:16:39'),
(96, 0, 'John', 'Smith', '', 'Smith@uyr.com', '9876543210', 0, 0, 4, NULL, '123456', '$2y$10$EA6jwUn6MhPD0w5jL2E2cOUCs0BGs4aSq9eUl.2TzSTdOSUHtwawm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-12 20:15:48', '2022-08-12 20:15:48', NULL),
(97, 1, 'Yogesh', 'GANGURDE', '', 'yogesh@uyr.COM', '095-526-0585', 23, 1, 4, NULL, '123456', '$2y$10$8pwyPBxHh0nJc5jsh71GQu.H2IpIjSd4j36rbj2btE6CymL07bbSO', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-15 12:06:10', '2022-08-17 10:16:26', '2022-08-17 10:16:26'),
(98, 1, 'Yogesh', 'GANGURDE', '', 'yogesh@uyr.COM', '095-526-0585', 24, 1, 4, NULL, '123456', '$2y$10$7r4yasyWLg6cMLb4Fsfqw.1qMj0rgEeMLSF5yk2GQ7uu6oHYz/K2u', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-15 12:06:59', '2022-08-17 10:16:22', '2022-08-17 10:16:22'),
(99, 1, 'Yogesh', 'test', '', 'yogesh@uyr.COM', '095-526-0585', 64, 1, 4, NULL, 'abcd', '$2y$10$Mjr7kaQ213N5i/np8tZ3d.Z4jHBiEdfz.yJ84CKqq/v0PIs0o1rn.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-15 12:07:44', '2022-08-17 10:16:19', '2022-08-17 10:16:19'),
(100, 0, 'Yogesh', 'test', '', 'yogesh1@uyr.COM', '095-526-0585', 0, 0, 6, NULL, 'poiuyt', '$2y$10$BU6BHLd1Ia.pw3FSsJkBSOB1RHKZwYSVIqZDG2DCCAXChSJERMJuC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-15 12:26:08', '2022-11-29 08:09:25', '2022-11-29 08:09:25'),
(101, 0, 'sachin', 'Zade', '', 'sachin@gmail.com', '8899665544', 0, 0, 6, NULL, '123456', '$2y$10$3kAnyp7lrgiee13YIZwZc.dSCC/RK2mVWMLgT6ZgQEYuo0Bk872se', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-18 19:40:11', '2022-08-18 19:47:28', NULL),
(105, 0, 'sagar', 'More', '', 'sagar@gmail.com', '827-527-3459', 0, 0, 4, NULL, '123456', '$2y$10$TpRPY2hgi.jjOqF55fhULelgFdzg0PzTdSx/MTh9W5EFiOHX7tRUm', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-18 20:18:55', '2022-09-26 22:48:16', NULL),
(106, 0, 'Yogesh', 'GANGURDE', '', 'yogesh.sales@uyr.COM', '095-526-0585', 0, 0, 3, NULL, '123456', '$2y$10$NjiCE0vGxy/tTAX6OdwuJuUDjpmAbDRCFKk28lgnOFU5tKRVDoB2S', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:24:39', '2022-09-26 22:50:49', NULL),
(107, 106, 'Yogesh', 'GANGURDE', '', 'lead@uyr.com', '095-526-0585', 45, 0, 4, NULL, '123456', '$2y$10$c4/FMykRTRP4TFEPbBlYseGPDIYIVAY.xmzt394K86f03P6QJtXZK', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:32:31', '2022-09-26 22:49:10', NULL),
(108, 106, 'Yogesh', 'mediator', '', 'mediatorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$vNorCXmt8JEk3QADVVT4debk0ULJk1MVs/qi8R8eWrtgJHICkFmre', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:33:47', '2022-08-24 01:33:47', NULL),
(109, 106, 'Yogesh', 'mediator', '', 'mediatorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$E6vViZ165ub6acUMojpw5.1VLWe.ajyJEDdO.Hfmum1BagnXj/RQG', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:33:50', '2022-08-24 01:33:50', NULL),
(110, 106, 'Yogesh', 'mediator', '', 'mediatorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$bN8KS4lI8Tn6sqHr8uaJkOud9vQQ0z.z5t6aENdqgjoRvBkt9lf86', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:33:57', '2022-08-24 01:33:57', NULL),
(111, 106, 'Yogesh', 'mediator', '', 'mediatorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$OlsaSoxppsKioTiTYytyF.Z8S2wu50CuYvWuGobHiRaK1RRpKXqdu', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:35:58', '2022-08-24 01:35:58', NULL),
(112, 106, 'Yogesh', 'mediator', '', 'mediatorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$OwZWs.RQhKX4jsoh2C0BXeug59L6HeDxX5cQwmOHkvlLaOaNWwfTm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:36:00', '2022-08-24 01:36:00', NULL),
(113, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$BhNoriWpcxffGDcckB2a.uA5vAHZ2L6GctJiwbaackCPm8r.RrTs2', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:36:57', '2022-08-24 01:36:57', NULL),
(114, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$93SEaBqXJ2H/Al6WB/P87uUaZq.VDreb.8JWyenaFqUDk/N2pr1V.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:36:58', '2022-08-24 01:36:58', NULL),
(115, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$ySk2JLyo5tKsZcYNMSClseu5o05K7hxkSMnIjV9oUGXZQiaDHn27S', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:38:10', '2022-08-24 01:38:10', NULL),
(116, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$tO7cTzvDHyQSHb6Ff.hrVuf9KUww9cuDfrPOv4VvIGPcogzdBCYuK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:38:30', '2022-08-24 01:38:30', NULL),
(117, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$u9vDQ1BY94FJRLoscAoKyep39BFoDTdfrqNKuiF0ajHDNMhI2D39W', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:38:31', '2022-08-24 01:38:31', NULL),
(118, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$TkG0e0cpJcGFf2QMsYx9KO3DovCUi6hWaB6zb5743BJKfY4GuYg9i', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:38:31', '2022-08-24 01:38:31', NULL),
(119, 106, 'Yogesh', 'GANGURDE', '', 'medaitorlead@uyr.COM', '095-526-0585', 45, 0, 5, NULL, '123456', '$2y$10$vWI.cgR9/WE/3Pp3UQrgE.LvxSLyQF/q6/q2seiaLFcdIrP4xluGa', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:38:31', '2022-08-24 01:38:31', NULL),
(120, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271237.jpeg', 'jk', '$2y$10$nHYYuSPb.Pc3leHjs8LeMOhkJhCyavwvBSyCUtkDJFFupu4qQvB1S', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:43:57', '2022-08-24 01:43:57', NULL),
(121, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271238.jpeg', 'jk', '$2y$10$AqkwHFh3AD5enJV8RVSYze0FtJhasRKjeXI/WzxJ12DEveOKWwrda', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:43:58', '2022-08-24 01:43:58', NULL),
(122, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271238.jpeg', 'jk', '$2y$10$khy5/HZ0522iPAaLDa6SguAcMzVVFMGgzSTaOFoLMALQptjzcMHjC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:43:58', '2022-08-24 01:43:58', NULL),
(123, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271239.jpeg', 'jk', '$2y$10$efKM9S.X8rnUS7L93MQy9O7hLvjuG5b/oirrjzCoTpye5nBsGp0Wa', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:43:59', '2022-08-24 01:43:59', NULL),
(124, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271240.jpeg', 'jk', '$2y$10$eKpJXk1uOIOK0CVHhJR/g.jx6U/ZMRDJyQMZ6jZXqLzpRKiLcEIfm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:44:00', '2022-08-24 01:44:00', NULL),
(125, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271243.jpeg', 'jk', '$2y$10$mICstop227eAKQSRmqKUteyvcTLvONzuOJr0McVDghF8aJPL6whLm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:44:03', '2022-08-24 01:44:03', NULL),
(126, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271244.jpeg', 'jk', '$2y$10$1hQkPp.sBSHXczjSFsJZsumk1ahFVfnKcfn3fgbg1yRQ.MNKpMua.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:44:04', '2022-08-24 01:44:04', NULL),
(127, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271244.jpeg', 'jk', '$2y$10$sjqRSSPH8hcgqfljmrTgfePQKjPSIrlEG.iH329wZL5zGzNPsH/t6', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:44:04', '2022-08-24 01:44:04', NULL),
(128, 106, 'gbf', 'hk', '', 'hk', '223-456-7890', 21, 1, 5, 'profile1661271244.jpeg', 'jk', '$2y$10$Ly2q5wE/3oea4eg.LzjgZ.QQxARCH9fimfgT.Jq8KTufepUw79K4y', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:44:04', '2022-08-24 01:44:04', NULL),
(129, 72, 'Renu ', 'Varma', 'Soham', 'renu@gmail.com', '123-456-7890', 0, 1, 6, '', '', '$2y$10$LJ3zHG1SB/gOJSKbKv/3BeWw2ChMNKfurUrKI8O3jtqlPP6zdKhsm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 01:51:51', '2022-10-13 18:17:38', NULL),
(130, 78, 'Yogesh', 'GANGURDE', '', 'yogesh@uyr.COM', '095-526-0585', 23, 0, 4, NULL, '1234567', '$2y$10$9zuR9hxZl3mfd6RIJ.q7FOpsHjBlaKHDIhw5A9wbLnwMupTP2rHii', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 23:27:18', '2022-09-25 00:37:04', NULL),
(131, 0, 'Sheetal', 'Test', '', 'sheetal@uyr.com', '900-000-9999', 0, 0, 6, NULL, '654321', '$2y$10$/Y0F2bHrGBtPX6BCsqJdP.U.N1rT/9XzIBzCoo8CzEvZYgfUgg5S6', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-24 23:29:33', '2022-09-25 00:08:26', NULL),
(132, 65, 'Dr Peter', 'Mancho', '', 'pmancho@uyr.com', '123-455-6677', 29, 0, 4, NULL, '123456', '$2y$10$uY0h8NHwP9H4IjAigH20eeQ7H0NgcRxyZjfcdFm3DlnqfA.0fJ4jC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-08-25 19:08:34', '2022-12-07 08:10:27', NULL),
(133, 0, 'Priya', 'Test', '', 'priya@uyr.com', '123-344-4566', 0, 0, 6, NULL, '123456', '$2y$10$u1IAih3JL5aK0j1SLen4uOCq.Qvv36JBpVDhSnUEpjwX9u8v0Me/C', 1, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-25 00:15:01', '2022-11-29 08:09:23', '2022-11-29 08:09:23'),
(134, 0, 'Test', 'GANGURDE', '', 'GANGURDE@uyr.COM', '095-526-0585', 0, 0, 3, NULL, '123456', '$2y$10$zDj8Cm42/PuSucBlLO2KluYlz0s..Y7WguLtB1mI55We8/oGKzydC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-25 00:56:16', '2022-09-25 00:56:16', NULL),
(135, 78, 'Pooja', 'Test', '', 'pooja@uyr.com', '123-456-6789', 32, 1, 4, NULL, '123456', '$2y$10$G2L29QIdmdISOlHbwXquw.B.pmEBlaIfHTu7LMZBWVUFEnxfwmITC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-25 00:58:00', '2022-09-25 00:58:00', NULL),
(136, 0, 'Yogesh', 'Doctor (test)', '', 'Testyogesh@uyr.COM', '095-526-0585', 0, 0, 4, NULL, '123456', '$2y$10$bbp2UhtHnb1xBQjp8WSApOOb1uohDfahWLiVBGTbmovAsREfIhDaC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-26 23:29:17', '2022-09-26 23:29:17', NULL),
(137, 134, 'test', 'Doctor', '', 'testdoctor@uyr.com', '095-526-0585', 36, 1, 4, NULL, '123456', '$2y$10$sZCr3A5H8CPa7WWLqq0rN.nSr7nlYaYgUSc1mTysmGanxvgiINGGu', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-26 23:53:01', '2022-09-26 23:53:01', NULL),
(138, 0, 'Sheetal Test', 'Test', '', 'test1sheetal@uyr.com', '122-334-3455', 0, 0, 4, NULL, '123456', '$2y$10$2Nx7G0mxer3NJj80gS2RcupekkbyavEERDrmFXFkiUyh7/pYxPEWK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-09-27 01:32:15', '2022-09-27 01:32:15', NULL),
(139, 0, 'Micheal', 'V', '', 'micheal123@gmail.com', '098-765-432', 0, 0, 6, NULL, '123456', '$2y$10$fiUsuMMUq3drWW7tzI2X6eAiqmRhMu2yZJ1jdQDGm/esXhnrxI2Sm', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-10-23 00:15:45', '2022-10-23 00:15:45', NULL),
(140, 139, 'Baba', 'V', '', 'V@gmail.com', '123-456-789', 0, 0, 6, '', '', '$2y$10$QsLKyV1khCVaSOBg7PTAte5stjSufVdaPV2PzNQ4x94yI4aVn0Nz2', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-10-23 00:36:44', '2022-11-29 08:09:20', '2022-11-29 08:09:20'),
(141, 75, 'Mami Grace', 'Muma', 'Dennis1', 'mamig@gmail.com', '735-373-536', 0, 1, 6, '', '', '$2y$10$7LUrq8iKonFqaSxZ91LnNOy1qnKLo3hdpVpSiYXXa/RAEwnukMVmC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-16 05:54:40', '2022-11-16 05:54:40', NULL),
(142, 0, 'John', 'Test', '', 'john@uyr.com', '111-111-1111', 0, 0, 6, NULL, '123456', '$2y$10$6gYECSQqUqcSQIKiK8uIpuL32b9TLHCOtlRN2.OaCOyskSS6gdqG6', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-17 18:35:02', '2022-11-17 18:35:02', NULL),
(143, 0, 'Smith', 'Test', '', 'smithtest@uyr.com', '123-456-7889', 0, 0, 4, NULL, '123456', '$2y$10$t1PFADDe3VozVR51GTDhoOphduN3zMf95Cc8/kzg130iPsyBEQxLO', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-17 18:36:16', '2022-11-29 08:27:07', NULL),
(144, 72, 'Patient ', 'Test', 'Soham', 'patient@uyr.com', '123-456-7876', 0, 0, 6, '', '', '$2y$10$F.b2rnmoRpLAMX2VNAd35eTTNeJeUrV0KJGAKPEi/mJUjBP11W8H6', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-17 21:54:06', '2022-11-17 21:54:06', NULL),
(145, 75, 'Mami Awah', 'Nsoh', 'Dennis1', 'awahs@gmail.com', '234-362-4363', 0, 1, 6, '', '', '$2y$10$FAIz2JkiY1pkphhPKoJxsuyOmOY07GaOAXJZ.yI.TValxg4.UxbXK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-27 08:37:16', '2022-11-27 08:37:16', NULL),
(146, 75, 'Ndeh Fru', 'Ndoh', 'Dennis1', 'Ndehf@yahoo.com', '564-363-673', 0, 0, 6, '', '', '$2y$10$ZjyV6k6f8m/JH5eK90NGxOQfIenL2JRw7OH1ePVirpCGnd2f50yQG', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-27 08:56:09', '2022-11-27 08:59:32', NULL),
(147, 0, 'Bridget', 'NH', '', 'bridget@gmail.com', '235-343-5436', 0, 0, 6, NULL, '123456', '$2y$10$i25xB2BFf3orGjaYM3Af4OUerdd8fK/eB/XGotBjXSpVPzIW7QwYS', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-29 08:08:51', '2022-11-29 08:08:51', NULL),
(148, 147, 'Ant Bridget', 'NH', '', 'ant@blabal.com', '098-765-4322', 0, 1, 6, '', '', '$2y$10$YTQzgEW5.IEztjpAx2viMuenhZKs7enp.aDp2w76ImJoXlXas4bb2', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-29 08:12:44', '2022-12-07 07:54:12', '2022-12-07 07:54:12'),
(149, 147, 'B Foundation', 'NA', '', 'foundation@gmail.com', '353-426-4666', 0, 0, 6, '', '', '$2y$10$zq7IQEzYv7gi0OslKkmcm.IXqkKKxAs3kJEN7whmdocCtnEtvCimK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-11-29 08:17:39', '2022-12-07 07:54:10', '2022-12-07 07:54:10'),
(150, 0, 'Walters', 'Muma', '', 'Wmuma@gmail.com', '098-765-4321', 0, 0, 6, NULL, '123456', '$2y$10$cAReytAOgvKz8s7.4mLGKutJayjuZa48kByhh2vsQ5ypu.XCL/DZe', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-07 07:51:59', '2022-12-07 07:51:59', NULL),
(151, 150, 'Ngang', 'Muma', '', 'Nmuma@gmail.com', '234-567-8956', 0, 0, 6, '', '', '$2y$10$j5jDvYMuJY/Ot37hSVeTLOjbQcuC7NxGD.rgGmB4VZwnzYKGguE4a', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-07 07:59:09', '2022-12-07 07:59:09', NULL),
(152, 150, 'Mambo', 'Muma', '', 'MMuma@gmail.com', '683-547-8648', 0, 1, 6, '', '', '$2y$10$psi/ONuWmecRZlzwYs5/8u1jDI7Rsm9TuRgwshmJfwt8C49nEWc2e', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-07 08:04:09', '2022-12-07 08:04:09', NULL),
(153, 0, 'Sheetal', 'Test', '', 'sheetal1@uyr.com', '123-456-7890', 0, 0, 6, NULL, '123456', '$2y$10$WwQk8fUsroJEoZnwj6p7x..xBvEk7WC..qCFPbyByS.09ngKv6Th.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-08 22:36:18', '2022-12-08 22:36:18', NULL),
(154, 0, 'Ankita', 'Test', '', 'ankita@uyr.com', '123-456-7890', 0, 0, 6, NULL, '123456', '$2y$10$9FeaM8m4a48AV/n0Pzf9Z.JINN443H2WZwjHl1uqsMGw4ibwQmtFC', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-08 23:08:47', '2022-12-08 23:08:47', NULL),
(155, 0, 'Amruta', 'Test', '', 'amruta@uyr.com', '123-456-7890', 0, 0, 6, NULL, '123456', '$2y$10$guXYH05PoZVCMYKcnPMlqOf39uVwMzxVCq0XKKpgSbXEhbaxzjcwa', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-08 23:49:16', '2022-12-08 23:49:16', NULL),
(156, 0, 'Schola', 'Yedgar', '', 'ScholaY@gmail.com', '222-333-6667', 0, 0, 6, NULL, '123456', '$2y$10$0.Ygw0MhtA/IRlkCBHFi5OZsazLrE2Ukdsv8qjEGZwCvGvRGL2tQK', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-09 07:16:01', '2022-12-09 07:16:01', NULL),
(157, 156, 'Papa Schola', 'Yedgar', '', 'PSchola@gmail.com', '454-635-3635', 0, 0, 6, '', '', '$2y$10$Vd2TtWEvQZzOfSm5cPrDxePOAp36csINPvRbAf3grzTUbrP5yLjF.', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-09 07:19:56', '2022-12-09 07:19:56', NULL),
(158, 0, 'Manihsa', 'Test', '', 'manisha@uyr.com', '123-456-7890', 0, 0, 6, NULL, '123456', '$2y$10$gh12IXvnXnrQH7/9L5WzY.xPUcwbqw/Ap1WPh0tLkYIjhleUVKW8K', 0, 0, 1, NULL, 0, NULL, NULL, NULL, 0, '2022-12-09 20:37:43', '2022-12-09 20:37:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_bank_details`
--

CREATE TABLE `user_bank_details` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `accountNo` varchar(50) DEFAULT NULL,
  `accountHolderName` varchar(200) DEFAULT NULL,
  `ifscCode` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_bank_details`
--

INSERT INTO `user_bank_details` (`id`, `user_id`, `bankName`, `accountNo`, `accountHolderName`, `ifscCode`, `created_at`, `updated_at`) VALUES
(1, 105, '', '', '', '', '2022-08-25 23:47:32', '2022-08-25 23:47:32'),
(2, 71, 'SBI', '12567677878', 'TEST', 'SBI1234', '2022-08-25 23:49:13', '2022-08-25 23:49:30'),
(3, 62, 'Dummy Bank', '0101010101123333', 'Dummy Name', 'IFC00123', '2022-09-03 02:01:51', '2022-09-03 02:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `user_favourite_list`
--

CREATE TABLE `user_favourite_list` (
  `id` bigint(11) NOT NULL,
  `user_id` bigint(11) NOT NULL,
  `doctor_id` bigint(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `review` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `website_settings`
--

CREATE TABLE `website_settings` (
  `id` int(11) NOT NULL,
  `website_title` varchar(255) NOT NULL,
  `website_logo` varchar(255) NOT NULL,
  `instagram` varchar(250) DEFAULT NULL,
  `linkedIn` varchar(250) DEFAULT NULL,
  `twitter` varchar(250) DEFAULT NULL,
  `facebook` varchar(250) DEFAULT NULL,
  `youTube` varchar(250) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `website_settings`
--

INSERT INTO `website_settings` (`id`, `website_title`, `website_logo`, `instagram`, `linkedIn`, `twitter`, `facebook`, `youTube`, `created_at`, `updated_at`) VALUES
(1, 'test', 'logo_1622642730.jpeg', 'https://www.instagram.com/', 'https://in.linkedin.com/company/linkedin?original_referer=https%3A%2F%2Fwww.bing.com%2F', 'https://twitter.com/', 'https://www.facebook.com/', 'https://www.youtube.com', '2021-06-02 10:56:17', '2022-08-16 10:56:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_action`
--
ALTER TABLE `admin_action`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_answers`
--
ALTER TABLE `booking_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_anwers_question_id` (`question_id`);

--
-- Indexes for table `booking_complaints`
--
ALTER TABLE `booking_complaints`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_complaints_answer_id` (`booking_question_answer_id`),
  ADD KEY `fk_complaints_booking_id` (`booking_id`),
  ADD KEY `fk_complaints_question_id` (`booking_question_id`);

--
-- Indexes for table `booking_questions`
--
ALTER TABLE `booking_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questions_type_id` (`type_id`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `consultation`
--
ALTER TABLE `consultation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us_details`
--
ALTER TABLE `contact_us_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us_enquiries`
--
ALTER TABLE `contact_us_enquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_address`
--
ALTER TABLE `doctor_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_booking_timeslot`
--
ALTER TABLE `doctor_booking_timeslot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_information`
--
ALTER TABLE `doctor_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_services`
--
ALTER TABLE `doctor_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_services_doctor_id` (`doctor_id`),
  ADD KEY `fk_services_service_id` (`service_id`);

--
-- Indexes for table `doctor_slots`
--
ALTER TABLE `doctor_slots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_slots_doctor_id` (`doctor_id`);

--
-- Indexes for table `doctor_suggest`
--
ALTER TABLE `doctor_suggest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_settings`
--
ALTER TABLE `email_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorite_doctor`
--
ALTER TABLE `favorite_doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frequently_asked_questions`
--
ALTER TABLE `frequently_asked_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_page_slider`
--
ALTER TABLE `home_page_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website_aboutus`
--
ALTER TABLE `manage_website_aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website_associate_partners`
--
ALTER TABLE `manage_website_associate_partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website_blogs`
--
ALTER TABLE `manage_website_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website_home_page_slider`
--
ALTER TABLE `manage_website_home_page_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website_testimonials`
--
ALTER TABLE `manage_website_testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_associates`
--
ALTER TABLE `master_associates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_availability`
--
ALTER TABLE `master_availability`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_blogs`
--
ALTER TABLE `master_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_country`
--
ALTER TABLE `master_country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_equipments`
--
ALTER TABLE `master_equipments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_fees`
--
ALTER TABLE `master_fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_privacy_policy`
--
ALTER TABLE `master_privacy_policy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_services`
--
ALTER TABLE `master_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_state`
--
ALTER TABLE `master_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_state_country_id` (`country_id`);

--
-- Indexes for table `master_terms_and_conditions`
--
ALTER TABLE `master_terms_and_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_testimonials`
--
ALTER TABLE `master_testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_types`
--
ALTER TABLE `master_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indexes for table `patient_prescription`
--
ALTER TABLE `patient_prescription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_prescription_details`
--
ALTER TABLE `patient_prescription_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_reports`
--
ALTER TABLE `patient_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_logs`
--
ALTER TABLE `payment_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_payment_user_id` (`user_id`);

--
-- Indexes for table `payment_orders`
--
ALTER TABLE `payment_orders`
  ADD PRIMARY KEY (`paymentID`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_address`
--
ALTER TABLE `sales_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_bank_details`
--
ALTER TABLE `user_bank_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bank_user_id` (`user_id`);

--
-- Indexes for table `user_favourite_list`
--
ALTER TABLE `user_favourite_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_favourite_doctor_id` (`doctor_id`),
  ADD KEY `fk_favourite_user_id` (`user_id`);

--
-- Indexes for table `website_settings`
--
ALTER TABLE `website_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_action`
--
ALTER TABLE `admin_action`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `booking_answers`
--
ALTER TABLE `booking_answers`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_complaints`
--
ALTER TABLE `booking_complaints`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_questions`
--
ALTER TABLE `booking_questions`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `career`
--
ALTER TABLE `career`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `contact_us_details`
--
ALTER TABLE `contact_us_details`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact_us_enquiries`
--
ALTER TABLE `contact_us_enquiries`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctor_address`
--
ALTER TABLE `doctor_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `doctor_booking_timeslot`
--
ALTER TABLE `doctor_booking_timeslot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `doctor_information`
--
ALTER TABLE `doctor_information`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `doctor_services`
--
ALTER TABLE `doctor_services`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_slots`
--
ALTER TABLE `doctor_slots`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_suggest`
--
ALTER TABLE `doctor_suggest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `email_settings`
--
ALTER TABLE `email_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `favorite_doctor`
--
ALTER TABLE `favorite_doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `frequently_asked_questions`
--
ALTER TABLE `frequently_asked_questions`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `home_page_slider`
--
ALTER TABLE `home_page_slider`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `manage_website_aboutus`
--
ALTER TABLE `manage_website_aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `manage_website_associate_partners`
--
ALTER TABLE `manage_website_associate_partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `manage_website_blogs`
--
ALTER TABLE `manage_website_blogs`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `manage_website_home_page_slider`
--
ALTER TABLE `manage_website_home_page_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `manage_website_testimonials`
--
ALTER TABLE `manage_website_testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_associates`
--
ALTER TABLE `master_associates`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_availability`
--
ALTER TABLE `master_availability`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `master_blogs`
--
ALTER TABLE `master_blogs`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_country`
--
ALTER TABLE `master_country`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_equipments`
--
ALTER TABLE `master_equipments`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `master_fees`
--
ALTER TABLE `master_fees`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `master_privacy_policy`
--
ALTER TABLE `master_privacy_policy`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_services`
--
ALTER TABLE `master_services`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `master_state`
--
ALTER TABLE `master_state`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_terms_and_conditions`
--
ALTER TABLE `master_terms_and_conditions`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_testimonials`
--
ALTER TABLE `master_testimonials`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_types`
--
ALTER TABLE `master_types`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `patient_prescription`
--
ALTER TABLE `patient_prescription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient_prescription_details`
--
ALTER TABLE `patient_prescription_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `patient_reports`
--
ALTER TABLE `patient_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payment_logs`
--
ALTER TABLE `payment_logs`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_orders`
--
ALTER TABLE `payment_orders`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sales_address`
--
ALTER TABLE `sales_address`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `user_bank_details`
--
ALTER TABLE `user_bank_details`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_favourite_list`
--
ALTER TABLE `user_favourite_list`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `website_settings`
--
ALTER TABLE `website_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_answers`
--
ALTER TABLE `booking_answers`
  ADD CONSTRAINT `fk_anwers_question_id` FOREIGN KEY (`question_id`) REFERENCES `booking_questions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
