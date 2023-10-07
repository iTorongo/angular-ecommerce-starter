import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '***REMOVED***app/core/types';
import { IconType } from '../../../core/enums/icons.enum';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss'],
})
export class CartOverviewComponent implements OnInit {
  public cart$: Observable<Cart> = new Observable();

  readonly IconType = IconType;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
    this.cartService.initialGetCart();
  }
}
