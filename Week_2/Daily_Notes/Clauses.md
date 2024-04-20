use Employee;

create table contracts 
(
contract_id int primary key identity(1,1),
Amount int);

insert into contracts(Amount) values(400),(500),(700);

select * from contracts;

select avg(c.amount) as Averageamount from contracts c where c.amount >450;

select max(c.amount) as Max_Amount from contracts c  where c.amount < 600;

select sum(c.amount) as Total_amount from contracts c;

select count(*) as NoOfEmployees from Rev_Interns;

select count(*) as NoOfEmployees from Intern_Info where gender='F';

/* Order by*/

select * from Rev_Interns;

select * from Rev_Interns order by Intern_name ;

select * from Rev_Interns order by Intern_name asc;

select * from Rev_Interns order by city asc, Intern_name desc;

/* Group by - used to arrange the result table into identical groups with the help of
aggregate functions */





select top 60 percent * from Rev_interns;
select top 2 * from Rev_Interns where salary=55000;


select * from Rev_Interns order by City ;
select * from Rev_Interns order by City offset 3 rows fetch next 2 rows only
select * from Rev_Interns order by Intern_Name offset 3 rows fetch next 2 rows only

select * from Rev_Interns;
select * from Rev_Interns order by Intern_Name; 
select * from Rev_Interns order by Intern_Name offset 3 rows fetch next 2 rows only;


select city,salary,count(Intern_name) as No_of_Employees 
	from Rev_Interns Group by city,salary order by city asc;

Insert into Rev_Interns (Intern_Name,city,age,salary,adhar_no)
	values('Nithish','Hyderabad',22,60000,974357);
Insert into Rev_Interns (Intern_Name,city,age,salary,adhar_no)
	values('Niharika','Hyderabad',21,62000,974227);

/* having 

select colm_name from table_name
where conditio(s) 
Group by coln_name
having consitn(s)
order by colm_name(s)


*/

select * from Bounus_paid;

select * from Rev_Interns;
select count(InterId) as No_Of_Employees, City from Rev_Interns 
Group by city;
select count(InterId) as No_Of_Employees, City from Rev_Interns 
Group by city having count(InterId) >1;

create table vendor
(VendorId int primary key identity(1,1),
Vendor_name varchar(50),City varchar(50),age int);

insert into vendor(Vendor_name,city,age) values('Pavan','Paris',40),('Raj','Cochin',38),
											('Keshav','Chennai',35);
select * from Rev_Interns;
select * from Vendor;

select city from Rev_Interns UNION 
select city from Vendor
Order by city;

select * from Rev_Interns;
select * from Vendor;

select Intern_name as name , age,city from Rev_Interns where 
age <22 union 
select Vendor_name as name,age,city from vendor where age >37 order by city;

-- Intersect

select city from Rev_Interns intersect 
select city from vendor order by city;

-- Except

select city from Rev_Interns;
select city from vendor;

select city from Rev_Interns except
select city from vendor order by city;

