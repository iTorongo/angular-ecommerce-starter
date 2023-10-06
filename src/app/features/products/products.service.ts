import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts = () => {
    return this.http.get(`${environment.apiUrl}/products`);
  };

  getProduct = (id: number) => {
    return this.http.get(`${environment.apiUrl}/products/${id}`);
  };
}
