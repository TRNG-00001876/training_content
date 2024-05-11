import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  inputs:['count_child'],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'

})
export class ChildCompComponent {
  count_child:number=0;
//@Input() count_child:number=0;
@Output() btn_clicked=new EventEmitter<string>();
clear_count()
{
  this.btn_clicked.emit('clear the count')
}

}
