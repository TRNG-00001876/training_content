# JDBC

- JDBC stands for Java Database Connectivity, which is a standard Java API for database-independent connectivity between the Java programming language and a wide range of databases.

- JDBC is a specification that provides a complete set of interfaces that allows for portable access to an underlying database.

## Database Servers and Clients Overview

- A database is a repository of data. Data is stored permanently in the database and we can retrieve it later whenever needed by using query commands. Database client is used to retrieve data from tables and give it to the user.

**Use of JDBC**

- Java can be used to write different types of executables, such as:

 - Java applications
 - Java applets
 - Java Servlets
 - Java ServerPages (JSPs)
 - Enterprise JavaBeans (EJBs)

- All of these different executables are able to use a JDBC driver to access a database and take advantage of the stored data.

- JDBC provides the same capabilities as ODBC, allowing Java programs to contain database-independent code.

**JDBC Library**

JDBC library includes APIs for each of the tasks commonly associated with database usage:

- Making a connection to a database
- Creating SQL statements
- Executing SQL queries in the database
- Viewing and modifying the resulting records

**JDBC Architecture**

In Java, the application is of two types, CUI also known as a command interface, and GUI also known as a graphical user interface. The java application is connected to JDBC API which is java-SQL for storing and retrieving user information.

This JDBC API is managed by the JDBC driver manager which is further divided into three types. The first JDBC driver consists of an oracle, the second consist of an SQL server, and the third JDBC driver consists of ODBC data sources.

**The JDBC architecture consists of two layers:**

*JDBC API:*

- It provides the application-to-JDBC manager connection.
- The JDBC API uses a driver manager and database-specific drivers to provide transparent connectivity to heterogeneous databases.

*JDBC driver API:*

- This supports the JDBC manager-to-driver connection.
- The JDBC driver manager ensures that the correct driver is used to access each data source. The driver manager is capable of supporting multiple concurrent drivers connected to multiple heterogeneous databases.

**JDBC Driver**

JDBC driver implements the defined interfaces in the JDBC API for interacting with your database server.

- *Type 1:* JDBC-ODBC bridge driver- it is used for development and testing purposes
- *Type 2:* JDBC-native API- this is used when types 3 and 4 are not available
- *Type 3:* JDBC-net pure java- it is used when a program needs to access multiple databases
- *Type 4:* 100% pure Java- it is used when we need to access multiple databases

**JDBC Statements**

Once a connection is obtained we can interact with the database.

- The JDBC statement, CallableStatement, and PreparedStatement interfaces define the methods and properties that enable you to send SQL or Pl/SQL commands and receive data from your database.


*Statement:*


- Statement is used for executing a static SQL statement and returning the results it produces.
- Before you can use a statement object to execute a SQL statement, you need to create one using the connection object’s `createStatement()` method.
- Statement createStatement() throws SQLException.
- Creates a statement object for sending SQL statements to the database.
- SQL statements without parameters are normally executed using objects.
- If the same SQL statement is executed many times, it may be more efficient to use a PreparedStatement object.

*Program:*

```
Statement stmt= con.createStatement(); //every time parsing and execution

long t1= System.currentTimeMillis();

for(int i=1; i<=1000; i++){

stmt.executeUpdate(“INSERT INTO TABLE1 VALUES (“ + i + “ , “+i*10+”)”);

}

long t2= SYstem.currentTimeMillis();

System.out.println(“Time=”+(t2-t1));

```
*Output: 1500*

**PreparedStatement:**

- A SQL statement is precompiled and stored in an object.
- This object can then be used to efficiently execute this statement multiple times.
- Before you can use a PreparedStatement object to execute an SQL statement, you need to create one using the connection object’s prepareStatement() method.
- `PreparedStatement prepareStatement(String sql) throws SQLException`.
- Creates a PreparedStatement object for sending parameterized SQL statements to the database.
- A SQL statement with or without IN parameters can be pre-compiled and stored in a PreparedStatement object. This object can then be used to efficiently execute this statement multiple times.

*Program:*
```

PreparedStatement stmt= con.prepareStatement(“INSERT INTO TABLE2 VALUES(?,?)”);

long t1= System.currentTimeMillis();

for(int i=1; i<=1000; i++){

stmt.setInt(1,i);

stmt.setInt(2,i*10);

stmt.executeUpdate();

} // parse once, execute multiple times

long t2= System.currentTimeMillis();

System.out.println(“Time=”+(t2-t1));

```

