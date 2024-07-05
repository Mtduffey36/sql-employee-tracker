INSERT INTO departments ( name )
VALUES  ('Sales'),
        ('Finance'),
        ('Engineering'),
        ('Legal'),
        ('Service');
       
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), 
       ('Salesperson', 80000, 1), 
       ('Account Manager', 160000, 4), 
       ('Accountant', 90000, 4), 
       ('Lead Engineer', 150000, 3), 
       ('Software Engineer', 110000, 4), 
       ('Legal Team Lead', 250000, 4), 
       ('Lawyer', 190000, 4), 
       ('Custodian Lead',90000 ,5), 
       ('Custodian', 65000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
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