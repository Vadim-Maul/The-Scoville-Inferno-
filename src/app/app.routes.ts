import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { accountFeature } from '@app/account/store/reducers';

export const routes: Routes = [
  {
    path: '',
    providers: [provideState(accountFeature)],
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
