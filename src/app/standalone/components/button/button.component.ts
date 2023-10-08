import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Inputs of button component
   */
  @Input() label: string = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';

  /**
   * Emit button click event
   */
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
