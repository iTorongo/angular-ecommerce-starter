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
import { TruncatePipe } from './pipes';
import { ButtonComponent, IconComponent } from '../standalone/components';

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
    // Pipes
    TruncatePipe,
  ],
})
export class SharedModule {}
