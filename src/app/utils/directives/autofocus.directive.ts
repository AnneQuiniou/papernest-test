import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);
  private readonly cdRef = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
    this.cdRef.detectChanges();
  }
}
