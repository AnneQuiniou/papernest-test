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

  it('should be invalid if day value is above 31', async () => {
    const birthDayValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthDay"]',
    );
    birthDayValue.value = '45';

    birthDayValue.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalse();
  });

  it('should be invalid if day value is empty', async () => {
    const birthDayValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthDay"]',
    );
    birthDayValue.value = '';

    birthDayValue.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalse();
  });

  it('should be invalid if all values entered but not over 18', async () => {
    const underAgeYear = new Date().getFullYear() - 15;
    const birthDayValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthDay"]',
    );
    const birthMonthValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthMonth"]',
    );
    const birthYearValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthYear"]',
    );
    birthDayValue.value = '03';
    birthMonthValue.value = '11';
    birthYearValue.value = underAgeYear.toString();

    birthDayValue.dispatchEvent(new Event('input'));
    birthMonthValue.dispatchEvent(new Event('input'));
    birthYearValue.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.form.valid).toBeFalse();
  });

  it('should be valid if all values entered and within range', async () => {
    const birthDayValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthDay"]',
    );
    const birthMonthValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthMonth"]',
    );
    const birthYearValue = fixture.nativeElement.querySelector(
      'input[formControlName="birthYear"]',
    );
    birthDayValue.value = '03';
    birthMonthValue.value = '11';
    birthYearValue.value = '1988';

    birthDayValue.dispatchEvent(new Event('input'));
    birthMonthValue.dispatchEvent(new Event('input'));
    birthYearValue.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.form.valid).toBeTrue();
  });
});
