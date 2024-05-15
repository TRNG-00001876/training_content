import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTheTimeComponent } from './get-the-time.component';

describe('GetTheTimeComponent', () => {
  let component: GetTheTimeComponent;
  let fixture: ComponentFixture<GetTheTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetTheTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTheTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
