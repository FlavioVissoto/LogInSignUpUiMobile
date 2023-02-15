import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, CheckboxComponent, LogoComponent],
  exports: [ButtonComponent, InputComponent, CheckboxComponent, LogoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
