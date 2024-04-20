/* Joins 

A SQL Joins ate used to return the records form two or more tables .

* Inner Join
* Left Join
* Right Join
* Self Join
* Cross Join

*/

-- Inner join returns rows from two tables when a match is found

/* General example

select a.coln1, b.coln1,b.col2 from table_a a, table_b b 
where a.col1=b.col1 and b.col2 > som_values */

use Employee;

create table customers ( customer_id int primary key, 
customer_name varchar(50), customer_type varchar(50));

Insert into customers(customer_id, customer_name,customer_type)
	values(1,'Sree','CC'),(2,'Raj','I'),(3,'Varun','SM'),(4,'Rithu','CC');


create table contracts (contract_id int primary key, customer_id int,Amount int);

insert into contracts(contract_id,customer_id,Amount)
	values(1, 1, 400),(2,2,500),(3,3,700),(4,1,1000),(5,2,1200),(6,4,900),
	(7,3,2000),(8,2,1500);

select * from customers;
select * from contracts;

select c.customer_id,c.customer_name,ct.contract_id,ct.amount 
from customers c, contracts ct
where c.customer_id= ct.customer_id and ct.amount > 900;

/* Left Join returns all rows from the left table , even if there no matches with the 
right table.*/

insert into customers(customer_id, customer_name,customer_type)
					values(5,'Suhel','IM'),(6,'Neha','SM');
select * from customers;
select * from contracts;

select c.customer_id,c.customer_name,c.customer_type,ct.contract_id,ct.amount
from customers c
left join contracts ct on c.customer_id=ct.customer_id;

insert into contracts (contract_id,customer_id, amount)
values(9,10,1800),(10,15,3600);

select * from customers;
select * from contracts;
select c.customer_id,c.customer_name,c.customer_type,ct.contract_id,ct.amount
from customers c right join contracts ct on ct.customer_id=c.customer_id;


/* Self join where the table joins itself)*/

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    ManagerID INT
);
INSERT INTO Employees (EmployeeID, FirstName, LastName, ManagerID)
VALUES 
    (1, 'Sree', 'Manager', NULL), -- Sree is a manager, so ManagerID is NULL
    (2, 'Raj', 'Employee', 1),   -- Raj reports to Sree (EmployeeID 1)
    (3, 'Varun', 'Employee', 1), -- Varun reports to Sree (EmployeeID 1)
    (4, 'Rithu', 'Manager', NULL); -- Rithu is a manager, so ManagerID is NULL


select * from Employees;

select e.firstName , e.LastName, m.firstName , m.LastName from Employees e
Join Employees m on e.ManagerID=m.EmployeeID;

select * from customers;
select * from contracts;

select * from customers cross join contracts order by customers.customer_id;


BEGIN TRANSACTION

Update contracts 
set amount =amount -100
where contract_id=2;

update customers
set customer_type='MC'
where customer_id=4;

IF @@ERROR <> 0
	ROLLBACK TRANSACTION
ELSE
	Commit Transaction

BEGIN TRANSACTION

Update contracts 
set amount =amount -100
where contract_id=2;

update customers
set customer_type='CM'
where customer_id=100;

IF @@ERROR <> 0
Begin
	ROLLBACK TRANSACTION
	PRINT 'Transaction rolled back';
End
ELSE
Begin
	IF @@ROWCOUNT=0
	BEGIN 
	Rollback transaction;
	print 'Id not found';
	End
	Else
	Begin
	Commit Transaction
	Print 'Transaction succesful';
	End
End
select * from contracts;




