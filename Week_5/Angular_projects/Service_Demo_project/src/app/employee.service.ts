import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    private employees:any[]=[];
    constructor(){}
    getEmployees():any[]{
        return this.employees;
    }
    addEmployee(employee:any):void{
        this.employees.push(employee);
    }
    deleteEmployee(index:number):void{
        this.employees.splice(index,1);
    }
    updateEmployee(index:number,updatedEmployee:any):void{
        this.employees[index]=updatedEmployee;
    }

}