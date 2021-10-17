
CREATE DATABASE IF NOT EXISTS user_management;

CREATE TABLE IF NOT EXISTS `mediaUser` (
    id int(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    city varchar(100), 
    state varchar(100),
    active BOOLEAN DEFAULT true
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  