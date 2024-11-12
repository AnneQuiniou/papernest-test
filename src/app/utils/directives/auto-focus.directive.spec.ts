import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoFocusDirective } from './auto-focus.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  template: ` <input appAutofocus type="string" /> `,
})
export class TestComponent {}

describe('AutoFocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [AutoFocusDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
  });

  it('should call focus method on init', async () => {
    const focusElement = fixture.debugElement.query(By.css('input'));

    const spy = spyOn(focusElement.nativeElement, 'focus');

    await fixture.whenStable();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
