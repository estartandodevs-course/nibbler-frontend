import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrl: './card-popup.component.scss',
})
export class CardPopupComponent {
  @Input() imageMoodNilo: string = 'assets/iconsPopup/nilo-perfil-sad.png';
  @Input() title: string = 'Ocorreu um erro no sistema';
  @Input() message: string = 'Por favor, tente novamente mais tarde.';
  @Input() statusButton1: string = 'Finalizado';
  @Input() statusButton2: string = 'Finalizado';
  @Input() backgroundColor: 'status-success' | 'status-error-neutral' = 'status-success';
  @Input() routeButton1: string = '';
  @Input() routeButton2: string = '';
  @Input() showButton2: boolean = false;
}
