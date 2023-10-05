import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [DefaultLayoutComponent, HeaderComponent],
})
export class LayoutModule {}
