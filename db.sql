/*
DROP TABLE research
DROP TABLE professor
DROP TABLE department
DROP TABLE faculty
*/

/*
CREATE TABLE faculty(
   fkey int IDENTITY(1,1) PRIMARY KEY,
   fname VARCHAR(50),
);

CREATE TABLE department(
   dkey int IDENTITY(1,1) PRIMARY KEY,
   fkey int FOREIGN KEY REFERENCES faculty(fkey),
   dname VARCHAR(50),
);

CREATE TABLE professor(
  profKey int IDENTITY(1,1) PRIMARY KEY,
  firstN varchar(50),
  lastN varchar(50),
  email varchar(100),
  link varchar(100),
  hdkey int FOREIGN KEY REFERENCES department(dkey)
);

CREATE TABLE research(
  rKey int IDENTITY(1,1) PRIMARY KEY,
  duration varchar(1),
  posting date,
  deadline date,
  position varchar(10),
  yearA int,
  title varchar(20),
  graduate BIT,  --1 to indicate grad student
  profkey int FOREIGN KEY REFERENCES professor(profkey),
);
*/


/* Inserting test data into the faculty department, professor tables 

INSERT INTO faculty(fname) VALUES ('Science');
INSERT INTO faculty(fname) VALUES ('Schulich');
INSERT INTO faculty(fname) VALUES ('Lassonde');

INSERT INTO department(dname, fkey) VALUES ('Biology',1);
INSERT INTO department(dname, fkey) VALUES ('Business and Administration',2);
INSERT INTO department(dname, fkey) VALUES ('Electrical Engineering and Computer Science',3);

INSERT INTO professor(firstN, lastN, email, link, hdkey) VALUES ('Albert','Roronoa', 'roro@gmail.com', 'hotmail.com' , '3');
INSERT INTO professor(firstN, lastN, email, link, hdkey) VALUES ('Corona','Nico', 'nico@hot.com', 'gear4th.com','2');
INSERT INTO professor(firstN, lastN, email, link, hdkey) VALUES ('Jason','Vinsmoke', 'vin@aol.com','diablejambe.com' ,'1');

INSERT INTO research(duration, posting, deadline, position, yearA , title, graduate, profkey)
             VALUES ('F', GETDATE(), GETDATE(), 'full', 2 , 'Computer Vision', 0, 2)

INSERT INTO research(duration, posting, deadline, position, yearA , title, graduate, profkey)
             VALUES ('W', GETDATE(), GETDATE(), 'part', 3 , 'Computer Arms', 1, 3)

INSERT INTO research(duration, posting, deadline, position, yearA , title, graduate, profkey)
             VALUES ('S', GETDATE(), GETDATE(), 'contract', 4 , 'Computer Machine', 1, 1)

INSERT INTO research(duration, posting, deadline, position, yearA , title, graduate, profkey)
             VALUES ('S', GETDATE(), '2017-02-22', 'contract', 4 , 'Computer Machine', 1, 1)
*/



--SELECT * FROM professor p, faculty f, department d WHERE p.hdkey=d.dkey AND d.fkey=f.fkey ;
--Select * from research r, professor p WHERE r.profkey=p.profkey;

--SELECT * FROM INFORMATION_SCHEMA.TABLES;

