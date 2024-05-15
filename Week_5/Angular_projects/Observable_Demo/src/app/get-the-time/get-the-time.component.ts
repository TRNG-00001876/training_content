/*import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-get-the-time',
  templateUrl: './get-the-time.component.html',
  styleUrls: ['./get-the-time.component.css']
})
export class GetTheTimeComponent implements OnInit {
  time?: Observable<string>;
  currentTime = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.time = interval(1000).pipe(
      map(() => new Date().toString()),
      takeWhile(() => !this.isTimeReached(new Date('2024-05-15T08:45:30')))
    );

    this.time.subscribe(currentTime => {
      this.currentTime = currentTime;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  isTimeReached(targetTime: Date): boolean {
    return new Date() >= targetTime;
  }
}*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-the-time',
  templateUrl: './get-the-time.component.html',
  styleUrls: ['./get-the-time.component.css']
})
export class GetTheTimeComponent implements OnInit {

  constructor() { 
  }

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  currentTime  = '';

  ngOnInit(): void {
    this.time.subscribe(
      data => this.currentTime = data
    )
  }

}
