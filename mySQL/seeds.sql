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

        