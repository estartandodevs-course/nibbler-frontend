import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardPopupComponent } from './components/card-popup/card-popup.component';
import { CardSelfcarePopupComponent } from './components/card-selfcare-popup/card-selfcare-popup.component';
import { RouterModule } from '@angular/router';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component';

@NgModule({
  declarations: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent, SpeechBubbleComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent],
})
export class SharedModule {}
