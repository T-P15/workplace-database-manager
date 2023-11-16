INSERT INTO department (department_name)
VALUES ("Economics"),
       ("Maths"),
       ("Science"),
       ("History"),
       ("English");

INSERT INTO roles (roles_title, salary, department)
VALUES ("Teacher", "10000", 1 ),
       ("Assistant", "50000", 1 );

INSERT INTO employee (employee_name, employee_last_name, roles_id)
VALUES ("Bob", "Bobby", 1),
       ("crow", "warpel", 2);

