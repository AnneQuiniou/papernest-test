import { Component, inject, OnInit } from '@angular/core';
import { MenuComponent } from '../../menu/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, switchMap } from 'rxjs';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CounterService } from '../../services/counter/counter.service';
import { ThemeService } from '../../services/theme/theme.service';
import { ThemeColor } from '../../utils/types/theme.type';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet,
    AsyncPipe,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    ToolbarComponent,
    NgClass,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent implements OnInit {
  private readonly counterService = inject(CounterService);
  private readonly themeService = inject(ThemeService);

  pageTitle?: string;
  theme$?: Observable<ThemeColor>;

  appTitle = 'Test Papernest';
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

  ngOnInit() {
    this.theme$ = this.counterService.getCount().pipe(
      switchMap((count) => {
        return this.themeService.getTheme(count);
      }),
    );
  }

  toggleMenu() {
    this.opened = !this.opened;
  }
}
