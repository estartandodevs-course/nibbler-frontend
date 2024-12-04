import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelfcarePopupComponent } from './card-selfcare-popup.component';

describe('CardSelfcarePopupComponent', () => {
  let component: CardSelfcarePopupComponent;
  let fixture: ComponentFixture<CardSelfcarePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSelfcarePopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSelfcarePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
