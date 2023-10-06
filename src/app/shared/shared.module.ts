import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroSectionComponent, ProductCardComponent } from './components/';
import { ButtonComponent } from '../standalone/components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TruncatePipe, HeroSectionComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    ButtonComponent,
  ],
  exports: [
    FormsModule,
    TruncatePipe,
    HeroSectionComponent,
    ProductCardComponent,
  ],
})
export class SharedModule {}
