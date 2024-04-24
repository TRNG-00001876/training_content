package org.example;
import org.example.dao.EmployeeDAO;
import org.example.dao.EmployeeDAOImpl;
import org.example.model.Employee;
import org.example.service.EmployeeService;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            // Initialize database connection
            Connection connection = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;databaseName=Employee;integratedSecurity=True;encrypt=True;TrustServerCertificate=True");

            // Initialize DAO
            EmployeeDAO employeeDAO = EmployeeDAOImpl.getInstance(connection);

            // Initialize service
            EmployeeService employeeService = new EmployeeService(employeeDAO);

            Scanner scanner = new Scanner(System.in);

            while (true) {
                // Prompt user for operation
                System.out.println("Choose operation:");
                System.out.println("1. Add Employee");
                System.out.println("2. View All Employees");
                System.out.println("3. Update Employee");
                System.out.println("4. Delete Employee");
                System.out.println("5. Exit");
                System.out.print("Enter choice: ");
                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        // Prompt user for employee details
                        System.out.print("Enter employee ID: ");
                        int id = scanner.nextInt();
                        scanner.nextLine(); // Consume newline
                        System.out.print("Enter employee name: ");
                        String name = scanner.nextLine();
                        System.out.print("Enter department ID: ");
                        int departmentId = scanner.nextInt();

                        // Create employee object
                        Employee employee = new Employee(id, name, departmentId);

                        // Add employee
                        employeeService.addEmployee(employee);
                        System.out.println("Employee added successfully!");
                        break;
                    case 2:
                        // View all employees
                        List<Employee> employees = employeeService.getAllEmployees();
                        for (Employee emp : employees) {
                            System.out.println("ID: " + emp.getId() + ", Name: " + emp.getName() + ", Department ID: " + emp.getDepartmentId());
                        }
                        break;
                    case 3:
                        // Update employee
                        System.out.print("Enter employee ID to update: ");
                        int updateId = scanner.nextInt();
                        scanner.nextLine(); // Consume newline
                        System.out.print("Enter new name for the employee: ");
                        String newName = scanner.nextLine();
                        System.out.print("Enter new department ID for the employee: ");
                        int newDepartmentId = scanner.nextInt();

                        Employee updatedEmployee = new Employee(updateId, newName, newDepartmentId);
                        employeeService.updateEmployee(updatedEmployee);
                        System.out.println("Employee updated successfully!");
                        break;
                    case 4:
                        // Delete employee
                        System.out.print("Enter employee ID to delete: ");
                        int deleteId = scanner.nextInt();
                        employeeService.deleteEmployee(deleteId);
                        System.out.println("Employee deleted successfully!");
                        break;
                    case 5:
                        // Exit the program
                        System.out.println("Exiting program...");
                        System.exit(0);
                    default:
                        System.out.println("Invalid choice!");
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
