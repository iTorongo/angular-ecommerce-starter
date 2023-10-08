import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { SortBy } from '../../../core/enums/sort.enum';
import { Option, Product, ProductsResponse } from '../../../core/types';
import { UtilsService } from '***REMOVED***app/core/services/utils/utils.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductsResponse> = new Observable();
  fakeProducts = Array(12);
  sortOptions: Option[] = [];
  sortBy: string = '';

  constructor(
    private productService: ProductsService,
    private utils: UtilsService
  ) {
    this.sortOptions = this.utils.generateOptionKeyValue(SortBy);
  }

  onSearch(searchValue: string) {
    this.products$ = searchValue
      ? this.productService.searchProducts(searchValue)
      : this.productService.getProducts();
  }

  onSelect(value: string) {
    this.sortBy = value;
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
