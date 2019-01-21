USE `manga-drive`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: manga-drive


--
-- Table structure for table `pdf`
--
DROP TABLE IF EXISTS `pdf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pdf` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `path_name` varchar(200) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY unique_title (`title`),
  UNIQUE KEY unique_path_name (`path_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `tag`
--
DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table structure for table `pdf-tag`
--
DROP TABLE IF EXISTS `pdf-tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pdf-tag` (
  `article` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`article`,`tag_id`),
  KEY `tag_id_idx` (`tag_id`),
  CONSTRAINT `tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `article_id` FOREIGN KEY (`article`) REFERENCES `pdf` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;









-- Insert TAGs

INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(1, 'network');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(2, 'security');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(3, 'iot');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(4, 'presentation');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(5, 'MICT');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(6, 'CS');
INSERT INTO `manga-drive`.`tag`
(`id`, `name`) VALUES
(7, 'computer vision');




-- Insert PDFs

INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Smart City-Internet of Things (IoT) Security',
 'Network-Security/Trieu-19263045.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(1, 1);
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(1, 2);


INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('IoT Security - Type A',
 'Advanced-Topic-In-ICT/19263045 - IoT - Type A.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(2, 1);


INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Type A-Cosmos and Ripple - Presentation',
 'Advanced-Topic-In-ICT/19263045 - Type A-Cosmos and Ripple.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(3, 5);


INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Type A-Cosmos and Ripple - Critical Review', 
'Advanced-Topic-In-ICT/19263045-CriticalReview.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(4, 5);


INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Visualizing Processes of Machine Learning frameworks for both Optimization and End Users Understanding - Literature Review',
 'Advanced-Topic-In-ICT/19263045-LiteratureReview.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(5, 5);

INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Compare and Contrast Interledger PaymentProtocol and Tendermint’s Cosmos - Technical Review',
 'Advanced-Topic-In-ICT/19263045-TechnicalReview.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(6, 5);

INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Visualizing Processes of Machine Learning frameworks for both Optimization and End Users Understanding - Presentation',
 'Advanced-Topic-In-ICT/Type B - Literature Review.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(7, 5);


-- Multimedia
INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Telemedicine - Internet of Multimedia Things (IoMT)',
 'Multimedia-Communication-system/19263045-Telemedicine - Internet of Multimedia Things (IoMT).pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(8, 5);
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(8, 3);

-- Professional-Practical-and-Communication 
INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Ethics and Codes of conduct',
 'Professional-Practical-and-Communication/Ethics.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(9, 5);

INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Reflection Essay 1',
 'Professional-Practical-and-Communication/Reflection Essay 1.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(10, 5);

INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Reflection Essay 2',
 'Professional-Practical-and-Communication/Reflection Essay 2.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(11, 5);


INSERT INTO `manga-drive`.`pdf`
(`title`, `path_name`, `description`) VALUES
('Reflection Essay 2',
 'Computer-Vision/proposal_template.pdf', '');
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(12, 6);
INSERT INTO `manga-drive`.`pdf-tag`
(`article`, `tag_id`) VALUES
(12, 7);