*Output: 718*


**Callable Statement**

- The interface used to execute SQL stored procedures.
- Stored procedures are a set of statements written using PL/SQL and stored in the database.
- When the client contacts the server, the stored procedures are executed and the result is sent to the client.
- `CallableStatement prepareCall(String sql) throws SQLException`
- Creates an object for calling databases stored procedures.
- The object provides methods for setting up its IN and OUT parameters, and methods for executing the call to a stored procedure.

**JDBC Transactions**

If your JDBC connection is in auto-commit mode, which is by default then every SQL statement is committed to the database upon its completion. That may be fine for simple applications, but there are three reasons why you may want to turn off auto-commit and manage your own transactions:

- To increase performance
- To maintain the integrity of business processes
- To use distributed transactions

**Transactions:**

- Transactions enable you to control if, and when, changes are applied to the database. It treats a single SQL statement or a group of SQL statements as one logical unit, and if any statement fails, the whole transaction fails.
- To enable manual-transaction support instead of the auto-commit mode that the JDBC driver uses by default, use the connection object’s setAutoCommit() method. If you pass a boolean false to the setAutoCommit() method, you turn off auto-commit. You can pass a boolean true to turn it back on again.

**ResultSet**

- ResultSet Interface is available in the java.sql bundle. It is utilized to store the information which is retrieved from the data set table after the execution of the SQL articulations in the Java Program. The object of ResultSet keeps up with the cursor point at the outcome information. In default, the cursor positions before the principal column of the outcome information.

- The `next ()` strategy is utilized to move the cursor to the following situation in a forward way. It will return FALSE in case there are no more records. It recovers information by calling the `executeQuery()` technique utilizing any of the assertion objects. It very well might be a Statement or PreparedStatement or CallableStatement object.

- ResultSet is used to return the data from the database. 

## Navigational Methods for ResultSet

In Navigation, the method cursor moves around the database, allowing us to perform the following methods as follows.

`beforeFirst()`: It allows you to move the cursor before the starting row from the database.

`afterLast()`: It allows you to move the cursor before the last row.

`Boolean first()`: It allows moving the cursor before the first row.

`Void last()`: It allows moving the cursor before the last row.

Also, we have more methods we can utilize as per user requirements.

## 2. Get Methods for ResultSet

ResultSet has put away the information of the table from the Database. Get methods are utilized to get the upsides of the table in ResultSet. For that, we need to pass either segment Index worth or Column Name.

It provides the different methods that we listed below as follows.

`getint:` Basically, it is used to get the value from the specified column index with the int data type that we want.

`getFloat:` Basically, it is used to get the value from the specified column index with a float data type that we want.

It also provides different methods such as java.sql.data getData, int getint, etc.

## 3. Update methods for ResultSet

- We can update the worth in the Database utilizing ResultSet Updater strategies. It is like Get techniques; however, we need to pass the qualities/information for the specific segment to refresh the Database. It provides the following methods that we listed below as follows.

- Updateint, updatefloat, updatedate etc.

*Examples of JDBC resultset*

```
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class ResultSetExample {
public static void main(String[] args) {
Connection con_obj = null;
Statement stmt_obj = null;
try {
String m_url = " jdbc:mysql://localhost ";
Connection con = DriverManager.getConnection(m_url, "root", "root");
statement = con_obj.createStatement();
String query_stmt = "SELECT * FROM stud";
ResultSet r_set_obj = stmt_obj.executeQuery(query_stmt);
while (r_set_obj.next()) {
System.out.println("Data from database...");
String stud_Name = r_set_obj.getString("stud_name");
String Dept = r_set_obj.getString("dept");
int marks = r_set_obj.getInt("marks");
System.out.println("\tName: " + stud_Name + ", Dept: " + Dept + ", Marks: " + marks);
}
} catch (ClassNotFoundException e_obj) {
E_obj.printStackTrace();
} catch (SQLException e_obj) {
E_obj.printStackTrace();
} finally {
try {
stmt_obj.close();
} catch (SQLException e_obj) {
e_obj.printStackTrace();
}
try {
con_obj.close();
} catch (SQLException e_obj) {
e_obj.printStackTrace();
}
}
}
}
```
*Interview Questions*

