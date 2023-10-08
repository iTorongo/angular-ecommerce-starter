import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  /**
   * Constructor
   * @param router
   */
  constructor(private router: Router) {}

  /**
   * On click call to action button navigate to product page
   */
  onClick() {
    this.router.navigate(['products']);
  }
}
