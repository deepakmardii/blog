---
title: "SQL 101 - Notes"
subtitle: "This notes consists 95% of the SQL you will be using most frequently in your software development career"
date: "2020-03-25"
---

SQL is a language that is designed for creating, reading, updating and deleting data from databases. Any RDBMS will use SQL as the baseline for how it access its data for creating, reading, updating and deleting.

### KEYWORDS

- SELECT
- FROM
- WHERE


## COMMANDS

1. Create Database

    ```sql
    CREATE DATABASE test;
    ```
    
2. Drop Database

    ```sql
    DROP DATABASE test; 
    ```
    
3. Use Database

    ```sql
    CREATE DATABASE record_company;
    USE record_company;
    ```
    
4. **Create Table**

    ```sql
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE test(
    	test_column INT
    )
    ```
    
5. Alter Table

    ```sql
    // Add another column to our table
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE test(
    	test_column INT
    );
    ALTER TABLE test
    ADD another_column VARCHAR(255);
    ```
    
6. Drop Table

    ```sql
    // We dont want test table so drop the test table 
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE test(
    	test_column INT
    );
    
    ALTER TABLE test
    ADD another_column VARCHAR(255);
    
    DROP TEBLE test;
    ```
    
7. Create Table

    ```sql
    // Lets create a bands table that we will use under record_company databse
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands()
    ```
    
8. Band Table

    ```sql
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	name VARCHAR(255)
    );
    ```
    
9. Not Null

    ```sql
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	name VARCHAR(255) NOT NULL
    );
    
    // NOT NULL => Always has a value (will throw error)
    ```
    
10. Primary Key / ID / `Auto Increment`
    
    ```sql
    // What if a band has same name as another band => for this we use id
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    // , => for SQL to know two columns 
    // PRIMARY KEY => Primary identifying column
    ```
    
11. Album Table
    
    ```sql
    // Create an Album table 
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
    );
    ```
    
12. Foreign Key / Table Relationships
    
    ```sql
    // We need to be able to connect an album to a band
    // We need to reference band table from albums table (id)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    ```
    
13. Insert Into
    
    ```sql
    // Inserting some band inside bands table
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    ```
    
14. Select
    
    ```sql
    // We can start querying the data from our table (*)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    SELECT * FROM bands LIMIT 2;
    ```
    
15. Limit
    
    ```sql
    // What if we want only two bands (LIMIT)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    
    SELECT * FROM bands LIMIT 2;
    ```
    
16. Specific Columns
    
    ```sql
    // We can also get specific columns insted of all columns
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands
    // only name cloumn
    
    ```
    
17. As / Alias Columns
    
    ```sql
    // We can also remane the column for easier to read
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    ```
    
18. Order By
    
    ```sql
    // Order the elements using select statement
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    SELECT * FROM bands ORDER BY name DESC;
    SELECT * FROM bands ORDER BY name ASC;
    ```
    
19. Insert Into (Part 2)
    
    ```sql
    // Lets add some albums to our albums table
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    ```
    
20. Distinct Select
    
    ```sql
    // We can select just the name from albums(Distinct select)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT name FROM albums; // Nightmare Repeated
    SELECT DISTINCT name FROM albums; // Only Uniquie names
    ```
    
21. Update
    
    ```sql
    // We purpousfully put wrong year for the beast album
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    // This will update all the release_year to 1982
    UPDATE albums
    SET release_year = 1982;
    ```
    
22. Where
    
    ```sql
    // We purpousfully put wrong year for the beast album
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    // We can use WHERE almost everywhere
    ```
    
23. Less Than
    
    ```sql
    // Less than filter (WHERE filter method)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    ```
    
24. Like String Filter
    
    ```sql
    // like string filter (WHERE filter method)
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%';
    // % => everthing inside % area can be anything
    // RESULT => 'The Number of the Beasts' & 'Power Slave'
    ```
    
25. Or
    
    ```sql
    // We can also combine different WHERE clauses inside single QUERY
    // OR Clause
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    ```
    
26. And
    
    ```sql
    // We can also use AND Clause
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    ```
    
27. Between
    
    ```sql
    // BETWEEN => Filter between two different values
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    ```
    
28. Is Null
    
    ```sql
    // is Null => Filter thing that are null
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    ```
    
29. Delete
    
    ```sql
    // Since out Test Album doesnot have any release_year we can DELETE id
    // With DELETE Query
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums // It will delete every single row from our album
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    ```
    
30. Join
    
    ```sql
    // We have used 4 main ways SQL uses to interact with data
    // CREATE, READ, UPDATE and DELETE
    
    // JOIN => We can join two different tables together on different properties
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    JOIN albums  ON bands.id = albums.band_id;
    ```
    
