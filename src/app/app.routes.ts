import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('@app/account/account.routes').then((m) => m.ACCOUNT_ROUTES),
      },
    ],
  },
];
