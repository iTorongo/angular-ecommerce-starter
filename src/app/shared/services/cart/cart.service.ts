import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FAKE_CART_ITEMS } from '../../../core/const/fake.data';
import { Cart, CartRequest } from '***REMOVED***app/core/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart$ = new BehaviorSubject<Cart>({} as Cart);
  private cartItems: Cart = FAKE_CART_ITEMS;

  constructor(private http: HttpClient) {}

  public triggerGetCart(): void {
    of(this.cartItems)?.subscribe((res) => {
      this.cart$.next(res);
    });
  }

  public getCart(): Observable<Cart> {
    return this.cart$;
  }

  addToCart(payload: CartRequest): Observable<Cart> {
    this.cartItems = {
***REMOVED***this.cartItems,
      totalProducts: this.cartItems.totalProducts + 1,
      products: [...this.cartItems.products, ...payload.products],
    };
    return of(this.cartItems);
  }

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
