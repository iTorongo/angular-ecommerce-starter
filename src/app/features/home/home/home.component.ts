import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HOME_FEATURED_PRODUCTS } from '../../../core/constants/config.constants';
import { ProductsResponse } from '../../../core/types';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Featured products observable
   */
  public featureProducts$: Observable<ProductsResponse> = new Observable();

  /**
   * Fake products array to display skeleton loader
   */
  fakeProducts = Array(HOME_FEATURED_PRODUCTS);

  /**
   * Constructor
   * @param homeService
   */
  constructor(private homeService: HomeService) {}

  /**
   * On init call featured products
   */
  ngOnInit(): void {
    this.featureProducts$ = this.homeService.getFeaturedProducts(
      HOME_FEATURED_PRODUCTS
    );
  }
}
