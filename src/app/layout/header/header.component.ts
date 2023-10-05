import { Component } from '@angular/core';
import {
  faBars,
  faXmark,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faBars = faBars;
  faXmark = faXmark;
  faCartShopping = faCartShopping;

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
