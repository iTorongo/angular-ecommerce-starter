import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ButtonComponent, EmptyComponent } from '../../standalone/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ButtonComponent,
    EmptyComponent,
  ],
})
export class ProductsModule {}
