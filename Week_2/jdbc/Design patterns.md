Design patterns - solution to a common software problem.

Three categories -

		1. Creational design patterns
				- solutions to instantiate an object in the best possible way.
				singleton design pattern is one of the creational pattern
		2. Structural design patterns
				- provides different ways to creat a class structure .
		3. Behavioral design patterns
				- provide a solution for better interaction between objects 
				and how to provide loose-coupling and flexibility to extend easily.
				

Singleton Design Pattern:

	It restricts the instantiation of the class and it will ensure that for the class there can 
	be only one instance exists in JVM.
	It will provide global point of access to that instance:

public class Singleton{
	private static Singleton ins;
	
	private Singleton()
	{
	}
	public static Singleton getInstance()
	{
		if(ins == null)
		{
			ins=new Singleton();
		}
		return ins;
	}
	//other methods
	public void printSomething()
	{
	}


}

public class Main

{
	public static void main(String[] args)
	{
		//Singleton s=new Singleton(); //this will return an error bcoz we made the constructor
					   //of the Singlton class to be private

		Singleton s=Singleton.getInstance();
		s.printSomething();
	}
}


useful in scenarios like
	- database connection pool
	- caching
	- Thread pool
	- configuration setting

/*Example for database connection using singleton pattern */

public class DatabaseConnection{
	private static DabaseConnection in;
	private Connection con;
	

	private DatabaseConenction()
	{
	//Initialize database connection
		try
		{
			con=DriverManager.getConnection("jdbc:mssql:.....");
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}

	public static DatabaseConnection getInstance()
	{

		if(in== null)
		{
			in=new DatabaseConnection();
		}
		return in;
	}
	public Connection getConnection()
	{
		return con;
	}
	// other methods
	public void insertQuery(String query)
	{
	}
}

public class Main
{
	psvm()
	{
		DatabaseConnection dbc=DatabaseConnection.getInstance();
		Connection con=dbc.getConnection();
	
		try
		{
			Statement s=con.createStatement();
			ResultSet rs=s.executeQuery("Select * from emp");
	
			while(rs.next())
			{
				//
			}
		}
		catch(SQLException)
		{
			e.printStackTrace();
		}
	}
}

---------------------------------------------------------------------------------------------

DAO - Data Access Object.

	
Employee model	- is transferred from one layer to the other
EmployeeDao interface that provide flexible design and API to implement
EmployeeDAOImpl	- concrete class that will have the implementation of EmploeeDao Interfcae

Employee(Model)	<-----			EmployeDao(Interface)	<------------------    Main
   Empid	(Transfer)			getAllemps()				Uses the interface
   EmpName					getEMpID()
						insertEmp()
				
				   		^
				   		|
				   		|(Implements)
					EmployeeDaoImpl(concrete class)
						getAllemps()
						getEmpID()
						insertEmp()
