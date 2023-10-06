import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { SortBy } from '../../../core/enums/sort.enum';
import { Product, ProductsResponse } from '***REMOVED***app/core/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<ProductsResponse> = new Observable();

  fakeProducts = Array(12);

  constructor(private productService: ProductsService) {}

  onSearch(searchValue: string) {
    this.products$ = searchValue
      ? this.productService.searchProducts(searchValue)
      : this.productService.getProducts();
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
