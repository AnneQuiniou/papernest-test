import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { CounterComponent } from '../../counter/counter/counter.component';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [CounterComponent, TitleComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss',
})
export class UpdatePageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly counterService = inject(CounterService);
  operation?: string;
  pageTitle?: string;
  buttonText = 'Click to go up';

  ngOnInit() {
    this.pageTitle = this.route.snapshot.title;
    this.operation = this.route.snapshot.data['operation'];

    if (this.operation == 'down') {
      this.buttonText = 'Click to go down';
    }
  }

  updateCount(): void {
    let increase = true;

    if (this.operation == 'down') {
      increase = false;
    }

    this.counterService.updateCount(increase);
  }
}
