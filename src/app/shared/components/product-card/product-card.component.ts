import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  faStar = faStar;
  @Input({ required: true }) product!: any;
  @Input() displayDiscount: boolean = false;
}
