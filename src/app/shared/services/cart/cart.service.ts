import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FAKE_CART_ITEMS } from '../../../core/constants/fake.data';
import { Cart, CartRequest } from '***REMOVED***app/core/types';

/**
 * This service provide mock data as the public api end point doesn't support all the actions
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  /**
   * Cart as behavior service
   */
  private cart$ = new BehaviorSubject<Cart>({} as Cart);

  /**
   * Get mock cart items
   */
  private cartItems: Cart = FAKE_CART_ITEMS;

  constructor(private http: HttpClient) {}

  /**
   * Trigger to get update cart items
   */
  public triggerGetCart(): void {
    of(this.cartItems)?.subscribe((res) => {
      this.cart$.next(res);
    });
  }

  /**
   * Provide update cart observable
   * @returns
   */
  public getCart(): Observable<Cart> {
    return this.cart$;
  }

  /**
   * Add product to cart
   * @param payload
   * @returns
   */
  addToCart(payload: CartRequest): Observable<Cart> {
    this.cartItems = {
***REMOVED***this.cartItems,
      totalProducts: this.cartItems.totalProducts + 1,
      products: [...this.cartItems.products, ...payload.products],
    };
    return of(this.cartItems);
  }

  /**
   * Remove product from cart
   * @param productId
   * @returns
   */
  removeFromCart(productId: number): Observable<Cart> {
    this.cartItems = {
***REMOVED***this.cartItems,
      totalProducts: this.cartItems.totalProducts - 1,
      products: this.cartItems.products.filter(
        (product) => product.id !== productId
      ),
    };

    return of(this.cartItems);
  }

  // addToCart(payload: CartRequest): Observable<Cart> {
  // return this.http.post<CartRequest>(
  //   `${environment.apiUrl}/carts/add`,
  //   payload
  // );
  //}
}
