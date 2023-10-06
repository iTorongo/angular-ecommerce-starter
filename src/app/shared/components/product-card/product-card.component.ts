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
  @Input({ required: true }) product!: Product;
  @Input() displayDiscount: boolean = false;
}
