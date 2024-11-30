import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardPopupComponent } from './components/card-popup/card-popup.component';
import { CardSelfcarePopupComponent } from './components/card-selfcare-popup/card-selfcare-popup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent, RouterModule],
})
export class SharedModule {}
