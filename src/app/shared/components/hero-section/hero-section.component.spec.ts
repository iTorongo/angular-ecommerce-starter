import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
});
