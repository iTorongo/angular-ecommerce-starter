import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Option } from '../../../core/types';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent {
  @Input() options: Option[] = [];
  @Input() defaultOptionLabel: string = '';
  @Input() fieldName: string = '';
  @Output() select: EventEmitter<string> = new EventEmitter();

  onChange(value: string) {
    this.select.emit(value);
  }
}
