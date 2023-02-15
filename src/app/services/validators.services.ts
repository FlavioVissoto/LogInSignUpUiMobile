import { FormControl, ValidationErrors } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidatorsServices {
  getErrorMessage(control: FormControl): string[] {
    if (!control || !control.errors) {
      return [];
    }

    const errorList: string[] = [];

    for (const key in control.errors) {
      errorList.push(this.getTypeError(key, control.errors[key]));
    }

    return errorList;
  }

  private getTypeError(type: string, validaton: ValidationErrors): string {
    switch (type) {
      case 'required':
        return this.REQUIRED_MESSAGE;
      case 'email':
        return this.EMAIL_MESSAGE;
      case 'minlength':
        return this.MIN_LENGHT_MESSAGE.replace('{0}', validaton['requiredLength']);
      default:
        return 'Não existe mensagem para tipo de erro: ' + type;
    }
  }

  readonly EMAIL_MESSAGE = 'Por favor insira um endereço de email válido';
  readonly MIN_LENGHT_MESSAGE = 'Por favor insira {0} caracteres';
  readonly REQUIRED_MESSAGE = 'Campo obrigatório';
}
