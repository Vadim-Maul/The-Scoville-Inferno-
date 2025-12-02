import { Routes } from '@angular/router';
import { LoginComponent } from '@app/account/components/login/login.component';
import { RegisterComponent } from '@app/account/components/register/register.component';
import { provideEffects } from '@ngrx/effects';
import { RegisterEffect } from '@app/account/store/effects/register.effect';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    providers: [provideEffects([RegisterEffect])],
  },
];
