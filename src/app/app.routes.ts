import { Routes } from '@angular/router';
import { PATHS } from './utils/paths/paths';
import { DefaultLayoutComponent } from './templates/default-layout/default-layout.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { operationDown, operationUp } from './utils/types/updates.type';

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
        component: UpdatePageComponent,
        data: { ...operationUp },
        title: 'Go up',
      },
      {
        path: PATHS.Down,
        component: UpdatePageComponent,
        data: { ...operationDown },
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
