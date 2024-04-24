package org.example.dao;

import org.example.model.Employee;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmployeeDAOImpl implements EmployeeDAO {
    private static EmployeeDAOImpl instance;
    private Connection connection;

    // Private constructor to prevent external instantiation
    private EmployeeDAOImpl(Connection connection) {
        this.connection = connection;
    }

    // Method to get the singleton instance
    public static synchronized EmployeeDAOImpl getInstance(Connection connection) {
        if (instance == null) {
            instance = new EmployeeDAOImpl(connection);
        }
        return instance;
    }

    @Override
    public void addEmployee(Employee employee) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO Employee (id, name, department_id) VALUES (?, ?, ?)");
            preparedStatement.setInt(1, employee.getId());
            preparedStatement.setString(2, employee.getName());
            preparedStatement.setInt(3, employee.getDepartmentId());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Employee getEmployeeById(int id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM Employee WHERE id = ?");
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                return new Employee(resultSet.getInt("id"), resultSet.getString("name"), resultSet.getInt("department_id"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updateEmployee(Employee employee) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE Employee SET name = ?, department_id = ? WHERE id = ?");
            preparedStatement.setString(1, employee.getName());
            preparedStatement.setInt(2, employee.getDepartmentId());
            preparedStatement.setInt(3, employee.getId());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteEmployee(int id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM Employee WHERE id = ?");
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<>();
        try {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM Employee");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                employees.add(new Employee(resultSet.getInt("id"), resultSet.getString("name"), resultSet.getInt("department_id")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return employees;
    }
}
