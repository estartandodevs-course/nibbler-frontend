import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardPopupComponent } from './components/card-popup/card-popup.component';
import { CardSelfcarePopupComponent } from './components/card-selfcare-popup/card-selfcare-popup.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { SpeechBubbleComponent } from './components/speech-bubble/speech-bubble.component';

@NgModule({
  declarations: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent, SpeechBubbleComponent, InputComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, CardPopupComponent, CardSelfcarePopupComponent, SpeechBubbleComponent, RouterModule, InputComponent],
})
export class SharedModule {}
