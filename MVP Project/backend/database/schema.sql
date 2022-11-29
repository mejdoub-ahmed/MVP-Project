-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema house_data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema house_data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `house_data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `house_data` ;

-- -----------------------------------------------------
-- Table `house_data`.`house`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `house_data`.`house` (
  `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `name` CHAR(30) NOT NULL,
  `description` CHAR(250) NOT NULL,
  `location` CHAR(250) NOT NULL,
  `surface` CHAR(250) NOT NULL,
  `price` CHAR(250) NOT NULL,
  `image` CHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
