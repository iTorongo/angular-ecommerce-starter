import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { SortBy } from '***REMOVED***app/core/enums/sort.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<any> = new Observable();
  fakeProducts = Array(12);

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
