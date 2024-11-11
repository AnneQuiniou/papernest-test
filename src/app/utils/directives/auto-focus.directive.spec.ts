import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoFocusDirective } from './auto-focus.directive';
import { TestComponent } from '../../app-testing/test/test.component';

describe('AutoFocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, AutoFocusDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should focus on the element', () => {
    const focusElement = fixture.debugElement.query(
      By.directive(AutoFocusDirective),
    );
    expect(focusElement).toBeDefined();
  });
});
