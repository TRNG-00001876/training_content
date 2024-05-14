import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css'
})
export class Comp2Component {

    newEmp:any={};
    constructor(private emp_service:EmployeeService){}
    addEmployee():void{
      this.emp_service.addEmployee(this.newEmp);
      this.newEmp={};
    }
}
