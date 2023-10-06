import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  HeroSectionComponent,
  ProductCardComponent,
  SearchInputComponent,
  SkeletonCardComponent,
} from './components/';
import { TruncatePipe } from './pipes';
import { ButtonComponent } from '../standalone/components';

@NgModule({
  declarations: [
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    TruncatePipe,
  ],
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
    //Components
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    // Pipes
    TruncatePipe,
  ],
})
export class SharedModule {}
