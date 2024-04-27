package org.example;


public class Employee {
    private String empId;
    private String firstName;

    public String getEmpId() {
        return empId;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNewJoiner() {
        return newJoiner;
    }

    public void setNewJoiner(String newJoiner) {
        this.newJoiner = newJoiner;
    }

    public int getSalary() {
        return Salary;
    }

    public void setSalary(int salary) {
        Salary = salary;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    private String lastName;
    private String email;
    private String gender;
    private String newJoiner;
    private int Salary;
    private int rating;



    public Employee(String empId, String firstName, String lastName, String email, String gender, String newJoiner, int Salary,int rating) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.newJoiner = newJoiner;
        this.Salary = Salary;
        this.rating = rating;
    }

    public String getGender() {
        return gender;
    }

    @Override
            public String toString()
    {
        return "Employee{"+"empId='"+empId+'\''+
                ",firstName='"+firstName+'\''+
                ",lastName='"+lastName+'\''+
                ",email='"+email+'\''+
                ",gender='"+gender+'\''+
                ",newJoiner='"+newJoiner+'\''+
                ",Salary='"+Salary+'\''+
                ",rating='"+rating+'\''+'}';

    }
}
