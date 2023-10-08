import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Option } from '../../../core/types';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent {
  /**
   *  Options input props from parent component
   */
  @Input() options: Option[] = [];

  /**
   *  Default options input props from parent component
   */
  @Input() defaultOptionLabel: string = '';

  /**
   * Form field name input props
   */
  @Input() fieldName: string = '';

  /**
   * Output selected value as event emitter
   */
  @Output() select: EventEmitter<string> = new EventEmitter();

  /**
   * On change emit selec value
   * @param value
   */
  onChange(value: string) {
    this.select.emit(value);
  }
}
