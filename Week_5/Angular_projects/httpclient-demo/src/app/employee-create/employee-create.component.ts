import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent {
@Input() employeeDetails={name:'',email:'',phone:0};
constructor(public restApi:RestApiService,public router:Router){}
addEmployee(dataEmployee:any){
  this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
    this.router.navigate(['/employees-list']);
  })
}
}
