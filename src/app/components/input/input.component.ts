import { AfterViewInit, Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { CssIcon } from '../../interface/style';
import { ValidatorsServices } from '../../services/validators.services';
import { InputType } from './interfaces/input-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterViewInit {
  constructor(private validatorsServices: ValidatorsServices) {}

  listErrors: string[] = [];

  @Input() control: FormControl;
  @Input() error = false;
  @Input() type: InputType = 'text';
  @Input() cssIcon: CssIcon;
  @Input() text: string;
  /**
   * O atributo placeholder especifica uma dica curta que descreve o valor esperado de um campo de entrada (por exemplo, um valor de amostra ou uma breve descrição do formato esperado).
   *
   * A dica curta é exibida no campo de entrada antes que o usuário insira um valor.
   */
  @Input() placeholder: string;
  /**
   * Especifica que o campo de entrada deve ser preenchido antes de enviar o formulário.
   */
  @Input() required: boolean;
  /**
   * Especifica o valor do elemento (input).
   */
  @Input() value: string;
  /**
   * Especifica se o elemento será um campo de apenas leitura.
   */
  @Input() readonly: boolean;
  /**
   * Especifica o valor máximo do elemento (input)
   */
  @Input() max: number;
  /**
   * Especifica a quantidade máxima de caracteres permitidos no elemento (input).
   */
  @Input() maxlength: number;
  /**
   * Especifica o valor mínimo do elemento (input)
   */
  @Input() min: number;
  /**
   * Especifica a quantidade mínima de caracteres permitidos no elemento (input).
   */
  @Input() minlength: number;
  /**
   * Especifica o nome do elemento (input).
   */
  @Input() name: string;

  ngAfterViewInit(): void {
    this.eventsInput();
  }

  private eventsInput(): void {
    this.control.valueChanges.subscribe({
      next: () => {
        if (this.control.invalid) {
          this.listErrors = this.validatorsServices.getErrorMessage(this.control);
        }
      },
    });
  }
}
