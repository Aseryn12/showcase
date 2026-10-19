-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 19 2026 г., 18:06
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testapplication`
--

-- --------------------------------------------------------

--
-- Структура таблицы `applications`
--

CREATE TABLE `applications` (
  `id` int UNSIGNED NOT NULL,
  `text` varchar(250) NOT NULL DEFAULT 'Заявка без текста',
  `status` enum('Ожидает обработки','Обрабатывается') NOT NULL DEFAULT 'Ожидает обработки',
  `timestamp` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `applications`
--

INSERT INTO `applications` (`id`, `text`, `status`, `timestamp`) VALUES
(6, 'kan dkakdl makldmalkda', 'Ожидает обработки', '2026-10-19 | 12:54'),
(7, 'kan dkakdl makldmalkdasfse12', 'Ожидает обработки', '2026-10-19 | 12:56'),
(8, 'daw da fsef sef awf15d aw56', 'Ожидает обработки', '2026-10-19 | 12:58'),
(9, 'svb b fd', 'Ожидает обработки', '2026-10-19 | 13:00'),
(10, 'ad adawd a wd', 'Ожидает обработки', '2026-10-19 | 13:00'),
(11, 'ad adawd a wd', 'Ожидает обработки', '2026-10-19 | 13:01'),
(12, 'ad adawd a wd', 'Ожидает обработки', '2026-10-19 | 13:05'),
(13, ' dada daf ', 'Ожидает обработки', '2026-10-19 | 13:06'),
(14, 'lool dojadad12', 'Ожидает обработки', '2026-10-19 | 13:06'),
(15, 'lool dojadad12', 'Обрабатывается', '2026-10-19 | 13:06'),
(16, 'lool dojadad12', 'Обрабатывается', '2026-10-19 | 13:06'),
(17, 'lool dojadad12', 'Обрабатывается', '2026-10-19 | 13:06'),
(18, 'kjsn.a, m.,awd 12325', 'Обрабатывается', '2026-10-19 | 13:36'),
(19, 'ki lkj;oaldmalwm', 'Обрабатывается', '2026-10-19 | 14:23'),
(20, 'kajnd lawmd lawmd aklmd;aw', 'Обрабатывается', '2026-10-19 | 14:24');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
