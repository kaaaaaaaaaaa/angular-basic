import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './../../shared/components/loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
  RouterModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [],
})
export class AuthModule{ }
