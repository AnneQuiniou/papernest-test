import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../menu/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { CounterService } from '../../services/counter/counter.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, AsyncPipe, NgClass],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  private readonly counterService = inject(CounterService);
  count$ = this.counterService.getCount();
}
