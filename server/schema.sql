CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(160)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomName VARCHAR(15)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

