import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain 3 list item on navbar', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.navbar-menu'));
    const ul: HTMLElement = de.nativeElement;

    expect(ul.childElementCount).toEqual(3);
    expect(ul.firstChild?.firstChild?.textContent).toEqual(' Home ');
  });
});
