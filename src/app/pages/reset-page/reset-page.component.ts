import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { CounterValueComponent } from '../../counter/counter-value/counter-value.component';
import { AgeVerificationFormComponent } from '../../forms/age-verification-form/age-verification-form.component';
import { TitleComponent } from '../../ui/title/title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-page',
  standalone: true,
  imports: [
    AgeVerificationFormComponent,
    CounterValueComponent,
    TitleComponent,
  ],
  templateUrl: './reset-page.component.html',
  styleUrl: './reset-page.component.scss',
})
export class ResetPageComponent implements OnInit {
  private readonly counterService = inject(CounterService);
  private readonly route = inject(ActivatedRoute);
  pageTitle?: string;

  ngOnInit() {
    this.pageTitle = this.route.snapshot.title;
  }

  onFormSubmit() {
    this.counterService.resetCounter();
  }
}
