import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {
  //parent_data='Hi this is the infor from the parent';
  count=0;
  message:string=''
  increment()
  {
    this.count++;
  }
  decrement()
  {
    this.count--;
  }
  handleChild(data:string)
  {
    this.message=data;
    this.count=0;
  }
}
