import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroSectionComponent, ProductCardComponent } from './components/';
import { ButtonComponent } from '../standalone/components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeroSectionComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    ButtonComponent,
  ],
  exports: [FormsModule, HeroSectionComponent, ProductCardComponent],
})
export class SharedModule {}
