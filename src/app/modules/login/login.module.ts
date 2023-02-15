import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [LoginComponent, NewAccountComponent],
  imports: [CommonModule, LoginRoutingModule, ComponentsModule, ReactiveFormsModule],
})
export class LoginModule {}
