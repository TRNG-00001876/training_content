use Employee;

select * from Employees;
select * from vendor;
select * from customers;
select * from contracts;


-- To create a view
```
create view CustomerView as
	select customer_name,customer_type
	from customers
	Inner Join
	contracts on 
	contracts.customer_id=customers.customer_id;
```
-- fetch the records from the view
select * from CustomerView;
-- Rename the view
Exec sp_rename CustomerView , CustomerInfoView;

-- Modify the view we use Alter command
```
Alter view CustomerInfoView
as
	select top 3 * from customers;

select * from CustomerInfoView;
```

-- Find the definition of the view
```
sp_helptext CustomerInfoView;
```
-- Delete views
```
Drop view CustomerInfoView;
```

select * from CustomerInfoView;

```
create table parts
(
	part_id Int Not null primary key,
	part_name varchar(100)
	);

Insert into parts(part_id,part_name) values
						(100,'Mouse'),(1,'Keyboard'),(15,'Speaker'),
						(102,'Monitor');
select * from parts;

```
```
create clustered index cl_ix_part_name on parts(part_name);

create table sales
(
	sales_id int not null,
	prod_id int ,
	prod_name varchar(100),
	quantity int
	);

insert into sales(sales_id,prod_id,prod_name,quantity)
		values(100,10,'Laptop',10),
			  (10,12,'Speaker',5),
			  (179,1,'Monitor',12),
			  (102,13,'Projector',3);

create index ix_prod_name on sales(prod_name);
select prod_name from sales;

create clustered index cl_ix_quantity on sales(quantity);

select * from Rev_Interns;
```

-- To create non- clustered index 
```
create index ix_Interns_city on Rev_Interns(city);

select InterId,city from Rev_Interns;

select * from Rev_Interns;
```

-- Cursor --
```
select * from Rev_Interns;

DECLARE @interns_id	int
DECLARE @intern_name varchar(100)

DECLARE InternsCursor CURSOR FOR
select InterId,Intern_Name from Rev_Interns

OPEN InternsCursor

FETCH NEXT FROM InternsCursor INTO @interns_id,@intern_name

while @@FETCH_STATUS =0 
BEGIN
	PRINT 'Intern Id is : ' +CAST(@interns_id as varchar(10))
	+'Name of the Intern is :'+@intern_name

	FETCH NEXT FROM InternsCursor INTO @interns_id,@intern_name
END

CLOSE InternsCursor

DEALLOCATE InternsCursor


```
















