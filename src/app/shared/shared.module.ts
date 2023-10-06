import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  HeroSectionComponent,
  ProductCardComponent,
  SearchInputComponent,
  SkeletonCardComponent,
} from './components/';
import { TruncatePipe, SortPipe } from './pipes';
import { ButtonComponent, IconComponent } from '../standalone/components';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    SelectInputComponent,
    CartComponent,
    TruncatePipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ButtonComponent,
    IconComponent,
  ],
  exports: [
    FormsModule,
    //Components
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    SelectInputComponent,
    CartComponent,
    // Pipes
    TruncatePipe,
    SortPipe,
  ],
})
export class SharedModule {}
