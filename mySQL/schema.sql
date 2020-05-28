DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE allEmp(
    id INT auto_increment PRIMARY KEY
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_ID INT, 
    FOREIGN KEY role_ID
        REFERENCES empRole(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    manager_ID
   
);

CREATE TABLE empRole(
    id INT auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    dept_ID INT NOT NULL,
    FOREIGN KEY dept_ID
        REFERENCES departments(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE


);

CREATE TABLE departments(
    id INT auto_increment PRIMARY KEY
    name VARCHAR(30) NOT NULL
);