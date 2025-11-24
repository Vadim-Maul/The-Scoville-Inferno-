import { Routes } from '@angular/router';
import { MainlayoutComponent } from '@layout/mainlayout/mainlayout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
