import { Component } from '@angular/core';
import {Observable,Subject} from 'rxjs';
@Component({
  selector: 'app-publisher-subscriber',
  template:`
  <button (click)="publish('Hello')">Publish</button>
  <div>{{message}}</div>
  `,
  styleUrl: './publisher-subscriber.component.css'
})
export class PublisherSubscriberComponent {
  private subject =new Subject<string>();
  message:string='';
  constructor(){
    this.subject.subscribe(data => { 
      this.message=data;
    })
  }
  publish(data:string){
    this.subject.next(data);
  }
}
