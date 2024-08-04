DELETE FROM department;
INSERT INTO department ( name )
VALUES  ('Sales'),
        ('Finance'),
        ('Engineering'),
        ('Legal'),
        ('Service');

DELETE FROM role;
INSERT INTO role (title, department, salary)
VALUES ('Sales Lead', 1, 100000), 
       ('Salesperson', 1, 80000), 
       ('Account Manager', 2, 160000), 
       ('Accountant', 2, 90000), 
       ('Lead Engineer', 3, 150000), 
       ('Software Engineer', 3, 110000), 
       ('Legal Team Lead', 4, 250000),
       ('Lawyer', 4, 190000), 
       ('Custodian Lead', 5, 90000), 
       ('Custodian', 5, 65000);

DELETE FROM employee;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Ablerta', 'Bammie', 1, NULL),
        ('Johnny', 'Runner', 2, 1),
        ('Van', 'Dang', 2, 1),
        ('Paul', 'Carty', 2, 1),
        ('Vinny', 'Halen', 3, NULL),
        ('Bear', 'Man', 4, 3),
        ('Suzian', 'Lunch', 4, 3),
        ('Meagan', 'Pitts', 5, NULL),
        ('Mango', 'Deebee', 6, 5),
        ('Vern', 'Stack', 6, 5),
        ('Babe', 'Rutherson', 7, NULL),
        ('Dylan', 'Boshey', 8, 7),
        ('Frankie', 'Doodle', 9, NULL),
        ('Bianka', 'Toodles', 10, 9);