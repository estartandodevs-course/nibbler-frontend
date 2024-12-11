import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  visible: boolean = true;

  viewpass() {
    this.visible = !this.visible;
  }
}
