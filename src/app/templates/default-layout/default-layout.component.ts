import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../menu/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { CounterService } from '../../services/counter/counter.service';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbar } from '@angular/material/toolbar';
import { map, Observable } from 'rxjs';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    AsyncPipe,
    NgClass,
    MatToolbar,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    ToolbarComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  private readonly counterService = inject(CounterService);
  appTitle = 'Test Papernest';
  count$ = this.counterService.getCount();
  defaultMode: MatDrawerMode = 'side';
  menuMode$?: Observable<MatDrawerMode>;
  opened = true;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);

    this.menuMode$ = breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map(({ matches }) => {
          console.log('here');
          return matches ? 'side' : 'over';
        }),
      );
  }

  toggleMenu() {
    this.opened = !this.opened;
  }
}
