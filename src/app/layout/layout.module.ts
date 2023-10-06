import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { IconComponent } from '../standalone/components/icon/icon.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule, IconComponent],
  exports: [DefaultLayoutComponent, HeaderComponent],
})
export class LayoutModule {}
