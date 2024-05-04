package org.example;

public class EmployeeService {
    private EmployeeRepo empRepo;
    public EmployeeService(EmployeeRepo empRepo)
    {
        this.empRepo=empRepo;
    }
    public boolean saveEmployee(Employee emp)
    {
        //Buisisness logic before saving
        return empRepo.save(emp);
    }
    public Employee getEmployeeDetails(Long id)
    {
        return empRepo.findEmployeeBYid(id);
    }
}
