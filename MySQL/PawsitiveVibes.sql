-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pawsitivevibes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pawsitivevibes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pawsitivevibes` DEFAULT CHARACTER SET utf8 ;
USE `pawsitivevibes` ;

-- -----------------------------------------------------
-- Table `pawsitivevibes`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pawsitivevibes`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `numstock` INT NOT NULL,
  `marca` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `seccion` VARCHAR(50) NOT NULL,
  `descuento` INT NOT NULL,
  `precio` DOUBLE NOT NULL,
  `imagen` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pawsitivevibes`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pawsitivevibes`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `imagen` INT NOT NULL,
  `administrador` INT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pawsitivevibes`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pawsitivevibes`.`carrito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `productos_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`, `usuario_id`),
  INDEX `fk_carrito_productos_idx` (`productos_id` ASC) VISIBLE,
  INDEX `fk_carrito_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_productos`
    FOREIGN KEY (`productos_id`)
    REFERENCES `pawsitivevibes`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `pawsitivevibes`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
