import { Routes } from '@angular/router';
import { PATHS } from './utils/paths/paths';
import { DefaultLayoutComponent } from './templates/default-layout/default-layout.component';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { operationDown, operationUp } from './utils/types/updates.type';
import { upMenuItem, downMenuItem, resetMenuItem } from './menu/menu-items';

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
        data: { ...operationUp, icon: upMenuItem.icon },
        title: upMenuItem.name,
      },
      {
        path: PATHS.Down,
        component: UpdatePageComponent,
        data: { ...operationDown, icon: downMenuItem.icon },
        title: downMenuItem.name,
      },
      {
        path: PATHS.Reset,
        component: ResetPageComponent,
        data: { icon: resetMenuItem.icon },
        title: resetMenuItem.name,
      },
      {
        path: PATHS.Other,
        component: NotFoundPageComponent,
        title: $localize`Page not found`,
      },
    ],
  },
];
