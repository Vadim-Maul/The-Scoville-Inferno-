import { Routes } from '@angular/router';
import { LoginComponent } from '@app/account/components/login/login.component';
import { RegisterComponent } from '@app/account/components/register/register.component';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
