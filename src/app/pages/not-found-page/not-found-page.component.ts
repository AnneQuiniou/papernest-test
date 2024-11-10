import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  pageTitle?: string;

  ngOnInit() {
    this.pageTitle = this.route.snapshot.title;
  }
}
