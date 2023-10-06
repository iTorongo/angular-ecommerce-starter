import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {
  ButtonComponent,
  EmptyComponent,
  IconComponent,
} from '../../standalone/components';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingRoutingModule,
    SharedModule,
    ButtonComponent,
    EmptyComponent,
    IconComponent,
  ],
})
export class ProductsModule {}
