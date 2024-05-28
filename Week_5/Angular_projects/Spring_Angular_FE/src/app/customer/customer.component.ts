import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  CustomerArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  
  customername: string ="";
  customeraddress: string ="";
  mobile: Number =0;
 
  currentCustomerID = "";



constructor(private http: HttpClient )
  {
    this.getAllCustomer();
 
  }

  getAllCustomer()
  {
    
    this.http.get("https://springboot-app-azure.azurewebsites.net/api/v1/customer/getAllCustomer")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.CustomerArray = resultData;
    });
  }
 
  register()
  {
  
    let bodyData = {
      "customername" : this.customername,
      "customeraddress" : this.customeraddress,
      "mobile" : this.mobile
    };
 
    this.http.post("https://springboot-app-azure.azurewebsites.net/api/v1/customer/createCustomer",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
        this.getAllCustomer();

        this.customername = '';
      this.customeraddress = '';
        this.mobile  = 0;
    });
  }
  setUpdate(data: any)
  {
   this.customername = data.customername;
   this.customeraddress = data.customeraddress;
   this.mobile = data.mobile;
   this.currentCustomerID = data.customerid;
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "customerid" : this.currentCustomerID,
      "customername" : this.customername,
      "customeraddress" : this.customeraddress,
      "mobile" : this.mobile
    };
    
    this.http.put("https://springboot-app-azure.azurewebsites.net/api/v1/customer/updateCustomer",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        this.getAllCustomer();
        this.customername = '';
        this.customeraddress = '';
        this.mobile  = 0;
    });
  }
 
  save()
  {
    if(this.currentCustomerID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any)
  {
    
    
    this.http.delete("https://springboot-app-azure.azurewebsites.net/api/v1/customer/deleteCustomer"+ "/"+ data.customerid,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllCustomer();

        this.customername = '';
      this.customeraddress = '';
        this.mobile  = 0;
  
    });
 
  }
 }