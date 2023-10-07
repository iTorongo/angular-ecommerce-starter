import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartOverviewComponent } from './cart-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CartOverviewComponent', () => {
  let component: CartOverviewComponent;
  let fixture: ComponentFixture<CartOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOverviewComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
