import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hi team this is example for property binding';
  isDisable=false;
  msg='';
  clickCount = 0;
  result=''
  clickMe()
  {
    this.clickCount++;
  }
  clickMsg()
  {
    this.msg='Hello team'+this.clickCount;
  }
  input_handler(event:any)
  {
    this.result=(event.target as HTMLInputElement).value;
  }
}
