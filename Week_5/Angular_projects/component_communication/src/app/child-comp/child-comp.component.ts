import { Component,EventEmitter,Input, Output,OnChanges,SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  inputs:['count_child'],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'

})
export class ChildCompComponent implements OnChanges,DoCheck {
  //count_child:number=0;
@Input() count_child:number=0;
private prev_val:any;
@Output() btn_clicked=new EventEmitter<string>();
clear_count()
{
  this.btn_clicked.emit('clear the count')
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("Change detection");
}
ngDoCheck(){
  if(this.count_child !== this.prev_val)
    {
      console.log("Change detected in the value");
      this.prev_val=this.count_child;
    }
}
}
