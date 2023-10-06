import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';
import { IconType } from '../../../core/enums/icons.enum';
import { CartService } from '***REMOVED***app/shared/services/cart/cart.service';
import { Cart, CartRequest, Product } from '***REMOVED***app/core/types';
import { DUMMY_USER_ID } from '***REMOVED***app/core/const/config.const';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  readonly IconType = IconType;
  public product$: Observable<any> = new Observable();

  /**
   * Request Id
   */
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private cartService: CartService
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

  onAddToCart(product: Product) {
    const requestPayload: CartRequest = {
      userId: DUMMY_USER_ID,
      products: [
        {
          id: product.id,
          quantity: 1,
        },
      ],
    };
    this.addProductToCart(requestPayload);
  }

  addProductToCart(requestPayload: CartRequest) {
    this.cartService.addToCart(requestPayload)?.subscribe(() => {
      this.cartService.initialGetCart();
    });
  }

  backTo() {
    this.location.back();
  }
}
