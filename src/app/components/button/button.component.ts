import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;

  @Output() byClick = new EventEmitter();

  btnClick(): void {
    this.byClick.emit();
  }
}
