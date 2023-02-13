import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
