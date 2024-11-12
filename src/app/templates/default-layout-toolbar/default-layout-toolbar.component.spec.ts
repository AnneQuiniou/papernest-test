import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutToolbarComponent } from './default-layout-toolbar.component';

describe('DefaultLayoutToolbarComponent', () => {
  let component: DefaultLayoutToolbarComponent;
  let fixture: ComponentFixture<DefaultLayoutToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
