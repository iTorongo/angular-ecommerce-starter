import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../../core/types';
import { IconType } from '../../../core/enums/icons.enum';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss'],
})
export class CartOverviewComponent implements OnInit {
  /**
   * Hold cart stream
   */
  public cart$: Observable<Cart> = new Observable();

  readonly IconType = IconType;

  /**
   * Constructor
   * @param cartService
   */
  constructor(private cartService: CartService) {}

  /**
   * On init get initial cart
   */
  ngOnInit() {
    this.cart$ = this.cartService.getCart();
    this.cartService.triggerGetCart();
  }
}
