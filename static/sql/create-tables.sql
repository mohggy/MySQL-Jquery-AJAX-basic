-- OSX:
-- PATH=$PATH:/Applications/MAMP/Library/bin
-- export PATH
-- Windows: set environment variables, then:
-- mysql –h localhost -u root -p test < create-tables.sql

create table Travel (
  id int NOT NULL AUTO_INCREMENT, 
  country VARCHAR(50) NOT NULL,
  capital VARCHAR(50) NOT NULL,
  population int NOT NULL, 
  price int NOT NULL,
  speak VARCHAR(50) NOT NULL,
);

INSERT INTO travel VALUES (1, 'Japan', 'Tokyo', 12314578, 1100, 'Japanese');
INSERT INTO travel VALUES (2, 'Canada', 'Vancouver', 500000, 450, 'English');
INSERT INTO travel VALUES (3, 'France', 'Paris', 654321, 1500, 'French');
INSERT INTO travel VALUES (4, 'Italy', 'Venice', 800000, 1100, 'Italian');
INSERT INTO travel VALUES (5, 'Greece', 'Rome', 605001, 1350, 'Greek');
INSERT INTO travel VALUES (6, 'Korea', 'Seoul', 1111115, 1299, 'Korean');
INSERT INTO travel VALUES (7, 'China', 'ShangHai', 9999999, 1399, 'Mandarin');
INSERT INTO travel VALUES(8, 'Thailand', 'Bangkok', 55555667, 980, 'Thai');
INSERT INTO travel VALUES(9, 'USA', 'California', 780500, 650, 'English');
INSERT INTO travel VALUES(10, 'Russia', 'Moscow', 8000000, 1150, 'Russian');