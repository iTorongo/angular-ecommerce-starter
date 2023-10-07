import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  HeroSectionComponent,
  ProductCardComponent,
  SearchInputComponent,
  SkeletonCardComponent,
  CartOverviewComponent,
  SelectInputComponent,
} from './components/';
import { TruncatePipe, SortPipe } from './pipes';
import { ButtonComponent, IconComponent } from '../standalone/components';

@NgModule({
  declarations: [
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    SelectInputComponent,
    CartOverviewComponent,
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
    CartOverviewComponent,
    // Pipes
    TruncatePipe,
    SortPipe,
  ],
})
export class SharedModule {}
