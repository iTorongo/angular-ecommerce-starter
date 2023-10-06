import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from '***REMOVED***app/core/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts(limit: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `${environment.apiUrl}/products?limit=${limit}`
    );
  }
}
