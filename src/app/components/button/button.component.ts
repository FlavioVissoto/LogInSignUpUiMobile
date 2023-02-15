import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CssColor, CssIcon, CssRounded } from '../../interface/style';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;

  /** Style */
  @Input() cssRounded: CssRounded = 'rounded-xs';
  @Input() cssColor: CssColor = 'blue';
  @Input() cssIcon: CssIcon;

  @Output() byClick = new EventEmitter();

  btnClick(): void {
    this.byClick.emit();
  }
}
