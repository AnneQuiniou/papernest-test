import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeVerificationFormComponent } from './age-verification-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AgeVerificationFormComponent', () => {
  let component: AgeVerificationFormComponent;
  let fixture: ComponentFixture<AgeVerificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeVerificationFormComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
