import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FAKE_CART_ITEMS } from '../../../core/const/fake.data';
import { Cart, CartRequest } from '***REMOVED***app/core/types';
import { environment } from '../../../../environments/environment';

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

  addToCart(payload: CartRequest): Observable<CartRequest> {
    // Updating fake cart items as the api don't update server carts
    this.cartItems.totalProducts = this.cartItems.totalProducts + 1;

    return this.http.post<CartRequest>(
      `${environment.apiUrl}/carts/add`,
      payload
    );
  }
}
