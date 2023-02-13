import { Component, Input } from '@angular/core';

import { InputType } from './interfaces/input-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  value = '';

  @Input() error = false;
  @Input() type: InputType = 'text';
  @Input() text: string;
  @Input() placeholder: string;

  getInputTypeIcon(): string {
    switch (this.type) {
      case 'password':
        return 'fa-lock-keyhole';
      case 'email':
        return 'fa-envelope';
      default:
        return '';
    }
  }
}
