import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDiaryComponent } from './register-diary.component';

describe('RegisterDiaryComponent', () => {
  let component: RegisterDiaryComponent;
  let fixture: ComponentFixture<RegisterDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterDiaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
