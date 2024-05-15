import { Component } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Observable_Demo';

  observable:any=Observable.create((observer:any)=>{
    observer.next('Begin Suscription to observer')

  setTimeout(()=>{
    observer.next('Update in data')
  },3000);

  setTimeout(()=>{
    observer.complete()
  },5000)

  /*setTimeout(()=>{
    observer.error('Whoopsie!!!')
  },5000)*/

  })
  ngOnInit()
  {
    this.observable.subscribe(
      (data:string)=>console.log(data),
      (error:any)=>console.log(error),
      () => console.log('Subscription finished')

  )
  console.log('Inialization');
  }

  
}