31. Inter / Left / Right Comparison
    
    ```sql
    // JOIN => We can join two different tables together on different properties
    
    // We have multiple different ways to join in SQL: 3 Specific
    // INNER JOIN => What the basic JOIN does
    // LEFT JOIN => return everthing that LEFT(bands) has even there is no common data 
    // RIGHT JOIN => retrun everthing that RIGHT(albums) has even there is no common data
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    JOIN albums  ON bands.id = albums.band_id;
    //OR
    INNER JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM bands
    LEFT JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM albums
    RIGHT JOIN bands ON bands.id = albums.band_id;
    // Will result the same as left join(but on right side) becuse we have fliped the table
    ```
    
32. Aggregate Functions
    
    ```sql
    // Aggreate takes all the date retured from the result and runs a function on it
    // Common Function: AVG(), SUM() and COUNT()
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    INNER JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM albums
    RIGHT JOIN bands ON bands.id = albums.band_id;
    
    SELECT AVG(release_year) FROM albums;
    // Aggreate takes all the date retured from the result and runs a function on it
    ```
    
33. Group By
    
    ```sql
    // Aggreate takes all the date retured from the result and runs a function on it
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    INNER JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM albums
    RIGHT JOIN bands ON bands.id = albums.band_id;
    
    SELECT AVG(release_year) FROM albums;
    
    SELECT band_id, COUNT(band_id) FROM albums
    GROUP BY band_id;
    ```
    
34. Alisa Tables
    
    ```sql
    // Aggreate takes all the date retured from the result and runs a function on it
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    INNER JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM albums
    RIGHT JOIN bands ON bands.id = albums.band_id;
    
    SELECT AVG(release_year) FROM albums;
    
    SELECT band_id, COUNT(band_id) FROM albums
    GROUP BY band_id;
    
    // Join the above table with band table
    
    SELECT b.name AS band_name, COUNT(a.id) AS num_albums
    FROM bands AS b 
    LEFT JOIN albums AS a ON b.id = a.band_id
    GROUP BY b.id;
    
    // Albums we want to select and given them alias
    // Left join the albums means even getting the albums which have no band
    // Grouping this by band id so we have unique row for diff band id
    ```
    
35. Having vs Where
    
    ```sql
    // Filter bg Aggregate ( Having vs Where )
    
    CREATE DATABASE record_company;
    USE record_company;
    CREATE TABLE bands(
    	id INT NOT NULL AUTO_INCREMENT,
    	name VARCHAR(255) NOT NULL,
    	PRIMARY KEY (id)
    );
    
    CREATE TABLE albums(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     release_year INT,
     band_id INT NOT NULL,
     PRIMARY KEY (id),
     FOREIGN KEY (band_id) REFERENCES bands(id)
    );
    
    INSERT INTO bands (name)
    VALUES ('Iron Maiden');
    
    INSERT INTO bands (name)
    VALUES ('Deuce'),('Avenged Sevenfold'), ('Ankor');
    
    SELECT * FROM bands;
    Learn SQL In 60 Minutes
    
    SELECT * FROM bands LIMIT 2;
    
    SELECT name FROM bands;
    
    SELECT id AS 'ID', name AS 'Band Name'
    FROM bands;
    
    SELECT * FROM bands ORDER BY name;
    
    INSERT INTO albums(name, release_year, band_id)
    VALUES ('The Number of the Beasts', 1985, 1),
    	('Power Slave', 1984,1),
    	('Nightmare',2018,2),
    	('Nightmare',2010,3),
    	('Test Album', NULL, 3);
    	
    SELECT * FROM albums;
    
    SELECT DISTINCT name FROM albums; 
    
    UPDATE albums
    SET release_year = 1982
    WHERE id = 1;
    
    SELECT * FROM albums
    WHERE release_year < 2000;
    
    SELECT * FROM albums
    WHERE name LIKE '%er%' OR band_id = 2;
    
    SELECT * FROM albums
    WHERE release_year = 1984 AND band_id = 1;
    
    SELECT * FROM albums
    WHERE release_year BETWEEN 2000 AND 2018;
    
    WHERE * FROM albums
    WHERE release_year IS NULL;
    
    DELETE FROM albums WHERE id = 5;
    
    SELECT * FROM albums;
    
    SELECT * FROM bands
    INNER JOIN albums  ON bands.id = albums.band_id;
    
    SELECT * FROM albums
    RIGHT JOIN bands ON bands.id = albums.band_id;
    
    SELECT AVG(release_year) FROM albums;
    
    SELECT band_id, COUNT(band_id) FROM albums
    GROUP BY band_id;
    
    SELECT b.name AS band_name, COUNT(a.id) AS num_albums
    FROM bands AS b 
    LEFT JOIN albums AS a ON b.id = a.band_id
    // We cannot use WHERE num_albums = 1 because it happens before groupby
    // And because its aggregate happens after groupby
    GROUP BY b.id
    HAVING num_album = 1;
    ```