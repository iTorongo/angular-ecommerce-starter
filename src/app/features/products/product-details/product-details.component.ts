import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  faArrowLeftLong = faArrowLeftLong;
  faStar = faStar;
  public product$: Observable<any> = new Observable();

  /**
   * Request Id
   */
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.productId = parseInt(
      this.route.snapshot.paramMap.get('productId') ?? '',
      10
    );
    if (this.productId) {
      this.getProduct();
    }
  }

  getProduct() {
    this.product$ = this.productsService.getProduct(this.productId);
  }

  addToCart() {
    console.log('Product added to cart');
  }

  backTo() {
    this.location.back();
  }
}
