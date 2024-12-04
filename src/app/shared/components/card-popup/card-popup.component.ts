import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrl: './card-popup.component.scss',
})
export class CardPopupComponent {
  imageMoodNilo = 'assets/iconsPopup/nilo-perfil-sad.png';
  @Input() title: string = 'Ocorreu um erro no sistema';
  message: string = 'Por favor, tente novamente mais tarde.';
  statusButton: string = 'Finalizado';
  // children:
}
