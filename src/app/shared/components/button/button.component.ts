import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() isDisabled: boolean = false;
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input() router: string = '';
  @Input() type: string = 'submit';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.router && !this.isDisabled) {
      this.clicked.emit();
    }
  }
}
