DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;

USE workplace_db;

CREATE TABLE department (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    roles_title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department INT,
    FOREIGN KEY (department)
    REFERENCES department(id)
    
);

CREATE TABLE employee (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(30) NOT NULL,
    employee_last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(ID),
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(ID)
);

