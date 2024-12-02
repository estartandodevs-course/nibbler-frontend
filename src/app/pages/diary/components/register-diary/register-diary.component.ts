import { Component } from '@angular/core';

@Component({
  selector: 'app-register-diary',
  templateUrl: './register-diary.component.html',
  styleUrl: './register-diary.component.scss',
})
export class RegisterDiaryComponent {
  reflection = {
    reflectionText: '',
    emotion: '',
  };

  submitReflection() {
    console.log('Reflexão registrada:', this.reflection);
  }
}
