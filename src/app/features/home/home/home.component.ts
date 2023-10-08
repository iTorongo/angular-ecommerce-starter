import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HOME_FEATURED_PRODUCTS } from '***REMOVED***app/core/constants/config.constants';
import { ProductsResponse } from '***REMOVED***app/core/types';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public featureProducts$: Observable<ProductsResponse> = new Observable();

  fakeProducts = Array(HOME_FEATURED_PRODUCTS);

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.featureProducts$ = this.homeService.getFeaturedProducts(
      HOME_FEATURED_PRODUCTS
    );
  }
}
