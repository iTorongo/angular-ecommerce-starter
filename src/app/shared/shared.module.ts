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
import { SelectInputComponent } from './components/select-input/select-input.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    SearchInputComponent,
    ProductCardComponent,
    SkeletonCardComponent,
    SelectInputComponent,
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
    SelectInputComponent,
    // Pipes
    TruncatePipe,
  ],
})
export class SharedModule {}
