import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css'
})
export class Comp1Component implements OnInit{
  employees:any[]=[];
  constructor(private emp_service:EmployeeService){}
  ngOnInit(): void {
    this.employees=this.emp_service.getEmployees();
  }
  addEmployee(employee:any):void{
    this.emp_service.addEmployee(employee);
  }
  deleteEmployee(index:number):void{
    this.emp_service.deleteEmployee(index);

  }
  
}
