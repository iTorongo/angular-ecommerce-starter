import { Component } from '@angular/core';
import { HeaderMenuItems } from '../../core/constants/ui.constants';
import { IconType } from '../../core/enums/icons.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly IconType = IconType;
  readonly HeaderMenuItems = HeaderMenuItems;

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
