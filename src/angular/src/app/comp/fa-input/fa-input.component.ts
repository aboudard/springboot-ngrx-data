import { Component, ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { InputRefDirective } from '../../shared/input-ref/input-ref.directive';


@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: [ './fa-input.component.scss' ]
})
export class FaInputComponent {

  @Input() icon: string;

  @Output() value = new EventEmitter<string>();
  
  inputFocus = false;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  @HostBinding('class.focus')
  get focus() {
    return this.input ? this.input.focus : false;
  }
}