Q: What is JDBC?

A: JDBC (Java Database Connectivity) is an API that enables Java programs to interact with databases. It provides a standard set of interfaces to connect to a database, execute SQL queries, and manipulate data.

Q: What are the steps to connect to a database using JDBC?

A: The steps to connect to a database using JDBC are as follows:

- Load the JDBC driver class using Class.forName().
- Establish a connection to the database using DriverManager.getConnection().
- Create a Statement object using the Connection object.
- Execute a SQL query using the Statement object.
- Retrieve and process the results of the query.

Q: What is the difference between Statement and PreparedStatement in JDBC?

A: Statement is a simple interface that is used to execute SQL queries without parameters. PreparedStatement is a subinterface of Statement that is used to execute SQL queries with parameters. PreparedStatement is more efficient than Statement because it precompiles the SQL query, which improves performance when the same query is executed multiple times with different parameter values.

Q: What is the purpose of ResultSet in JDBC?

A: ResultSet is an interface that represents the results of an SQL query. It provides methods to retrieve and process the data returned by the query. The ResultSet object is created by executing a query using a Statement or PreparedStatement object.

Q: What is a transaction in JDBC?

A: A transaction is a sequence of database operations that are treated as a single unit of work. Transactions ensure the consistency and integrity of the data by allowing multiple operations to be treated as a single atomic operation. In JDBC, transactions can be managed using the Connection object, which provides methods to start, commit, and rollback transactions.

Q: What is connection pooling in JDBC?

A: Connection pooling is a technique used to improve the performance of database applications by reusing database connections instead of creating a new connection for each database operation. Connection pooling maintains a pool of pre-initialized database connections that can be reused by multiple clients. In JDBC, connection pooling can be implemented using third-party libraries, such as Apache Commons DBCP or C3P0.


Q: What is a JDBC driver?

A: A JDBC driver is a software component that allows Java applications to communicate with a specific type of database. There are four types of JDBC drivers: Type 1 (JDBC-ODBC bridge), Type 2 (native API), Type 3 (middleware), and Type 4 (pure Java). Type 4 drivers are the most common and recommended for use in production environments.

Q: What is a connection URL in JDBC?

A: A connection URL (Uniform Resource Locator) is a string that specifies the location and properties of a database. It is used to establish a connection to a database using the DriverManager.getConnection() method. The format of the connection URL varies depending on the type of database and JDBC driver being used.

Q: What is a batch update in JDBC?

A: A batch update is a technique used to execute multiple SQL statements as a single batch, which improves performance by reducing the number of round-trips to the database. In JDBC, batch updates can be performed using the Statement or PreparedStatement objects, which provide methods to add multiple SQL statements to a batch and execute the batch.

Q: What is a stored procedure in a database?

A: A stored procedure is a precompiled database program that can be executed by a client application. Stored procedures are typically used to encapsulate complex database operations, improve performance by reducing network traffic, and enforce security by controlling access to database resources. In JDBC, stored procedures can be executed using CallableStatement objects.

Q: What is connection auto-commit in JDBC?

A: Connection auto-commit is a feature in JDBC that automatically commits each SQL statement to the database as soon as it is executed. Auto-commit is enabled by default in JDBC, but it can be disabled using the Connection.setAutoCommit(false) method. Disabling auto-commit allows multiple SQL statements to be executed as a single transaction.

Q: What is a database transaction isolation level?

A: A database transaction isolation level defines how changes made by one transaction are visible to other transactions. There are four standard isolation levels in JDBC: READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, and SERIALIZABLE. The default isolation level in JDBC is READ_COMMITTED. Choosing the appropriate isolation level depends on the requirements of the application and the characteristics of the database.

Q: What is connection pooling in Java?

A: Connection pooling is a technique used to improve the performance of Java applications that use a database. It involves creating a pool of database connections that can be reused by multiple threads, instead of creating a new connection for each thread. Connection pooling can be implemented using third-party libraries, such as Apache Commons DBCP or HikariCP.

Q: What is a database index?

A: A database index is a data structure that improves the performance of queries by allowing them to be executed more quickly. An index is created on one or more columns of a table, and it contains a sorted copy of the data in those columns. When a query is executed, the database uses the index to locate the relevant rows more quickly than it would by scanning the entire table.

