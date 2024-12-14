/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() placeholder: string = 'Digite aqui...';
  @Input() title: string = '';

  value: any = ''; // Valor do campo
  disabled = false;

  // Funções para comunicar mudanças para o Angular Forms
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  // Métodos da interface ControlValueAccessor
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Método chamado ao alterar o valor do campo
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value); // Comunica a mudança para o Angular Forms
  }

  // Método chamado ao "tocar" no campo
  onBlur(): void {
    this.onTouched();
  }
}
