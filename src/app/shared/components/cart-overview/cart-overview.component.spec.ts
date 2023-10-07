import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartOverviewComponent } from './cart-overview.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CartService } from '../../services/cart/cart.service';
import { of } from 'rxjs';

class CartServiceStub {
  getCart() {
    return of({ totalProducts: 3 });
  }
  triggerGetCart() {}
}

describe('CartOverviewComponent', () => {
  let component: CartOverviewComponent;
  let fixture: ComponentFixture<CartOverviewComponent>;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOverviewComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: CartService,
          useClass: CartServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(CartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartService = TestBed.inject(CartService);
  });

  it('should contain cart item number on cart icon', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.cart-count'));
    const cartCount: HTMLElement = de.nativeElement;
    expect(cartCount.textContent).toEqual('3');
  });
});
