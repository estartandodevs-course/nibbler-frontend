import { Component } from '@angular/core';

@Component({
  selector: 'app-card-selfcare-popup',
  templateUrl: './card-selfcare-popup.component.html',
  styleUrl: './card-selfcare-popup.component.scss',
})
export class CardSelfcarePopupComponent {
  activitySelected: string | null = null;
  videoSrc: string = '';
  videoDisplayed: boolean = false;

  selectActivity(activity: string): void {
    this.activitySelected = activity;
  }

  initiateActivity(): void {
    if (this.activitySelected) {
      // Definir o vídeo correspondente à atividade
      switch (this.activitySelected) {
        case 'stretch':
          this.videoSrc = 'assets/videosSelfcare/stretching.mp4';
          break;
        case 'breathing':
          this.videoSrc = 'assets/videosSelfcare/breathing.mp4';
          break;
        case 'drinking-water':
          this.videoSrc = 'assets/videosSelfcare/drinking-water.mp4';
          break;
        default:
          this.videoSrc = '';
          break;
      }

      this.videoDisplayed = true;
    }
  }
}
