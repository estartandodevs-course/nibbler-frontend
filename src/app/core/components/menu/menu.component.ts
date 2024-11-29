import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isOpen = false;
  navData = navData;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
export const navData = [];
