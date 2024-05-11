import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})


export class ContactInfoComponent {
   /* companyName='Revature';
    CEO='Bharath Ashwin';
    Address='Workafella , 12th floor Teynampet';
    */
   output=''
   ClearName()
   {
    this.output=''
   }
   toDate:Date=new Date();
   message:string='Hello sample of pipe';
   mob_num:number=861.0208476;
   cur:number=1000;
}
