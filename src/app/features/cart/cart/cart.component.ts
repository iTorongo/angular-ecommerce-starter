import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../../core/types';
import { CartService } from '../../../shared/services/cart/cart.service';
import { IconType } from '../../../core/enums/icons.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  /**
   * Initialize IconType to read from template
   */
  readonly IconType = IconType;

  /**
   * Cart observable stream
   */
  public cart$: Observable<Cart> = new Observable();

  /**
   * Constructor
   * @param cartService
   */
  constructor(private cartService: CartService) {}

  /**
   * On init to get cart stream and trigger initially
   */
  ngOnInit() {
    this.cart$ = this.cartService.getCart();
    this.cartService.triggerGetCart();
  }

  /**
   * Remove product from cart and trigger to get updated cart
   * @param productId
   */
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId)?.subscribe(() => {
      this.cartService.triggerGetCart();
    });
  }
}
