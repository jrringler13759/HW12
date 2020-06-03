USE employees_db;

INSERT INTO departments (name) 
    VALUES 
        ("Front of House"),  
        ("Back of House");

INSERT INTO emplRole (title, salary, dept_ID) 
    VALUES 
        ("waitress", 12000, 1), 
        ("hostess", 25000, 1), 
        ("bus-boy", 25000, 1), 
        ("bartender", 15000, 1), 
        ("grill_cook", 30000, 2), 
        ("fry_cook", 30000, 2), 
        ("prep_chef", 28000, 2), 
        ("dishwasher", 28000, 2), 
        ("Back of House Manager", 38000, 2), 
        ("Front of House Manager", 38000, 1);


INSERT INTO allempl (first_name, last_name, role_ID, manager_ID)
    VALUES
        ("Sally", "Baker", 10, null),
        ("Albert", "Smith", 9, null),
        ("Allison", "Jones", 1, 10),
        ("Katy", "Alfonzo", 2, 10),
        ("Stephanie", "Lewis", 3, 10),
        ("Alisson", "Lange", 6, 9),
        ("Jeffery", "Post", 7, 9),
        ("Christian", "Owens", 8, 9);

SELECT * FROM departments;
SELECT * FROM emplRole;
SELECT * FROM allEmpl;