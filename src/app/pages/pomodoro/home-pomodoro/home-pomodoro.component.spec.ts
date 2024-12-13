import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePomodoroComponent } from './home-pomodoro.component';

describe('HomePomodoroComponent', () => {
  let component: HomePomodoroComponent;
  let fixture: ComponentFixture<HomePomodoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePomodoroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
