import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: HomeService;
  const MOCK_PRODUCTS: any = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return specific number of feature products', () => {
    httpClientSpy.get.and.returnValue(of(MOCK_PRODUCTS.slice(0, 2)));

    service.getFeaturedProducts(2).subscribe((products: any) => {
      expect(products.length).toEqual(2);
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
