import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSubscriberComponent } from './publisher-subscriber.component';

describe('PublisherSubscriberComponent', () => {
  let component: PublisherSubscriberComponent;
  let fixture: ComponentFixture<PublisherSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublisherSubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublisherSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
