import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonComponent } from '***REMOVED***app/standalone/components';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionComponent],
      imports: [ButtonComponent],
    });
    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find a <h1> tag with text Discover the Joy of Shopping with Us!', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('h1'));
    const h1: HTMLElement = de.nativeElement;

    expect(h1.textContent).toEqual('Discover the Joy of Shopping with Us!');
  });

  it('should navigate to products place on clicking "Shop Now" button', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    const de: DebugElement = fixture.debugElement.query(By.css('.btn'));
    const button: HTMLElement = de.nativeElement;
    button.click();

    expect(router.navigate).toHaveBeenCalledWith(['products']);
  });
});
