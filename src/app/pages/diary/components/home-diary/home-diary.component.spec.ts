import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiaryComponent } from './home-diary.component';

describe('HomeDiaryComponent', () => {
  let component: HomeDiaryComponent;
  let fixture: ComponentFixture<HomeDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDiaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
