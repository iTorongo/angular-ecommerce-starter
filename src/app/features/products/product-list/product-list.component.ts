import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { SortBy } from '../../../core/enums/sort.enum';
import { Option, ProductsResponse } from '../../../core/types';
import { UtilsService } from '../../../shared/services/utils/utils.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  /**
   * Products as observable
   */
  products$: Observable<ProductsResponse> = new Observable();

  /**
   * Fake products to display skeleton loader
   */
  fakeProducts = Array(12);

  /**
   * Select options for sorting
   */
  sortOptions: Option[] = [];

  /**
   * Sort by field name
   */
  sortBy: string = '';

  /**
   * Constructor and initialize sort options
   * @param productService
   * @param utils
   */
  constructor(
    private productService: ProductsService,
    private utils: UtilsService
  ) {
    this.sortOptions = this.utils.generateOptionKeyValue(SortBy);
  }

  /**
   * On init get products stream
   */
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  /**
   *  Fire on search while typing and call search endpoint
   * @param searchValue
   */
  onSearch(searchValue: string) {
    this.products$ = searchValue
      ? this.productService.searchProducts(searchValue)
      : this.productService.getProducts();
  }

  /**
   * Select sort by field while selecting from dropdown
   * @param value
   */
  onSelect(value: string) {
    this.sortBy = value;
  }
}
