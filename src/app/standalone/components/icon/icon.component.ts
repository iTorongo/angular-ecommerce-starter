import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faXmark,
  faCartShopping,
  faLongArrowLeft,
  faStar,
  faMagnifyingGlass,
  faCircleXmark,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { IconType } from 'src/app/core/enums/icons.enum';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  /**
   * Input icon type from parent component
   */
  @Input() iconType: IconType = IconType.INFO;

  /**
   * Defined font awesome icon as Record to use it on template
   */
  fontAwesomeIcon: Record<string, any> = {
    [IconType.INFO]: faInfo,
    [IconType.BARS]: faBars,
    [IconType.CLOSE]: faXmark,
    [IconType.CART]: faCartShopping,
    [IconType.LEFT_ARROW]: faLongArrowLeft,
    [IconType.CIRCLE_CLOSE]: faCircleXmark,
    [IconType.SEARCH]: faMagnifyingGlass,
    [IconType.STAR]: faStar,
  };
}
