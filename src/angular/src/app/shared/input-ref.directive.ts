import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {
  constructor() {}

  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }
}
