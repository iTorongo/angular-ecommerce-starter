import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ProductsService;
  const MOCK_PRODUCTS: any = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all expected products', () => {
    httpClientSpy.get.and.returnValue(of(MOCK_PRODUCTS));

    service.getProducts().subscribe((products: any) => {
      expect(products).toEqual(MOCK_PRODUCTS);
      expect(products.length).toEqual(MOCK_PRODUCTS.length);
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should return a single product with specific id', () => {
    httpClientSpy.get.and.returnValue(of(MOCK_PRODUCTS[0]));

    service.getProduct(1).subscribe((product: any) => {
      expect(product.id).toEqual(MOCK_PRODUCTS[0].id);
      expect(product.title).toEqual(MOCK_PRODUCTS[0].title);
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
