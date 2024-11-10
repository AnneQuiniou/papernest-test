import { Component, inject, OnInit } from '@angular/core';
import { TitleComponent } from '../../ui/title/title.component';
import { CounterService } from '../../services/counter/counter.service';
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  TitleStrategy,
} from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ColorService } from '../../services/color/color.service';

@Component({
  selector: 'app-default-page-layout',
  standalone: true,
  imports: [TitleComponent, RouterOutlet, AsyncPipe, NgClass],
  templateUrl: './default-page-layout.component.html',
  styleUrl: './default-page-layout.component.scss',
})
export class DefaultPageLayoutComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly counterService = inject(CounterService);
  private readonly colorService = inject(ColorService);

  pageTitle?: string;
  color$?: Observable<string>;

  ngOnInit() {
    this.color$ = this.counterService.getCount().pipe(
      switchMap((count) => {
        return this.colorService.getColor(count);
      }),
    );
  }
}
