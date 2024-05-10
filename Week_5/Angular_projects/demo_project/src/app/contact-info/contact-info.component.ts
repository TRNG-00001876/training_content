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
}
