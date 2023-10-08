import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconType } from '../../../core/enums/icons.enum';
import { Product } from '../../../core/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly IconType = IconType;

  /**
   * Get product details from parent component
   */
  @Input({ required: true }) product!: Product;

  /**
   * Determine to display/hide discount on card
   */
  @Input() displayDiscount: boolean = false;
}
