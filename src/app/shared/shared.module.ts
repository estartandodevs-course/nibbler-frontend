import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [ButtonComponent, MenuComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, MenuComponent],
})
export class SharedModule {}
