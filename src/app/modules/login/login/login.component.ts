import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Login } from '../../../interface/user/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  credentals: Login = {} as Login;
  formGroup: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.credentals.email, {
        validators: [Validators.email, Validators.required],
        updateOn: 'blur',
      }),
      pass: new FormControl(this.credentals.pass, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
    });
  }

  navigateNewAccount(): void {
    this.router.navigate(['/login/new-account']);
  }

  login(): void {
    if (this.formGroup.valid) {
      console.log('Formulário válido, realiza login.');
    } else {
      for (const key in this.formGroup.controls) {
        this.formGroup.controls[key].updateValueAndValidity();
        // if (Object.prototype.hasOwnProperty.call(this.formGroup.controls, key)) {
        //   const element = this.formGroup.controls[key];
        // }
      }
    }
  }

  getForm(id: string): FormControl {
    return this.formGroup.get(id) as FormControl;
  }
}
