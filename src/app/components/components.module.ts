import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, CheckboxComponent],
  exports: [ButtonComponent, InputComponent, CheckboxComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
