import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrl: './speech-bubble.component.scss',
})
export class SpeechBubbleComponent {
  @Input() variant: 'arrow-direction-right' | 'arrow-direction-bottom' = 'arrow-direction-right';
}
