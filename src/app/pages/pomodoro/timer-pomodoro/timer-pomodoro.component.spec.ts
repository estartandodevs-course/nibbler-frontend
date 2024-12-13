import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPomodoroComponent } from './timer-pomodoro.component';

describe('TimerPomodoroComponent', () => {
  let component: TimerPomodoroComponent;
  let fixture: ComponentFixture<TimerPomodoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerPomodoroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerPomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
