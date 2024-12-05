import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() placeholder: string = 'Digite aqui...';
  @Input() title: string = 'Digite aqui...';
}
