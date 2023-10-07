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
  readonly IconType = IconType;
  public cart$: Observable<Cart> = new Observable();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
    this.cartService.triggerGetCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId)?.subscribe(() => {
      this.cartService.triggerGetCart();
    });
  }
}
