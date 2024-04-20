Use Employee;

Truncate table Consultant;

select * from Consultant;

DROP Table Consultant;


Alter table Department rename column DeptName to Department_Name;

Exec sp_rename 'Department.DeptName' , 'Department_Name';

select * from Department;

/* Insert into the table*/

Insert into Department (DeptId,Department_Name) Values(1,'HR');



Insert into Department (DeptId,Department_Name) Values(2,'IT_Support'),(3,'Finance');

-- Update records in the department table

Update Department set Department_Name='Training' where DeptId=3;

-- Delete a single record from the table

Delete from Department where DeptId=3;

Delete * from Department;

Select * from Department where DeptId !< 2 ;

Select * from Department where DeptId !< 1;



create table Rev_Interns 
(
	InterId int Identity (1,1) Primary key,
	Intern_Name varchar(50) Not null,
	City varchar(100) Not null,
	Age int not null,
	Salary money not null,
	Adhar_no int not null unique
	);

select * from Rev_Interns;

Insert into Rev_Interns(Intern_Name,City,Age,Salary,Adhar_no)
		Values('Abdul','Bangalore',20,55000,167890);

Set IDENTITY_INSERT Rev_Interns ON;
Insert into Rev_Interns (InterId,Intern_Name,City,Age,Salary,Adhar_no)
			values(100,'Pavan','Anandapur',20,50000,25679);


Insert into Rev_Interns(InterId,Intern_Name,City,Age,Salary,Adhar_no)
			values(101,'Sahaana','Bangalore',20,55000,45678);
Set IDENTITY_INSERT Rev_Interns OFF;

Insert into Rev_Interns(Intern_Name,City,Age,Salary,Adhar_no)
		Values('Praveena','Andhra',20,55000,117890);

Set IDENTITY_INSERT Rev_Interns ON;
Insert into Rev_Interns (InterId,Intern_Name,City,Age,Salary,Adhar_no)
			values(110,'Pradeesh','Chennai',20,52000,11379);

Insert into Rev_Interns (InterId,Intern_Name,City,Age,Salary,Adhar_no)
			values(171,'Tharun','Chennai',20,52000,11399);

Update Rev_Interns set InterId=190 where Adhar_no=11379;

truncate table Rev_Interns;

Drop table Rev_Interns;

Create table Bounus_Paid
(
	InterId int primary key,
	Bonus int not null
	);

insert into Bounus_Paid (InterId,Bonus) Values( 1,5000),(100,2000),(101,3000),(102,6000),
						(110,4000),(171,5000);
Select * from Rev_Interns;
Select * from Bounus_Paid;

Select * from Rev_Interns where InterId <> All 
(select InterId from Bounus_Paid where Bonus >=5000); -- 1,102,171

select * from Rev_Interns where salary >52000 and age>19;

create table Intern_Info
(
	Mob_no int primary key,
	InterId int not null unique,
	Address varchar(5000) not null,
	Gender varchar(10) not null)

Insert into Intern_Info(Mob_no,InterId,Address,Gender) Values(8975545,1,'YYYYYYYYY','M'),
															(1233456,100,'uuuuuuu','M'),
															(8765490,101,'kkkkkk','F'),
															(9087654,102,'pppppp','F'),
															(567890,110,'rrrrr','M'),
															(1256789,171,'lllll','M');
															
Insert into Intern_Info(Mob_no,InterId,Address,Gender) Values(567870,190,'ooooo','M'),
															(890769,200,'nnnnn','M');




select * from Rev_Interns where InterId = Any -- 190,110,200,100,171,1,
				( select InterId from Intern_Info where Gender='M'); -- 190,110,200,100,171,1,

select * from Rev_Interns where InterId = some -- 190,110,200,100,171,1,
				( select InterId from Intern_Info where Gender='M'); -- 190,110,200,100,171,1,

select InterId,Intern_Name from Rev_Interns where salary between 50000 and 52000;
Select * from Rev_Interns;
Select * from Intern_Info;

select * from Rev_Interns where exists -- 101 and 102
		(Select InterId from Intern_Info where Rev_Interns.InterId=Intern_Info.InterId
			and Gender='F'); -- 101 and 102

/* In operator */

select * from Rev_Interns where city in('Bangalore','chennai');

select * from Rev_Interns where city in(select city from Rev_Interns);


/* Like Operator - to search for a pattern 
wildcard characters 
% - represents zero, one or more characters
_ -represents one character
[] - [ack]% - value can either starts with a or c or k.
		represents any single chanracter specified within []
-  -> represents a range of character [a-d]%
[^] -> [^kjg]
*/

select * from Rev_interns where intern_name like 'p%';
select * from Rev_interns where intern_name like 'pa_n';
Select * from Rev_interns where intern_name like '[ps]%';



/* is null */

Select * from Rev_interns where age is null;


Select * from Rev_interns where age is not null;












