import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';
import { IconType } from '../../../core/enums/icons.enum';
import { CartService } from '../../../shared/services/cart/cart.service';
import { CartRequest, Product } from '../../../core/types';
import { DUMMY_USER_ID } from '../../../core/constants/config.constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  readonly IconType = IconType;
  public product$: Observable<any> = new Observable();

  /**
   * Product Id
   */
  productId!: number;

  /**
   * Constructor
   * @param route
   * @param productsService
   * @param location
   * @param cartService
   */
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private cartService: CartService
  ) {}

  /**
   * On init get product id from route
   */
  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    if (this.productId) {
      this.getProduct();
    }
  }

  /**
   * Get product observable based on product id
   */
  getProduct() {
    this.product$ = this.productsService.getProduct(this.productId);
  }

  /**
   * Prepare payload while clicking add to cart button
   * @param product
   */
  onAddToCart(product: Product) {
    const requestPayload: CartRequest = {
      userId: DUMMY_USER_ID,
      products: [
        {
          id: product.id,
          quantity: 1,
          title: product.title,
          price: product.price,
        },
      ],
    };
    this.addProductToCart(requestPayload);
  }

  /**
   * Add product to cart  and trigger to update get cart stream
   * @param requestPayload
   */
  addProductToCart(requestPayload: CartRequest) {
    this.cartService.addToCart(requestPayload)?.subscribe(() => {
      this.cartService.triggerGetCart();
    });
  }

  /**
   * Back to previous page
   */
  backTo() {
    this.location.back();
  }
}
