import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStoreComponent } from './find-store.component';

describe('FindStoreComponent', () => {
  let component: FindStoreComponent;
  let fixture: ComponentFixture<FindStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindStoreComponent]
    });
    fixture = TestBed.createComponent(FindStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
