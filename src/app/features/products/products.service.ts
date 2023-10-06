import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from '***REMOVED***app/core/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts = (): Observable<ProductsResponse> => {
    return this.http.get<ProductsResponse>(`${environment.apiUrl}/products`);
  };

  getProduct = (id: number): Observable<ProductsResponse> => {
    return this.http.get<ProductsResponse>(
      `${environment.apiUrl}/products/${id}`
    );
  };

  searchProducts = (query: string): Observable<ProductsResponse> => {
    return this.http.get<ProductsResponse>(
      `${environment.apiUrl}/products/search?q=${query}`
    );
  };
}
