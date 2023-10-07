import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { EmptyComponent, IconComponent } from '../../standalone/components';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, IconComponent, EmptyComponent],
})
export class CartModule {}
