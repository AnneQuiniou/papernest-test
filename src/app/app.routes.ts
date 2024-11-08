import { Routes } from '@angular/router';
import { PATHS } from './utils/paths/paths';
import { DefaultLayoutComponent } from './templates/default-layout/default-layout.component';
import { UpPageComponent } from './pages/up-page/up-page.component';
import { DownPageComponent } from './pages/down-page/down-page.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: PATHS.Empty,
        redirectTo: PATHS.Up,
        pathMatch: 'full',
      },
      {
        path: PATHS.Up,
        component: UpPageComponent,
        title: 'Go up',
      },
      {
        path: PATHS.Down,
        component: DownPageComponent,
        title: 'Go Down',
      },
      {
        path: PATHS.Reset,
        component: ResetPageComponent,
        title: 'Reset counter',
      },

      {
        path: PATHS.Other,
        component: NotFoundPageComponent,
        title: 'Page not found',
      },
    ],
  },
];
