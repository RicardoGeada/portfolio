import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNotificationComponent } from './submit-notification.component';

describe('SubmitNotificationComponent', () => {
  let component: SubmitNotificationComponent;
  let fixture: ComponentFixture<SubmitNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
